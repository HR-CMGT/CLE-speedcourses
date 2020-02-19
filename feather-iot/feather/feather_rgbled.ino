#include <ESP8266WiFi.h>

// use a mobile hotspot or a IoT enabled WIFI network
const char* ssid     = "name_of_your_wifi_network";
const char* password = "password_of_your_wifi_network";

// paste the url of your own webservice here
const char* host = "wifitest.adafruit.com";
String url = "/testwifi/index.html";

// ports of your RGB led
int rpin = 13;
int gpin = 14;
int bpin = 16;

// if anode rgb led, connect long pin to 3V and reverse r,g,b values
// if cathode rgb led, connect long pin to GND
bool anode = false;

int valueR = 0;
int valueG = 0;
int valueB = 0;

void setup() {
  pinMode(rpin, OUTPUT);
  pinMode(gpin, OUTPUT);
  pinMode(bpin, OUTPUT);
  Serial.begin(115200);
  delay(100);

  // We start by connecting to a WiFi network

  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.print("WiFi connected. IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  delay(6000); // wait n seconds before calling url again

  Serial.print("connecting to ");
  Serial.println(host);

  // Use WiFiClient class to create TCP connections
  WiFiClient client;
  const int httpPort = 80;
  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed");
    return;
  }

  // We now create a URI for the request
  Serial.print("Requesting URL: ");
  Serial.println(url);

  // This will send the request to the server
  client.print(String("GET ") + url + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" +
               "Connection: close\r\n\r\n");
  delay(500);

  // Read all the lines of the reply from server and print them to Serial
  String line = "";
  while (client.available()) {
    line = client.readStringUntil('\r');
    // comment out the next line to get less debug information
    Serial.print(line);
  }

  Serial.println("closing connection.. total value is:");
  Serial.println(line);
  updateRGBLed(line);
}

// Verwijder spaties en return characters (/r /n) uit RGB string
void updateRGBLed(String webColor) {
  webColor.replace(" ", "");
  webColor.replace("\n", "");
  int firstComma = webColor.indexOf(",");
  int secondComma = webColor.indexOf(",", firstComma + 1);
  String r = webColor.substring(0, firstComma);
  String g = webColor.substring(firstComma + 1, secondComma);
  String b = webColor.substring(secondComma + 1);
  // feather analog values go from 0 to 1024 instead of 0 to 255
  valueR = r.toInt() * 4;
  valueG = g.toInt() * 4;
  valueB = b.toInt() * 4;
  // if anode type RGB led, reverse the color values
  if(anode){
    valueR = 1024 - valueR;
    valueG = 1024 - valueG;
    valueB = 1024 - valueB;
  }
  analogWrite(rpin, valueR);
  analogWrite(gpin, valueG);
  analogWrite(bpin, valueB);
}
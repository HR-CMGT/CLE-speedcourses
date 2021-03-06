# Circuit Playground Connections

Some tips and ideas to connect external hardware to your CPE!

- [Resistors](#resistors)
- [Breadboards](#breadboards)
- [External LED](#led)
- [External power for Playground](#power)
- [How to check sensor values](#values)
- [External Switch 3 pins](#switch)
- [External Button 2 pins](#button)
- [Force sensor](#button)
- [Infrared communication](#infrared)
- [Rotating Button](#potentio)
- [Servo](#servo)
- [Servo with external power](#external)
- [Distance Sensor](#distance)
- [Neopixel Strip](#neopixel)
- [DC Motors](#dcmotor)
- [Solenoid (push/pull)](#solenoid)
- [Other parts](#parts)
- [Where to buy](#shopping)

<br>
<br>
<br>

---

## <a name="resistors"></a>Resistors

If you connect Power directly to Ground, you get a short circuit ⚡️⚡️⚡️ . A **RESISTOR** prevents short circuits by slowing down the flow of power. 

A LED has almost no resistance by itself, that's why we use a resistor to prevent damage to the LED or the battery. Larger resistors will slow down the flow of power more! In this example, the LED will burn less bright, if you increase the resistor. 

![resistor](./images/resistors.png)

- [Resistor codes](http://www.resistor-calculator.com)
 
## <a name="breadboards"></a>Breadboards

A breadboard provides an easy way to connect lots of tiny components together without soldering.

![breadboard](./images/breadboard.jpg)

- [📺  How to use a breadboard](https://www.youtube.com/watch?v=6WReFkfrUIk)

<br>
<br>
<br>

---

## <a name="led"></a>External LED

Je kan een breadboard gebruiken om externe electronica makkelijk aan te sluiten aan de playground. Gebruik een LED en een 220 Ohm weerstand. De weerstand zorgt dat je lampje niet beschadigt. 

Let op dat het lange pootje van de LED naar de stroom gaat, en het korte pootje gaat naar GND. De weerstand mag wel aan beide kanten zitten.

![led](./images/extled.png)

Als je meerdere LEDS wil aansturen kan je ze allemaal aan een eigen poort aansluiten. Ze kunnen wel de GND delen. Gebruik daarvoor het lange gootje van de breadboard.

![led](./images/breadboard_leds.png)

<br>
<br>
<br>

---

## <a name="power"></a>External power for playground

The playground express has a port for an external battery. If you use a rechargable **Lithium Polymer** battery, it will recharge if the playground is connected to USB. The batteries are **3.7 Volt**. The amount of **mAh** *(milli Ampere per hour)* determines how long the battery lasts. Smaller batteries have less mAh.

> NOTE: this does not power the [crickit](../crickit/readme.md)! If you have a crickit connected, you should use the crickit's external power.

![lipoly](./images/lipoly.png)

- [Adafruit Explanation of LiPoly batteries](https://learn.adafruit.com/circuit-playground-lesson-number-0/battery-jack-supply)
- [Lithium Polymer Battery at KIWI electronics](https://www.kiwi-electronics.nl/lithium-ion-polymer-battery-3-7v-1200mAh?search=lipoly&description=true)

<br>
<br>
<br>

---

## <a name="values"></a>How to check sensor values

Use USB pairing in Chrome to display sensor values from the CPE in the browser.

![usb](./images/usb.png)
![usb](./images/usb2.png)

<br>
<br>
<br>

---

## <a name="switch"></a>External Switch 3 pins

Put 3.3V on the first pin. The position of the switch will send power to the GND or to the A2 pin, depending on the position.

![switch](./images/switch3.png)

Gebruik `digitalRead()` om te zien of de switch in positie 0 of 1 staat.

```javascript
let switchValue = pins.A2.digitalRead()
```
![switch](./images/readswitch.png)

---
<br>
<br>
<br>

## <a name="button"></a>External Button 2 pins

Put power from 3.3V or VOUT on one of the pins. Connect the other pin to an input port to read if there is power or not. Do not forget to "pull down" the input pin, to avoid random results.

![switch](./images/switch1.png)
![switch](./images/switch2.png)



<br>
<br>
<br>

---

## <a name="force"></a>Force sensor

The force sensor measures how hard you push on the plate. Use a large resistor (10K Ohm). Connect the yellow wire to an analog port such as A1, and then you can read the value on the port

![infrared](./images/force_sensor_cpe.png)
```javascript
let force = pins.A1.analogRead()
console.log(`The force is ${force}`)
```
![forceblocks](./images/force_blocks.png)

<br>
<br>
<br>

---

## <a name="infrared"></a>Infrared communication

You can use infrared to send signals from one CPE to another CPE!

![infrared](./images/infrared.png)

<br>
<br>
<br>

---

## <a name="potentio"></a>Rotating button (potentiometer)

Connect the playground 3.3V and GND pads to the outer pins of the potentiometer. Connect the playground A3 pad to the middle pin of the potentiometer. Now, you can read the value of A3 by using the **Analog read A3** block. This should be a number from 0 to 1024.

If you PAIR your playground in Chrome, you can show the value of the of A3 in the console. This way you can check if you really get a number between 0 and 1024. You can use the **map** function to convert this number to any value that you need. In this example code, the lights from 0 to 9 turn on by turning the knob. [Makecode example.](https://makecode.com/_csHRjdVVUD7A)

![potentio](./images/potentio1.png)
![potentio](./images/potentio3.png)


![potgif](./images/potentiometer2.gif)
<br>
<br>
<br>

---

## <a name="servo"></a>Servo 

The servo is used for limited but precise movement. Most servos rotate a maximum of 360 degrees.

![servo](./images/servo.jpg)
![servo](./images/servo3.png)

<br>
<br>
<br>

---



## <a name="external"></a>Servo with external Power

If your servo draws too much power, or if you need multiple servos, you can connect your servo to an external power source. Make sure the **GND** of the servo is both connected to the Playground and the ground of the external power.

![externalservo](./images/external_servo.png)

---
<br>
<br>

## <a name="distance"></a>Distance sensor

Gebruik een ultrasnoic distance sensor om afstanden te meten met de Playground Express. 

![sr04](./images/distance_sr04.jpg)

- Sluit VCC aan op stroom
- Sluit GND aan op GND 
- Sluit de TRIG aan op A1
- Sluit de ECHO aan op A2

De afstand sensor werkt door een geluid te sturen over de linker speaker, en dan met de rechter speaker te meten hoe lang het duurt voordat de echo terug komt. Deze code laat zien hoe je dat doet. Let op, het inlezen van de pulse is niet beschikbaar in de **crickit** blocks, dus de sensor zit aangesloten aan de playground.

![code_sound](./images/makecode-ultrasound.png)

**Let op** er zijn veel verschillende typen distance sensor. De meest gangbare is de SR04. Deze is 5 Volt, dus dat voltage moet je omzetten naar 3 Volt. [Hier vind je een uitleg van de SR04 sensor aansluiting voor de circuit playground express](https://learn.adafruit.com/distance-measurement-ultrasound-hcsr04)

- [SR04 5V distance sensor](https://www.kiwi-electronics.nl/ultrasonic-sensor-hc-sr04?lang=en)

Er bestaan ook **3 Volt** distance sensoren:

- [3 Volt RCW0001 afstand sensor bij TinyTronics](https://www.tinytronics.nl/shop/en/sensors/distance/ultrasonic-sensor-rcw-0001)
- [3 Volt US100 afstand sensor kopen bij TinyTronics](https://www.tinytronics.nl/shop/en/sensors/distance/ultrasonic-sensor-us-100-uart-with-temperature-sensor)
- [Adafruit 3 Volt afstand sensor](https://www.adafruit.com/product/4007)



<br>
<br>
<br>

---

## <a name="neopixel"></a>Neopixel strip

You can connect external Neopixel (RGB LED) strips to the Circuit Playground.

![neopixel](./images/neopixel.png)

The CPE board can only power a limited amount of Neopixels. To reduce power usage you can:

- Reduce the brightness
- Don't light up all leds at the same time
- Use single colors instead of full white

If you can't do this or want to use LOTS of neopixels, you can use an external power source, for example a 5V 2Amp adapter. Be careful when connecting everything! 2Amps can damage your board or neopixels.

![external](./images/neo_external_power.png)

- [Adafruit makecode neopixel documentation](https://learn.adafruit.com/neopixels-with-makecode?view=all)
- [📺 MakeCode Example](https://www.youtube.com/watch?v=HnmjztjSqIo) and more [types of connections](https://www.youtube.com/watch?v=vCDfyxNFeEw)
- [Power usage explanation](http://www.eerkmans.nl/powering-lots-of-leds-from-arduino/)

<br>
<br>
<br>

---

## <a name="dcmotor"></a>DC Motor

The DC Motor can be used for wheels and other continuous motion.
To move heavy objects you need a **Geared DC motor**. The gears are needed to convert fast motion to strong motion.

![dcmotor](./images/dcmotors.png)

DC Motors use too much power for the Circuit Playground. [We solve this by connecting the **Adafruit Crickit** to the Playground](../crickit/readme.md)!

If you don't have a CRICKIT [you can use the **CLEVER Mosfet** to safely control a DC motor](./mosfet.md)


---
<br>
<br>

## <a name="solenoid"></a>Solenoid (push/pull)

Met een solenoid kan je een horizontale of verticale beweging maken. Deze solenoid is 5 Volt en kan je aansluiten op de **Motor drive van de Crickit**. (Sluit de solenoid niet rechtstreeks aan op de Playground!)

![solenoid](./images/solenoid.jpg)

```typescript
forever(function () {
    crickit.drive1.analogWrite(1023)
    pause(100)
    crickit.drive1.analogWrite(0)
    pause(500)
})
```

- [📺 MakeCode instruction video](https://www.youtube.com/watch?v=AMvSTm0cWyA)
- [Robotshop Solenoid](https://www.robotshop.com/nl/nl/5v-solenoid.html)

---
<br>
<br>

## <a name="parts"></a>Other parts

![minipir](./images/minipir.jpg)

- [Mini Infrared Motion Detector (PIR) for 3V](https://www.adafruit.com/product/4666)
- [Force sensor](https://www.kiwi-electronics.nl/ronde-drukgevoelige-weerstand-fsr402?lang=en)
- [Air quality sensor](https://www.kiwi-electronics.nl/sensoren/adafruit-sgp30-air-quality-sensor-breakout)
- [Soil Moisture sensor](https://www.kiwi-electronics.nl/sparkfun-soil-moisture-sensor?search=moisture%20sensor&description=true)
- [🤖 Mini Pan and Tilt robot arm!](https://www.adafruit.com/product/1967)
- [⚙️ Geared DC Motor](https://www.kiwi-electronics.nl/hobby-dc-motor-140rpm-2-stuks?search=dc%20motor&description=true)

---
<br>
<br>

## <a name="shopping"></a>Shopping

- [Kiwi electronics](https://www.kiwi-electronics.nl)
- [FLORIS](https://www.floris.cc)
- [Antratek](https://www.antratek.nl/)
- [Tinytronics](https://www.tinytronics.nl/shop/nl)

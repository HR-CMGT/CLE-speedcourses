# Circuit Playground Connections

Some tips and ideas to connect external hardware to your CPE!

- Display Sensor Values
- On/Off Button
- External LED
- Infrared communication
- Rotating Button
- DC Motor

## Display Sensor Values

Use USB pairing in Chrome to display sensor values from the CPE in the browser.

![usb](usb.png)
![usb](usb2.png)

## ON/OFF Button

Put power from 3.3V or VOUT on one of the pins. Connect the other pin to an input port to read if there is power or not. Do not forget to "pull down" the input pin, to avoid random results.

![switch](switch1.png)
![switch](switch2.png)

## External LED

Connect GND to the short wire of the LED and A2 to the long wire. Make sure there is a small resistor (220Ohm or 330Ohm) in the ciruit.

![led](extled.png)

## Infrared communication

You can use infrared to send signals from one CPE to another CPE!

![infrared](infrared.png)

## Rotating button

Connect 3.3V and GND to the outer pins. Connect A2 to the middle pin. Use code to read the the value of A2. This will be a number between 0 and 1024. You can use the **map** function to convert this to values that you need.

![potentio](potentio1.png)
![potentio](potentio2.png)

## DC Motor

Use the CLEVER Mosfet to safely drive a DC motor. Use the **VOUT** to connect 5 Volt. Do not use the 3.3V pin!

![dcmotor](clever_mosfet2.png)
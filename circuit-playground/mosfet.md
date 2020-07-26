# DC Motor with MOSFET

![dcmotor](./images/dcmotor.png)

If you don't have a [CRICKIT](../crickit/readme.md) you can use the **CLEVER Mosfet** to safely control a DC motor. The **CLEVER Mosfet** is available at live CLE workshops. 

## MOSFET

| Pin  | Connection                                                 |
|------|------------------------------------------------------------|
| OUT- | GND of the DC Motor                                        |
| OUT+ | PLUS of the DC Motor                                       |
| IN-  | GND of the battery AND the GND of the Circuit Playground   |
| IN+  | PLUS of the battery, OR the VOUT of the Circuit Playground |
| S    | Connect to playground pin **A1 - A5** to send a PWM signal to the Motor    |

This example uses the **VOUT** to get 5 Volt from the CPE. Do **not** use the 3.3V port!
![dcmotor](./images/clever_mosfet2.png)

## External battery

It's safer to use an external battery to drive the motor. **Make sure the GND of the battery and the Playground are connected.**

![dcbattery](./images/clever_mosfet_extpower_bb.png)
<?php
    $color = $_GET["favcolor"];
    $split = str_split($color, 2);
    $r = hexdec($split[0]);
    $g = hexdec($split[1]);
    $b = hexdec($split[2]);

    // SAVE THE COLOR TO A TEXT FILE HERE, SO RGB.PHP CAN OPEN IT
    $file = 'color.txt';
    $current = $r . "," . $g . "," . $b;
    file_put_contents($file, $current);
    echo "Saved: " . $current;
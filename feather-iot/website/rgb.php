<?php
    // GET THE COLOR FROM A TEXT FILE
    $file = 'color.txt';
    $current = file_get_contents($file);
    echo $current;

    /* TEST WITH RANDOM RGB
    $num = rand(0,255);
    echo $num . "," . rand(0,255) . "," . (255 - $num);
    */
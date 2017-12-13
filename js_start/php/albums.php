<?php

    # dit is een voorbeeld van het sturen van data via php
    # je zou deze data uit een database kunnen halen
    # vanuit javascript haal je deze data op met window.fetch("php/albums.php")
    # de documentatie vind je op https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

    $albums = array(
    0 => array(
        'title' => 'The Thing', 
        'artist' => 'John Carpenter',
        'year' => 1986
        ),
    1 => array(
        'title' => 'Land with no Future', 
        'artist' => 'VHS Glitch',
        'year' => 1986
        ),
    );

    header('Content-type: application/json');
    echo json_encode($albums);
?>
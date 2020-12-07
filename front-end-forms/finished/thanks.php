<?php
$name = $_POST['name'];
$email = $_POST['email'];
$menu = $_POST['menu'];
$datetext = date('d-m-Y', strtotime($_POST['date']));

$vega = "";
if(isset($_POST['vega'])){
    $vega = '✅ Vegetarisch';
}

$gluten = "";
if(isset($_POST['gluten'])){
    $gluten = '✅ Glutenvrij';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservering Geslaagd</title>

</head>
<body>
    <div>
        <h2>Reservering geslaagd</h2>
        <p>
            Naam: <?=$name?> <br>
            Email: <?=$email?> <br>
            Datum: <?=$datetext?> <br>
            Menu: <?=$menu?> <br>
            Opties: <?=$vega?> <?=$gluten?> <br>
        </p>
    </div>
</body>
</html>
<?php
//Check if data is valid & generate error if not so
$errors = [];
if ($artistId == "") {
    $errors['artist'] = 'Artist cannot be empty';
}
if ($name == "") {
    $errors['name'] = 'Album cannot be empty';
}
if ($genre == "") {
    $errors['genre'] = 'Genre cannot be empty';
}
if (!is_numeric($year) || strlen($year) != 4) {
    $errors['year'] = 'Year needs to be a number with the length of 4';
}
// this error message wil overwrite the previous error when year is empty
if ($year == "") {
    $errors['year'] = 'Year cannot be empty';
}
if (!is_numeric($tracks)) {
    $errors['tracks'] = 'Tracks need to be a number';
}
if ($tracks > 255) {
    $errors['tracks'] = 'The amount of tracks must be less then 255';
}
// this error message wil overwrite the previous error when tracks is empty
if ($tracks == "") {
    $errors['tracks'] = 'Tracks cannot be empty';
}

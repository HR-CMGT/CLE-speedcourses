<?php
/** @var mysqli $db */

//Require DB settings with connection variable
require_once "includes/database.php";

//Get the result set from the database with a SQL query


//Close connection
mysqli_close($db);
?>
<!doctype html>
<html lang="en">
<head>
    <title>Music Collection</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
</head>
<body>
<header class="hero is-info">
    <div class="hero-body">
        <p class="title">Music collection</p>
        <p class="subtitle">Overview of the top albums</p>
    </div>
</header>

<main class="container">
    <section class="section grid is-col-min-10">
    <?php foreach ($musicAlbums as $musicAlbum) { ?>
        <div class="card cell">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img
                            src="images/<?= $musicAlbum['image'] ?>"
                            alt="Placeholder image"
                    />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">
                            <?= $musicAlbum['album_name'] ?>
                        </p>
                        <p class="subtitle is-6">
                            <?= $musicAlbum['artist_name'] ?>
                        </p>
                    </div>
                </div>

                <div class="content">
                    <p>
                        Gerne: <strong><?= $musicAlbum['genre'] ?></strong>
                        <br/>
                        Tracks: <strong><?= $musicAlbum['tracks'] ?></strong>
                        <br />
                        Released in: <strong><?= $musicAlbum['year'] ?></strong>
                    </p>
                </div>
            </div>
        </div>
    <?php } ?>

</body>
</html>

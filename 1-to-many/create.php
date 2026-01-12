<?php
/** @var mysqli $db */
//Require database in this file & image helpers
require_once "includes/database.php";

// WE NEED TO INCLUDE THE ARTISTS FOR THE DROPDOWN

//Check if Post isset, else do nothing
if (isset($_POST['submit'])) {
    //Postback with the data showed to the user, first retrieve data from 'Super global'
    $name = $_POST['name'];
    $artistId = $_POST['artistId'];
    $genre = $_POST['genre'];
    $year = $_POST['year'];
    $tracks = $_POST['tracks'];

    //Require the form validation handling
    require_once "includes/form-validation.php";

    if (empty($errors)) {
        //Save the record to the database
        $query = "INSERT INTO albums (name, artist_id, genre, year, tracks)
                  VALUES ('$name', '$artistId', '$genre', $year, $tracks)";
        $result = mysqli_query($db, $query) or die('Error: ' . mysqli_error($db) . ' with query ' . $query);

        // Redirect to index.php
        header('Location: index.php');
        exit;
    }
}

//Close connection
mysqli_close($db);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <title>Create New Album | Music Collection</title>
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
        <div class="column is-10">
            <h2 class="title mt-4">Create new album</h2>

            <form class="column is-6" action="" method="post">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label" for="name">Name</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input <?= isset($errors['name']) ? 'is-danger' : '' ?>" id="name" type="text" name="name" value="<?= $name ?? '' ?>"/>
                            </div>
                            <p class="help is-danger">
                                <?= $errors['name'] ?? '' ?>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label" for="artist">Artist</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <!-- Artist dropdown here-->

                            <p class="help is-danger">
                                <?= $errors['artist'] ?? '' ?>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label" for="genre">Genre</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input <?= isset($errors['genre']) ? 'is-danger' : '' ?>" id="genre" type="text" name="genre"
                                       value="<?= $genre ?? '' ?>"/>
                            </div>
                            <p class="help is-danger">
                                <?= $errors['genre'] ?? '' ?>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label" for="year">Year</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input <?= isset($errors['year']) ? 'is-danger' : '' ?>" id="year" type="text" name="year" value="<?= $year ?? '' ?>"/>
                            </div>
                            <p class="help is-danger">
                                <?= $errors['year'] ?? '' ?>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label" for="tracks">Tracks</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <input class="input <?= isset($errors['tracks']) ? 'is-danger' : '' ?>" id="tracks" type="text" name="tracks"
                                       value="<?= $tracks ?? '' ?>"/>
                            </div>
                            <p class="help is-danger">
                                <?= $errors['tracks'] ?? '' ?>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-normal"></div>
                    <div class="field-body">
                        <button class="button is-link is-fullwidth" type="submit" name="submit">Save</button>
                    </div>
                </div>
            </form>

            <a class="button mt-4" href="index.php">&laquo; Go back to the list</a>
        </div>
    </section>
</main>

</body>
</html>

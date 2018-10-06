<?php session_start() ?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="login.css">
    <title>Cluedo</title>
<?php
    require("config.php");

    // When the form is submitted
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the username and password from the form
        $username = $_POST['user'];
        $password = $_POST['pass'];
        $username = stripcslashes($username);
        $password = stripcslashes($password);
        $username = mysqli_real_escape_string($db, $username);
        $password = mysqli_real_escape_string($db, $password);

        // If sign in is selected
        if ($_POST['rg'] == 'sign-in') {
            // select the id of the row that has both the username and password
            // and turns it into an array
            $result = mysqli_query($db, "SELECT id FROM users WHERE user = '$username' and pass = '$password'");
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
            // Gets the number of items from the query
            $count = mysqli_num_rows($result);

            // The number of items should be equal to 1 if the
            // information is valid.
            if ($count == 1) {
                // Adds the username and id to the session and redirects to
                // table
                $_SESSION['id'] = $row['id'];
                $_SESSION['username'] = $username;
                header('Location: table');
            } else {
                $error = "Username or password is incorrect.";
            }
        } else {
            // If sign up was selected

            // Checks if the username already exists
            $result = mysqli_query($db, "SELECT id FROM users WHERE user = '$username'");
            $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
            $count = mysqli_num_rows($result);

            if ($count == 1) {
                $error =  "Username already exists.";

            } else {
                // If the username doesn't exist, it creates a new user
                $sql = "INSERT INTO users (id, user, pass) VALUES (null, '$username', '$password')";
                if (mysqli_query($db, $sql)) {
                    // Gets the id of the new user.
                    $result = mysqli_query($db, "SELECT id FROM users WHERE user = '$username'");
                    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

                    // Adds the username and id to the session and redirects to
                    // the table page.
                    $_SESSION['id'] = $row['id'];
                    $_SESSION['username'] = $username;
                    header('Location: table');
                } else {
                    echo "Error: " . $sql  . mysqli_error($db);
                }
            }
        }
        mysqli_close($db);
    }

?>
</head>
<body ontouchstart="">
<div class="flex-wrap">
    <form method="post">
        <input type="radio" name="rg" id="sign-in" value="sign-in" checked />
        <input type="radio" name="rg" id="sign-up" value="sign-out" />

        <label for="sign-in">Sign in</label>
        <label for="sign-up">Sign up</label>

        <input class="sign-up sign-in" name="user" type="text" onkeyup="checkTextbox()" placeholder="Username" />
        <input class="sign-up sign-in" name="pass" type="password" onkeyup="checkTextbox()" placeholder ="Password" />
        <input class="sign-up" name="repeat" type="password" onkeyup="checkTextbox()" placeholder ="Repeat Password" />
        <button disabled>Submit</button>
        <br>
        <p id="error"><?php echo $error; ?></p>
    </form>
</div>
<script src="login.js"></script>
</body>
</html>

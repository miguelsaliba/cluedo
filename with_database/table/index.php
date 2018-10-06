<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <title>Cluedo</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
<?php
    require("../config.php");
    function console_log( $data ){
        echo '<script>';
        echo 'console.log('. json_encode( $data ) .')';
        echo '</script>';
    }


    if (!isset($_SESSION['username'])) {
        header('Location: index.php');
    } else {
        $username = $_SESSION['username'];
        $result = mysqli_query($db, "SELECT user, id FROM users WHERE user != '$username';");
        $players = mysqli_num_rows($result);

        if ($players > 5) {
            $error = 'Number of players is more than 6';
        } elseif ($players < 2) {
            $error = "Number of players is less than 3";
        } else {
            while ($row = mysqli_fetch_assoc($result)) {
                $playerNames[] = $row['user'];
                $submit = true;
            }
        }
    }
?>
</head>
<body>
    <p id="error"><?php echo $error; ?></p>
    <table>
        <thead>
            <tr id="title">
                <th></th>
            </tr>
        </thead>

        <tbody>
            <tr class="title">
                <th class="subtitle">People</th>
            </tr>
            <tr>
                <td>Col. Mustard</td>
            </tr>
            <tr>
                <td>Prof. Plum</td>
            </tr>
            <tr>
                <td>Mr. Green</td>
            </tr>
            <tr>
                <td>Mrs. Peacock</td>
            </tr>
            <tr>
                <td>Miss Scarlett</td>
            </tr>
            <tr>
                <td>Mrs. White</td>
            </tr>


            <tr class="title">
                <th class="subtitle">Weapons</th>
            </tr>
            <tr>
                <td>Dagger</td>
            </tr>
            <tr>
                <td>Candle Stick</td>
            </tr>
            <tr>
                <td>Revolver</td>
            </tr>
            <tr>
                <td>Rope</td>
            </tr>
            <tr>
                <td>Lead Pipe</td>
            </tr>
            <tr>
                <td>Spanner</td>
            </tr>


            <tr class="title">
                <th class="subtitle">Rooms</th>
            </tr>
            <tr>
                <td>Hall</td>
            </tr>
            <tr>
                <td>Lounge</td>
            </tr>
            <tr>
                <td>Dining Room</td>
            </tr>
            <tr>
                <td>Kitchen</td>
            </tr>
            <tr>
                <td>Ball Room</td>
            </tr>
            <tr>
                <td>Conservatory</td>
            </tr>
            <tr>
                <td>Billiard Room</td>
            </tr>
            <tr>
                <td>Library</td>
            </tr>
            <tr>
                <td>Study</td>
            </tr>
        </tbody>
    </table>
<script src="main.js"></script>
<?php
if ($submit) {
    echo "<script>";
    echo "submit('$players', " . json_encode($playerNames) . ")";
    echo "</script>";
}
?>
</body>
</html>

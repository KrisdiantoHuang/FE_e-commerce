<?php
if (!isset($_REQUEST['page'])) {
    header('location:?page=produk_anda');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="stylesheet" href="../assets/css/style.css" />
    <script src="https://kit.fontawesome.com/664bfabc20.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link href="https://cdn.datatables.net/v/dt/dt-1.13.7/b-2.4.2/sl-1.7.0/datatables.css" rel="stylesheet" />
    <script src="https://cdn.datatables.net/v/dt/dt-1.13.7/b-2.4.2/sl-1.7.0/datatables.js"></script>
    <script src="../assets/js/env.js"></script>
    <title>Apple Store</title>
</head>

<body>
    <!-- Navbar -->
    <?php include "component/navbar.php" ?>
    <!-- /Navbar -->
    <!-- Searchbar -->
    <?php include "component/search.php" ?>
    <!-- /Searchbar -->
    <!-- Content  -->
    <div class="container card" style="font-family: Montserrat; font-style: normal;">
        <!-- Menu -->
        <?php
        $noMenu = ['inputkategori', 'editkategori', 'inputproduk', 'editproduk'];
        if (!in_array($_REQUEST['page'], $noMenu)) 
        {
            include "component/menu.php";
        }
        ?>
        <!-- /Menu -->
        <?php include $_REQUEST['page'] . ".php"; ?>
    </div>
    <!-- / Content -->
    <br><br>
    <!-- Footer -->
    <?php include "component/footer.php" ?>
    <!-- /Footer -->

    <script src="script/<?= $_REQUEST['page'].".js" ?>"></script>
    <script src="../assets/js/script.js"></script>

</body>

</html>
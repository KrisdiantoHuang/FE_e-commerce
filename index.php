<?php
if (!isset($_REQUEST['page'])) {
    header('location:?page=beranda');
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
    <?php
    // Menentukan file CSS berdasarkan halaman yang diakses
    $page_css = "assets/css/style.css"; // Default CSS
    if (isset($_REQUEST['page'])) {
        $requested_page = $_REQUEST['page'];
        if ($requested_page == 'searching') {
            $page_css = "assets/css/style2.css";
        } elseif ($requested_page == 'detail-produk') {
            $page_css = "assets/css/style3.css";
        }
    }
    ?>
    <link rel="stylesheet" href="<?php echo $page_css; ?>" />
    <link rel="stylesheet" href="assets/css/filter.css" />

    <script src="https://kit.fontawesome.com/664bfabc20.js" crossorigin="anonymous"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link href="https://cdn.datatables.net/v/dt/dt-1.13.7/b-2.4.2/sl-1.7.0/datatables.css" rel="stylesheet" />
    <script src="https://cdn.datatables.net/v/dt/dt-1.13.7/b-2.4.2/sl-1.7.0/datatables.js"></script>
    <script src="assets/js/env.js"></script>
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
    <?php include $_REQUEST['page'] . ".php"; ?>
    <!-- / Content -->
    <br><br>
    <!-- Footer -->
    <?php include "component/footer.php" ?>
    <!-- /Footer -->

    <script src="assets/js/<?= $_REQUEST['page'].".js" ?>"></script>
    <script src="assets/js/script.js"></script>

</body>

</html>
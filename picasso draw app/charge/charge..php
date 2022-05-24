<?php 
$connect = mysqli_connect("localhost","root","","my_db");
?>

<?php 
require_once 'dbConfig.php'; 
$result = $db->query("SELECT image FROM images ORDER BY id DESC"); 
?>

<?php if($result->num_rows > 0){ ?> 
        <?php while($row = $result->fetch_assoc()){ ?> 
            <img src="data:image/jpg;charset=utf8;base64,<?php echo base64_encode($row['image']); ?>" /> 
        <?php } ?> 
    </div> 
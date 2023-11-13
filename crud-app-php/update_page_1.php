<?php include ('header.php'); ?>
<?php include('dbcon.php'); ?>

<?php
if(isset($_GET['id'])){
    $id = $_GET['id'];
    //get the id value from the URL
    

    $query = "select * from `students` where `id` = '$id'";
    $result = mysqli_query($connection, $query);

    if(!$result) {
    die("query Failed". mysqli_error());
    }

    else{
    $row = mysqli_fetch_assoc($result);
    }
   }
?>

<?php

if(isset($_POST['update_students'])){

    if(isset($_GET['id_new'])){
        $idnew = $_GET['id_new'];
          //get the id value from the URL and set it to $idnew
        }
     
$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$age = $_POST['age']; 

$query = "update `students` set `first_name` = '$f_name', `last_name` = '$l_name', `age` = '$age' where `id` = '$idnew'";

$result = mysqli_query($connection, $query);

if(!$result){
die("query Failed".mysqli_error());
}

else{
    header('location: index.php?update_msg=You have successfully updated the data.');
    }

}

?>

<form action="update_page_1.php?id_new=<?php echo $id;?>" method="post">
<div class="form-group">
        <label for="f_name">First Name</label>
        <input type="text" name="f_name" class="form-control" value= <?php echo $row ['first_name']; ?>  >
        </div>
        <div class="form-group">
        <label for="l_name">Last Name</label>
        <input type="text" name="l_name" class="form-control" value= <?php echo $row ['last_name']; ?>>
        </div>
        <div class="form-group">
        <label for="age">Age</label>
        <input type="text" name="age" class="form-control" value= <?php echo $row ['age']; ?>>
</div>
<input type="submit" class="btn btn-success " name="update_students" value="UPDATE">
</form>



<?php include('footer.php'); ?>

<!--

SETTING UP BUTTON AHREF AND RETREIVING ROW FROM QUERY

 we set an ahref tag in the update button that has 
 a href="update_page_1.php?id=<php echo $row['id'];?>"

 this leads us to this page along with an id parameter in the URL

 we declare $id and assign it with the id parameter value in the URL
 we then query all the students in our database where the id field is equal to the value of $id

 the $result will get that row data from the database
 we then assign $row as an associative array with the mysqli_fetch_assoc($result)

 now we can use $row to put values in our label when a user is sent to this page

-->

<!-- 
    HOW TO EDIT

    1. we put the action to lead to this page,we also put in a URL parameter id_new followed by the id value, and the method of the form is post 
    2. we add the update button in the form of an input type submit, name is update_students
    3. we make a isset(['update_students']), so when clicked on update after the form inputs the following will occur

    4. we get the id value from id_new which is in the URL/ action of the form, and assign it to $idnew

    5. we assign names and age to their variables 

    6. in $query, we will then set the variables to the fields in the row. note that we use `where` in order to specify a condition in the table.
       in this case the id is the condition. get all the rows that have the specific id value.

    7. in $result, the changes will be set for the table in $query and in the database in $connection

-->
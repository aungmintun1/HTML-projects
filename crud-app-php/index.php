<?php include('header.php');?>
<?php include('dbcon.php'); ?> 

<!-- this ensures connection between the database is made -->


<div class ="box1">
<h2>ALL STUDENTS</h2>
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD STUDENTS</button>
</div>


<table class="table table-hover table-bordered table-striped">
    
    <thead>
        <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Update</th>
        <th>Delete</th>
        </tr>
    </thead>

    <tbody>

    <?php

    $query = "select* from `students`";
    // used to only select the students table in crud_operation database

    $result = mysqli_query($connection, $query);
    //stores all the rows from students table into query. Similar to an array
    //connection is the database crud_operation

    if (!$result){
        die("query Failed".mysqli_error());

        }

        /*
        The mysqli_fetch_assoc function fetches the next row from the $result query and $row will store it as an associative array.

        This associative array that contains the row is assigned to the variable $row.

        counter:The while loop checks if $row is not NULL. If it's an array (a row was fetched), the loop's body is executed.
        when there are no more rows it ends

        Inside the loop, you can access each column of the current row using $row['column_name'].
        After the loop's body executes, the next iteration begins, fetching the next row.
        When there are no more rows to fetch, mysqli_fetch_assoc returns NULL, and the loop exits.
        basically it is like a foreach 
        */

    else{
    while ($row = mysqli_fetch_assoc($result)) {

    ?>

            <tr>
            <td><?php echo $row['id']; ?></td>
            <td><?php echo $row ['first_name']; ?></td>
            <td><?php echo $row['last_name']; ?></td>
            <td><?php echo $row['age']; ?></td>
            <td><a href="update_page_1.php?id=<?php echo $row['id'];?>" class="btn btn-success">Update</a></td>
            <td><a href="delete_page.php?id=<?php echo $row['id'];?>" class="btn btn-danger">Delete</a></td>
            </tr>

    <?php

    }
     }

    ?>



    </tbody>
</table>

<?php
if(isset($_GET['message'])){
echo "<h6>".$_GET['message']."</h6>";
}
?>

<?php
if(isset($_GET['insert_msg'])){
echo "<h6>".$_GET['insert_msg']."</h6>";
}
?>

<?php
if(isset($_GET['update_msg'])){
echo "<h6>".$_GET['update_msg']."</h6>";
}
?>

<?php
if(isset($_GET['delete_msg'])){
echo "<h6>".$_GET['delete_msg']."</h6>";
}
?>


<form action="insert_data.php" method="post" >
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add new student</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     
        <div class="form-group">
        <label for="f_name">First Name</label>
        <input type="text" name="f_name" class="form-control">
        </div>
        <div class="form-group">
        <label for="l_name">Last Name</label>
        <input type="text" name="l_name" class="form-control">
        </div>
        <div class="form-group">
        <label for="age">Age</label>
        <input type="text" name="age" class="form-control">
        </div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <input type="submit" class="btn btn-success" name="add_students" value="ADD">|
      </div>
    </div>
  </div>
</div>
</form>

<?php include('footer.php'); ?>



<?php
include 'dbcon.php';

if(isset($_POST['add_students']))
{
    $f_name = $_POST['f_name'];
    $l_name = $_POST['l_name'];
    $age = $_POST['age'];

    if($f_name == "" || empty($f_name)) {
        header('location: index.php?message=You need to fill in the first name!');
        }

        else{

            $query = "insert into `students` (`first_name`, `last_name`, `age`) values ('$f_name','$l_name','$age')";
            $result = mysqli_query($connection,$query);

            if(!$result){
            die("Query Failed".mysqli_error());
            }
            else{
                header('location:index.php?insert_msg=You data has been added successfully');
            }
           
          
        }
}


//isset is like a click eventlistener,element is input, it is targeted with name
/*
1.we get the name and age values from the form modal, and this initiates after the add button is clicked

2.the name of the input is add_students, we use this in our click event listener.
also note that in our form we have an action="insert_data.php" and method="post"
the action leads to this file and the method refers to posting

3.in our form-group div class, we have out text input types, we reference them with their names when assigning the variables

4.now we declare varaible names and assign them the values that were inputted

5.we use the query in order to put the variables we created into the actual fields in our database. we use `insert`

6.result is the query that inserts the data into our database. it takes the database in our $connection, and the table and new row in $query

7.if there is nothing in result then it will show a error, else it will show a successful header messsage that will then be displayed from our isset function in index.php

*/
?>


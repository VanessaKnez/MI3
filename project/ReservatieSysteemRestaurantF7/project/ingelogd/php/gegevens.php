<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
    require "Connection.php" ; 

  
// bewerking ophalen
// bewerking ophalen
if(isset($_POST['bewerking']))
{
    $bewerking = $_POST['bewerking'];
}

if ($bewerking == "check") 
{
    if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['usrlvl'])) 
    {
          
        // $_POST['Wachtwoord'] = md5($_POST['Wachtwoord']);
        $Gebruikersnaam= $_POST['email'];
        $Password= $_POST['password'];
        $usrlevel= $_POST['usrlvl'];
    }
    else 
    {
        die(json_encode("missing data"));
    }
    $result = $conn -> query("SELECT * FROM klanten where Email ='$Gebruikersnaam'and Password ='$Password' and userlevel ='$usrlevel'");
    $count = mysqli_num_rows($result);

    if ($count == 1 ) 
    { 
        echo "success";
    } 
    else
    {
        echo "no";
    }
}
elseif ($bewerking == "add") 
{
    if (isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['address']) && isset($_POST['housenumber']) && isset($_POST['bus'])  && isset($_POST['telnumber'])&& isset($_POST['postalcode'])&& isset($_POST['phonenumber'])&& isset($_POST['password'])) 
    {

        // hier MOET je controle plaatsen om o.a. SQL injection 
        // te voorkomen.
        $FirstName= $_POST['firstname'];
        $LastName= $_POST['lastname'];
        $Email= $_POST['email'];
        $Address= $_POST['address'];
        $Housenumber= $_POST['housenumber'];
        $Bus= $_POST['bus'];
        $PostalCode= $_POST['postalcode'];
        $TelNumber= $_POST['telnumber'];
        $PhoneNumber= $_POST['phonenumber'];
        $Password= $_POST['password'];
        $userlvl = "klant";
        
     //  echo $bewerking ,$LastName, $FirstName  , $Email, $Address,$Housenumber, $Bus, $PostalCode, $TelNumber,  $PhoneNumber, $Password  ;
    }else
    {
        
        die(json_encode("missing data"));
        
    }
     //$checkEmail = $conn -> query("SELECT * FROM klanten where Email ='$Email'");
     //$countCheckEmail = mysqli_num_rows($checkEmail);

     //if(mysqli_num_rows($checkEmail) == 1){
    //die(json_encode("Dit Email adres bestaat er al, gelieve een ander email adres in te geven"));

         // product toevoegen
    // }else{

    if ($conn -> query("INSERT INTO klanten ( FirstName, LastName, Email, Password, Address, HouseNumber, Bus, PostalCode, TelNumber, PhoneNumber, userlevel) values( '".$FirstName."','".$LastName."','".$Email."','".$Password."', '".$Address."','".$Housenumber."','".$Bus."','".$PostalCode."','".$TelNumber."','".$PhoneNumber."','" .$userlvl."')") === TRUE) 
    {
        
        die(json_encode(1));
    }
    else 
    {
        die(json_encode(2));
    }
}

elseif ($bewerking == "forgot") 
{
    if (isset($_POST['forgotEmail'])) 
    {
        // hier MOET je controle plaatsen om o.a. SQL injection 
        // te voorkomen.
        $Email= $_POST['forgotEmail'];
    }
    else
    {
        die(json_encode("missing data"));
        
    }
     //$checkEmail = $conn -> query("SELECT * FROM klanten where Email ='$Email'");
     //$countCheckEmail = mysqli_num_rows($checkEmail);

     //if(mysqli_num_rows($checkEmail) == 1){
    //die(json_encode("Dit Email adres bestaat er al, gelieve een ander email adres in te geven"));

         // product toevoegen
    // }else{   

    $checkEmail = $conn -> query("SELECT * FROM klanten where Email ='$Email'");
     $countCheckEmail = mysqli_num_rows($checkEmail);

     if(mysqli_num_rows($checkEmail) == 1)
     {
        die(json_encode(1));
     }
    else
    {
        die(json_encode(2));
    }
}
?>

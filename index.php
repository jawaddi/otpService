<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- css -->
  <link rel="stylesheet" href="style.css">
  <!-- bootstrao -->
  <?php include 'links.php'?>
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> -->
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> -->
  <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <title>Document</title>
</head>
<body>
  <div class="container p-3 my-3">
    <div class="row">
      <div class="col-6 p-4 ml-2">
        <div class="otp_msg"></div>
        <h3 class="text-danger text-center">Verified Mobile Number</h3>

        <form method="post">
          <div class="numberPhoneInput">
          <label for="mobil">Enter Mobile Number</label>
          <input type="text" class="form-control" id="mob" placeholder="Enter mobile"/>
          </div>

          <div class="numberPhoneInput" id ="otpverification">
          <label for="opt_ver">Enter Mobile Number</label>
          <input type="text" class="form-control" id="opt_ver" placeholder="Enter otp"/>
          
          <div class="countdown"></div>
          <a href="#" id="resend_opt" type="button">resend</a>
          </div>
          <button type="button" id="sendotp" class= "btn btn-primary">Send OTP</button>
          <button type="button" id="verifyotp" class= "btn btn-primary">Verify OTP</button>
        </form>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
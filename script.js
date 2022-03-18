$(document).ready(function () {
  function validate_mobile(mobile) {
    var pattern = /[0-9]/;
    if (mobile == "" || mobile.length < 10) {
      return false;
    } else if (!pattern.test(mobile) || mobile.length != 10) {
      return false;
    } else {
      return true;
    }
  }
  // send otp function

  function send_otp(mob) {
    var ch = "send_otp";

    $.ajax({
      url: "otp_process.php",
      method: "POST",
      data: { mob: mob, ch: ch },
      datatype: "text",
      success: function (data) {
        if (data !== "success") {
          $("#otpverification").css("display", "block");
          $("#resend_opt").css("display", "block");
          $("#verifyotp").css("display", "block");
          $("#sendotp").css("display", "none");
          timer();
          $(".otp_msg")
            .html(
              "<div class='alert alert-success'>OTP Send Successfully</div>"
            )
            .fadeIn();
          window.setTimeout(function () {
            $(".otp_msg").fadeOut();
          }, 1000);
        } else {
          $(".otp_msg")
            .html("<div class='alert alert-success'>Error in sending OTP</div>")
            .fadeIn();
          window.setTimeout(function () {
            $(".otp_msg").fadeOut();
          }, 1000);
        }
      },
    });
  }
  // end of send otp function
  // send otp function
  $("#sendotp").click(function () {
    var mobile = $("#mob").val();
    console.log(mobile);
    if (!validate_mobile(mobile)) {
      $(".otp_msg")
        .html("<div class='alert alert-success'>Invalid phone number</div>")
        .fadeIn();
    } else send_otp(mobile);
    window.setTimeout(function () {
      $(".otp_msg").fadeOut();
    }, 1000);
  });
  //End of OTP function
  //resend otp function
  $("#resend_opt").click(function () {
    var mobile = $("#mob").val();
    send_otp(mobile);
    $(this).hide();
  });
  //end of resend

  // verify otp function starts
  $("#verifyotp").click(function () {
    var ch = "verifyotp";
    var otp = $("#opt_ver").val();
    console.log(otp);
    $.ajax({
      url: "otp_process.php",
      method: "post",
      data: { otp: otp, ch: ch },
      datatype: "text",
      success: function (data) {
        if (data !== "success") {
          $(".otp_msg")
            .html(
              "<div class='alert alert-success'>Verified successfully</div>"
            )
            .show()
            .fadeIn(4000);
          function pageRedirect() {
            window.location.replace("home.php");
          }
          setTimeout(pageRedirect(), 6000);
        } else {
          console.log(1);
          $(".otp_msg")
            .html("<div class='alert alert-success'>OTP did not match</div>")
            .show()
            .fadeIn(4000);
        }
      },
    });
  });
  // end of verify otp function
  // start of timer function
  function timer() {
    let min, sec;
    var timer2 = "00:31";
    var interval = setInterval(function () {
      var timer = timer2.split(":");
      min = parseInt(timer[0], 10); //minutes
      sec = parseInt(timer[1], 10); //seconds
      --sec;
      min = sec < 0 ? --min : min;
      sec = sec < 0 ? 59 : sec;
      sec = sec < 10 ? "0" + sec : sec;

      $(".countdown").html(
        "Resend otp in:<b class='text-primary'>" +
          min +
          ":" +
          sec +
          "seconds</b>"
      );

      $("#resend_opt").css("pointer-events", "none");
      if (sec == 0 && min == 0) {
        $("#resend_opt").css("pointer-events", "painted");
      }
      if (sec <= 0 && min <= 0) {
        clearInterval(interval);
        $("#resend_otp").css("display", "block");
      }
      timer2 = min + ":" + sec;
    }, 1000);
  }
});

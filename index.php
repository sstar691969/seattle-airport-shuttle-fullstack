<?php

    session_start();

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {


        $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
        $recaptcha_secret = '6L...your-SECRET-key...bqG';
        $recaptcha_response = $_POST['g-recaptcha-response'];

        $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '& response=' . $recaptcha_response );
        $recaptcha = json_decode($recaptcha, true);

        if ($recaptcha['success'] == 1 AND $recaptcha['score'] >= 0.5 AND $recaptcha['action'] == "login") {


            // your code to log-in, ect....

        }else{

            // reCAPTCHA not verified, redirect to error, ect..





        }
}

?>

<!DOCTYPE html>
<html lang="en">
 <head>
  <title>One Way & Round Trip Cruise Transfers|2 Seattle Airport shuttles</title>
  
  <meta name="viewport" content="width=device-width">
  <meta charset="utf-8">
  <meta name="description" content="Free luggage storage | We provide Seattles best airport transportation | 24/7 SHUTTLES. Booked round trip fares will include free transit only to selected hotels: Sheraton| Marriott| Hilton and many more. Call or submit your itinerary. We provide transfers to Seattle downtown city center and round trip transfers to Seatac airport and ports 66 & 91. Transportation options:4 to 8 passenger suv, 16 passengers shuttles: 10 passengers vans, 40 passengers buses to Seattle and the Pacific Northwest plus round trip transfers to cruise-ships on Pier 91 and Pier 66. Hotels transfers to and from Seatac airport non-stop." >
  <link rel="stylesheet" href="css/portal.css">
  <link rel="stylesheet" href="css/nav.css">

  <script src="https://www.google.com/recaptcha/api.js"></script>

<script>
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>

</head>
 <body>
   
  <!-- START HTML FORM -->
  
  <button class="g-recaptcha" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>

<form action="<?php echo basename($_SERVER['PHP_SELF']); ?>" method="post">
<div>
    <label>
        Name:<br><input type="text" name="Name" required="required" placeholder="Full Name (required)" title="Name is required" tabindex="10" size="44" autofocus>
    </label>
</div>
<div>	
    <label>
        Email:<br><input type="email" name="Email" required="required" placeholder="Email (required)" title="A valid email is required" tabindex="20" size="44">
    </label>
</div>
<!-- below change the HTML to your form elements - only 'Name' & 'Email' (above) are significant -->
<div>	
    <label>
        How Did You Hear About Us?:<br>
        <select name="How_Did_You_Hear_About_Us?" required="required" title="How You Heard is required" tabindex="30">
            <option value="">Choose How You Heard</option>
            <option value="Phone">Phone</option>
            <option value="Web">Web</option>
            <option value="Magazine">Magazine</option>
            <option value="A Friend">A Friend</option>
            <option value="Other">Other</option>
        </select>
    </label>
</div>

<div>	
    <fieldset>
        <legend>What Services Are You Interested In?</legend>
        <input type="checkbox" name="Interested_In[]" value="Airport luxury vehicles" tabindex="40" > Airport luxury vehicles <br>
        <input type="checkbox" name="Interested_In[]" value="30 passeger buses" > 30 passeger buses <br>
        <input type="checkbox" name="Interested_In[]" value="Airport shuttles" > Airport shuttles <br>
        <input type="checkbox" name="Interested_In[]" value="10 passeger vans" > 10 passeger vans <br>
        <input type="checkbox" name="Interested_In[]" value="Other" > Other <br>
    </fieldset>
</div>

    <div>	
    <fieldset>
        <legend>Would you like to join our mailing list?</legend>
        <input type="radio" name="Join_Mailing_List?" value="Yes" 
        required="required" title="Mailing list is required" tabindex="50"  
        > Yes <br>
        <input type="radio" name="Join_Mailing_List?" value="No" > No <br>
    </fieldset>
</div>
<div>	
    <label>
        Comments or book here:<br><textarea name="Comments" cols="36" rows="4" placeholder="Your comments are important to us!" tabindex="60"></textarea>
    </label>
</div>	
<div class="g-recaptcha" data-sitekey="<?=$siteKey;?>"></div>
<div>
    <input type="submit" value="submit">
<!--- delete line 115 maybe and youtube video: how to add google ReCaptcha v3 to a PHP web page. add login  -->

    <button class="g-recaptcha" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>
</div>
</form>

</body>
</html>
<!-- END HTML FORM -->












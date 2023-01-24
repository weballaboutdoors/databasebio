import html from "html-literal";

export default () => html `
<head>
<meta name="description" content="installerbio, door repair, window repair, window installer, door installer, window part installer, door part installer, handyman, door help, window help, customer feedback, customer, customer reply">
    <meta name="keywords" content="customer, installer bio, installerbio, door installation, window installation, window, door">
    <meta name="author" content="Delfino Farfan">
    <title>Customer Feedback</title>
</head>
<div class="container">
<button onclick="history.back()">Go Back</button>
<h1 class="container text-center">Customer Feedback</h1>
  <div class="container text-center">
  <h6>Please give feedback on the company you used to resolve your home repair. This feedback will be shared through the Installer profile page to help future customers make more informed decisions.</h6>
  </div>
<div class="formPage">
<form
  action="/"
  method="post"
>
<div>
<label for="customer"></label>
<input type="text" id="name" name="customer" placeholder="Customer Name">
</div>
<div>
<label for="company"></label>
<input type="text" id="company" name="company" placeholder="Company Name">
</div>
<div>
<label for="email"></label>
<input type="text" id="email" name="email" placeholder="E-Mail">
</div>
<div>
<label for="feedback"></label>
<textarea id="feedback" name="feedback" rows="10" style="width:100%"placeholder="Write your Feedback here"></textarea>
</div>
<div class="container text-center">
<p><strong>By Submitting this form I Agree to the <a href="/Terms">Terms and Conditions</a></strong></p>
    <input type="submit" value="Submit">
    </div>
</form>
</div>
</div>
`;
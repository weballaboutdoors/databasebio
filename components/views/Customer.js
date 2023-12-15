import html from "html-literal";

export default () => html `
<head>
<meta name="description" content="installerbio, door repair, window repair, window installer, door installer, window part installer, door part installer, handyman, door help, window help, customer feedback, customer, customer reply">
    <meta name="keywords" content="customer, installer bio, installerbio, door installation, window installation, window, door">
    <meta name="author" content="Delfino Farfan">
    <title>Installer Review</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Installer Review</h1>
  <div class="container text-center">
  <h6>Please give a review on the Installer you used to resolve your home repair. This review may be shared through the InstallerBio Page to help future customers make more informed decisions about who they select to resolve their issue. Any review that goes against our <a href="/Terms" class="green"><strong>Terms and Conditions</strong></a> will not be shared. </h6>
  </div>
<div class="formPage">
<h6><strong>All fields required</strong></h6>
<form
  action="/"
  method="post"
>
<div>
<label for="customer"></label>
<input type="text" id="name" name="customer" placeholder="Customer Name"  aria-required="true" required/>
</div>
<div>
<label for="company"></label>
<input type="text" id="company" name="company" placeholder="Company Name" aria-required="true" required/>
</div>
<div>
<label for="email"></label>
<input type="text" id="email" name="email" placeholder="E-Mail" aria-required="true" required/>
</div>
<div>
<label for="feedback"></label>
<textarea id="feedback" name="feedback" rows="10" style="width:100%"placeholder="Write your Review here" aria-required="true" required></textarea>
</div>
<div class="container text-center">
<p><strong>By Submitting this form I Agree to the <a href="/Terms" class="green">Terms and Conditions</a></strong></p>
    <input type="submit" value="Submit"/>
    </div>
</form>
</div>
</div>
`;
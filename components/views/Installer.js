import html from "html-literal";

export default () => html `
<head>
<meta name="description" content="installerbio, door repair, window repair, window installer, door installer, window part installer, door part installer, handyman, door help, window help, installer feedback, installer">
    <meta name="keywords" content="installer, installer bio, installerbio, door installation, window installation, window, door">
    <meta name="author" content="Delfino Farfan">
    <title>Installer Application</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">Installer Application</h1>

 <div class="container text-center">
  <h6>Please apply to be a listed installer using the form below.</h6>
  <h6>If you would like to update any information on your existing Bio Page please click <a href="/Update">here</a></h6>
  </div>
<div class="formPage">
<form
  action="/"
  method="post"
  >
  <div class="rows">
  <div class="columns">
    <label for="companynameSubmission"></label>
    <input type="text" id="companynameSubmission" name="companynameSubmission" placeholder="Name/Company">
    <label for="webSubmission"></label>
    <input type="text" id="webSubmission" name="webSubmission" placeholder="*Website">
    <label for="phoneSubmission"></label>
    <input type="text" id="phoneSubmission" name="phoneSubmission" placeholder="Phone">
    <label for="emailSubmission"></label>
    <input type="text" id="emailSubmission" name="emailSubmission" placeholder="E-Mail">
    </div>
    <div class="columns">
    <label for="addressSubmission"></label>
    <input type="text" id="addressSubmission" name="addressSubmission" placeholder="Address">
    <label for="citySubmission"></label>
    <input type="text" id="citySubmission" name="citySubmission" placeholder="City">
    <label for="stateSubmission"></label>
    <select id="stateSubmission" name="state">
    <option value="">States</option>
      <option value="alabama">Alabama</option>
      <option value="alaska">Alaska</option>
      <option value="arizona">Arizona</option>
      <option value="arkansas">Arkansas</option>
      <option value="california">California</option>
      <option value="colorado">Colorado</option>
      <option value="connecticut">Connecticut</option>
      <option value="delaware">Delaware</option>
      <option value="districtofcolumbia">District Of Columbia</option>
      <option value="florida">Florida</option>
      <option value="georgia">Georgia</option>
      <option value="hawaii">Hawaii</option>
      <option value="idaho">Idaho</option>
      <option value="illinois">Illinois</option>
      <option value="indiana">Indiana</option>
      <option value="iowa">Iowa</option>
      <option value="kansas">Kansas</option>
      <option value="kentucky">Kentucky</option>
      <option value="louisiana">Louisiana</option>
      <option value="maine">Maine</option>
      <option value="maryland">Maryland</option>
      <option value="massachusetts">Massachusetts</option>
      <option value="michigan">Michigan</option>
      <option value="minnesota">Minnesota</option>
      <option value="mississippi">Mississippi</option>
      <option value="missouri">Missouri</option>
      <option value="montana">Montana</option>
      <option value="nebraska">Nebraska</option>
      <option value="nevada">Nevada</option>
      <option value="newhampshire">New Hampshire</option>
      <option value="newjersey">New Jersey</option>
      <option value="newmexico">New Mexico</option>
      <option value="newyork">New York</option>
      <option value="northcarolina">North Carolina</option>
      <option value="northdakota">North Dakota</option>
      <option value="ohio">Ohio</option>
      <option value="oklahoma">Oklahoma</option>
      <option value="oregon">Oregon</option>
      <option value="pennsylvania">Pennsylvania</option>
      <option value="rhodeisland">Rhode Island</option>
      <option value="southcarolina">South Carolina</option>
      <option value="southdakota">South Dakota</option>
      <option value="tennessee">Tennessee</option>
      <option value="texas">Texas</option>
      <option value="utah">Utah</option>
      <option value="vermont">Vermont</option>
      <option value="virginia">Virginia</option>
      <option value="washington">Washington</option>
      <option value="westvirginia">West Virginia</option>
      <option value="wisconsin">Wisconsin</option>
    </select>
    <label for="zipcodeSubmission"></label>
    <input type="text" id="zipcodeSubmission" name="zipcodeSubmission" placeholder="Zip Code">
    </div>
    </div>
    <div class="rows">
      <div id="profession">
        <div class="bold">
      <label for="profession"><strong>Choose Your Profession(s)</strong></label><br>
      </div>
      <input type="checkbox" class="items1" id="profession1" name="professionSubmission" value="locksmith">
      <label for="profession1">Locksmith</label><br>
      <input type="checkbox" class="items1" id="profession2" name="professionSubmission" value="doorinstaller">
      <label for="profession2">Door Installer</label><br>
      <input type="checkbox" class="items1" id="profession3" name="professionSubmission" value="windowinstaller">
      <label for="profession3">Window Installer</label><br>
      <input type="checkbox" class="items1" id="profession4" name="professionSubmission" value="handyman">
      <label for="profession4">Handyman</label><br>
      <input type="checkbox" class="items1" id="profession5" name="professionSubmission" value="glasscontractor">
      <label for="profession5">Glass Contractor</label><br>
      <input type="checkbox" class="items1" id="profession6" name="professionSubmission" value="windowrepair">
      <label for="profession6">Window Repair and Service</label><br>
      <input type="checkbox" class="items1" id="profession7" name="professionSubmission" value="doorrepair">
      <label for="profession7">Door Repair and Service</label><br>
      <div id="review">
        <label for="reviewSubmission"><strong>Allow reviews on your Installer page?</strong></label>
        <select id="reviewSubmission" name="review">
          <option value="">Select Option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      </div>
      <div class="columns">
      <label for="bioSubmission"></label>
    <textarea id="bioSubmission" name="bioSubmission" rows="13" cols="170" style="max-width:100%" placeholder="Write your Bio here"></textarea>
      </div>
      </div>
      <div class="container text-center">
      <p><strong>By Submitting this form I Agree to the <a href="/Terms">Terms and Conditions</a></strong></p>
      </div>
      <h6>*Optional</h6>
      <input type="submit" value="Submit">
    </form>
    </div>
    </div>
`;
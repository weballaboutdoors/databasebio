import html from "html-literal";

export default () => html `
<head>
<meta name="description" content="installerbio, door repair, window repair, window installer, door installer, window part installer, door part installer, handyman, door help, window help, installer feedback, installer">
    <meta name="keywords" content="installer, installer bio, installerbio, door installation, window installation, window, door">
    <meta name="author" content="Delfino Farfan">
    <title>Installer Application</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Installer Application</h1>

 <div class="container text-center">
  <h6>InstallerBio Page's may take 2-3 business days to be created. If needed, you are able to <a href="/Update" class="green"><strong>Update</strong></a> your existing InstallerBio Page.</h6>
  </div>
<div>
<h6><strong>* Indicates a required field</strong></h6>
<form
  action="/"
  method="post"
  >
  <div class="rows">
  <div class="columns">
    <label for="companynameSubmission"></label>
    <input type="text" id="companynameSubmission" name="companynameSubmission" placeholder="Name/Company *"/>
    <label for="phoneSubmission"></label>
    <input type="text" id="phoneSubmission" name="phoneSubmission" placeholder="Phone *"/>
    <label for="emailSubmission"></label>
    <input type="text" id="emailSubmission" name="emailSubmission" placeholder="E-Mail *"/>
    <label for="webSubmission"></label>
    <input type="text" id="webSubmission" name="webSubmission" placeholder="Website"/>
    </div>
    <div class="columns">
    <label for="addressSubmission"></label>
    <input type="text" id="addressSubmission" name="addressSubmission" placeholder="Address *"/>
    <label for="citySubmission"></label>
    <input type="text" id="citySubmission" name="citySubmission" placeholder="City *"/>
    <label for="stateSubmission"></label>
    <select id="stateSubmission" name="state">
    <option value="empty">States *</option>
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
    <input type="text" id="zipcodeSubmission" name="zipcodeSubmission" placeholder="Zip Code *"/>
    </div>
    </div>
    <div class="rows">
    <div class="columns">
    <label for="yearSubmission"></label>
    <input type="text" id="yearSubmission" name="yearSubmission" placeholder="Years of Experience *"/>
    <label for="insuranceSubmission"><strong>Does your business have Insurance? *</strong></label>
        <select id="insuranceSubmission" name="review">
          <option value="empty">Select Option *</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <label for="instypeSubmission"></label>
    <input type="text" id="instypeSubmission" name="instypeSubmission" placeholder="Type of Insurance"/>
        <label for="licenseSubmission"><strong>Does your business have a License/Certification? *</strong></label>
        <select id="licenseSubmission" name="review">
          <option value="empty">Select Option *</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <label for="lictypeSubmission"></label>
    <input type="text" id="lictypeSubmission" name="lictypeSubmission" placeholder="Type of License/Certification"/>
      </div>
      <div class="columns">
      <div id="profession">
        <div class="bold">
      <label for="professionSubmission"><strong>Choose Your Profession(s) *</strong></label><br>
      </div>
      <input type="checkbox" class="items1" id="profession1" name="professionSubmission" value="locksmith"/>
      <label for="profession1">Locksmith</label><br>
      <input type="checkbox" class="items1" id="profession2" name="professionSubmission" value="doorinstaller"/>
      <label for="profession2">Door Installer</label><br>
      <input type="checkbox" class="items1" id="profession3" name="professionSubmission" value="windowinstaller"/>
      <label for="profession3">Window Installer</label><br>
      <input type="checkbox" class="items1" id="profession4" name="professionSubmission" value="handyman"/>
      <label for="profession4">Handyman</label><br>
      <input type="checkbox" class="items1" id="profession5" name="professionSubmission" value="glasscontractor"/>
      <label for="profession5">Glass Contractor</label><br>
      <input type="checkbox" class="items1" id="profession6" name="professionSubmission" value="windowrepair"/>
      <label for="profession6">Window Repair and Service</label><br>
      <input type="checkbox" class="items1" id="profession7" name="professionSubmission" value="doorrepair"/>
      <label for="profession7">Door Repair and Service</label><br>
      <label for="otherSubmission"></label>
    <input type="text" id="otherSubmission" name="otherSubmission" placeholder="Other Skill"/>
      </div>
      </div>
      </div>
      
      <label for="bioSubmission"></label>
    <textarea id="bioSubmission" name="bioSubmission" rows="11" cols="170" style="max-width:100%" placeholder="Company Description & Goals *"></textarea>
    <div id="review">
        <label for="reviewSubmission"><strong>Allow customer reviews on Profile page? *</strong></label>
        <select id="reviewSubmission" name="review">
          <option value="empty">Select Option *</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div class="container text-center">
      <p><strong>By Submitting this form I Agree to the <a href="/Terms" class="green">Terms and Conditions</a></strong></p>
      </div>
      <input type="submit" value="Submit"/>
    </form>
</div>
</div>
`;
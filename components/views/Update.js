import html from "html-literal";

export default () => html `
 <div class="container text-center">
  <h6>Please fill out the form below with your updated information. Be sure to only fill out this form if you have already submitted an Installer Application.</h6>
  </div>
<div class="formPage">
<form
  action="/"
  method="post"
  >
  <div class="rows">
  <div class="columns">
    <label for="companynameUpdate"></label>
    <input type="text" id="companynameUpdate" name="companynameUpdate" placeholder="*Name/Company">
    <label for="webUpdate"></label>
    <input type="text" id="webUpdate" name="webUpdate" placeholder="Website">
    <label for="phoneUpdate"></label>
    <input type="text" id="phoneUpdate" name="phoneUpdate" placeholder="Phone">
    <label for="emailUpdate"></label>
    <input type="text" id="emailUpdate" name="emailUpdate" placeholder="E-Mail">
    </div>
    <div class="columns">
    <label for="addressUpdate"></label>
    <input type="text" id="addressUpdate" name="addressUpdate" placeholder="Address">
    <label for="cityUpdate"></label>
    <input type="text" id="cityUpdate" name="cityUpdate" placeholder="City">
    <label for="stateUpdate"></label>
    <select id="stateUpdate" name="stateUpdate">
    <option value="">*States</option>
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
    <label for="zipcodeUpdate"></label>
    <input type="text" id="zipcodeUpdate" name="zipcodeUpdate" placeholder="Zip Code">
    </div>
    </div>
    <div class="rows">
      <div id="professionUpdate">
        <div class="bold">
      <label for="professionUpdate"><strong>Choose Your Profession(s)</strong></label><br>
      </div>
      <input type="checkbox" class="items1" id="profession1" name="professionUpdate" value="locksmith">
      <label for="profession1">Locksmith</label><br>
      <input type="checkbox" class="items1" id="profession2" name="professionUpdate" value="doorinstaller">
      <label for="profession2">Door Installer</label><br>
      <input type="checkbox" class="items1" id="profession3" name="professionUpdate" value="windowinstaller">
      <label for="profession3">Window Installer</label><br>
      <input type="checkbox" class="items1" id="profession4" name="professionUpdate" value="handyman">
      <label for="profession4">Handyman</label><br>
      <input type="checkbox" class="items1" id="profession5" name="professionUpdate" value="glasscontractor">
      <label for="profession5">Glass Contractor</label><br>
      <input type="checkbox" class="items1" id="profession6" name="professionUpdate" value="windowrepair">
      <label for="profession6">Window Repair and Service</label><br>
      <input type="checkbox" class="items1" id="profession7" name="professionUpdate" value="doorrepair">
      <label for="profession7">Door Repair and Service</label><br>
      <div id="review">
        <label for="reviewUpdate"><strong>Allow reviews on your Installer page?</strong></label><br>
        <input type="checkbox" class="items2" id="review1" name="reviewUpdate" value="yes">
        <label for="review1">Yes</label><br>
        <input type="checkbox" class="items2" id="review2" name="reviewUpdate" value="no">
        <label for="review2">No</label><br>
      </div>
      </div>
      <div class="columns">
      <label for="bioUpdate"></label>
    <textarea id="bioUpdate" name="bioUpdate" rows="10" cols="170" style="max-width:100%" placeholder="Update Bio, Name, State or anything else here"></textarea>
      </div>
      </div>
      <p><strong>By Submitting this form I Agree to the <a href="/Terms">Terms and Conditions</a></strong></p>
      <h6>*Required</h6>
      <input type="submit" value="Submit">
      
      
    </form>
  </div>
`;
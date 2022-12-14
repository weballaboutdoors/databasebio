import html from "html-literal";

export default () => html `
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
    <label for="companyname"></label>
    <input type="text" id="companyname" name="companyname" placeholder="Name/Company">
    <label for="web"></label>
    <input type="text" id="web" name="web" placeholder="*Website">
    <label for="phone"></label>
    <input type="text" id="phone" name="phone" placeholder="Phone">
    <label for="email"></label>
    <input type="text" id="email" name="email" placeholder="E-Mail">
    <label for="address"></label>
    </div>
    <div class="columns">
    <input type="text" id="address" name="address" placeholder="Address">
    <label for="city"></label>
    <input type="text" id="city" name="city" placeholder="City">
    <label for="state"></label>
    <select id="state" name="state">
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
    <label for="zipcode"></label>
    <input type="text" id="zipcode" name="zipcode" placeholder="Zip Code">
    </div>
    </div>
    <div class="rows">
      <div id="profession">
        <div class="bold">
      <label for="profession"><strong>Choose Your Profession(s)</strong></label><br>
      </div>
      <input type="checkbox" class="items1" id="profession1" name="profession" value="locksmith">
      <label for="profession1">Locksmith</label><br>
      <input type="checkbox" class="items1" id="profession2" name="profession" value="doorinstaller">
      <label for="profession2">Door Installer</label><br>
      <input type="checkbox" class="items1" id="profession3" name="profession" value="windowinstaller">
      <label for="profession3">Window Installer</label><br>
      <input type="checkbox" class="items1" id="profession4" name="profession" value="handyman">
      <label for="profession4">Handyman</label><br>
      <input type="checkbox" class="items1" id="profession5" name="profession" value="glasscontractor">
      <label for="profession4">Glass Contractor</label><br>
      <input type="checkbox" class="items1" id="profession6" name="profession" value="windowrepair">
      <label for="profession4">Window Repair and Service</label><br>
      <input type="checkbox" class="items1" id="profession7" name="profession" value="doorrepair">
      <label for="profession4">Door Repair and Service</label><br>
      <div id="review">
        <label for="review"><strong>Allow reviews on your Installer page?</strong></label><br>
        <input type="checkbox" class="items2" id="review1" name="review" value="yes">
        <label for="review1">Yes</label><br>
        <input type="checkbox" class="items2" id="review2" name="review" value="no">
        <label for="review2">No</label><br>
        <p><strong>Terms and Conditions</strong></p>
        <input type="checkbox" class="terms" id="terms" name="terms" value="agree">
        <label for="terms">I agree to the <a href="/Terms">Terms and Conditions</a></label><br>
      </div>
      </div>
      <div class="columns">
      <label for="bio"></label>
    <textarea id="bio" name="bio" rows="10" cols="170" style="max-width:100%" placeholder="Write your Bio here"></textarea>
      </div>
      </div>
      
      <input type="submit" value="Submit">
      
      <h6>*Optional</h6>
    </form>
  </div>
`;
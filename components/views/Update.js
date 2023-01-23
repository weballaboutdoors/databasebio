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
    <label for="companynameUpdate"></label>
    <input type="text" id="companynameUpdate" name="companynameUpdate" placeholder="*Name/Company">
    <label for="emailUpdate"></label>
    <input type="text" id="emailUpdate" name="emailUpdate" placeholder="*E-Mail">
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
    <div class="rows">
      <div id="professionUpdate">
        <div class="bold">
      <label for="professionUpdate"><strong>Add Your Profession(s)</strong></label><br>
      </div>
      <input type="checkbox" class="items1" id="profession1" name="professionUpdate" value="addlocksmith">
      <label for="profession1">Add Locksmith</label><br>
      <input type="checkbox" class="items1" id="profession2" name="professionUpdate" value="adddoorinstaller">
      <label for="profession2">Add Door Installer</label><br>
      <input type="checkbox" class="items1" id="profession3" name="professionUpdate" value="addwindowinstaller">
      <label for="profession3">Add Window Installer</label><br>
      <input type="checkbox" class="items1" id="profession4" name="professionUpdate" value="addhandyman">
      <label for="profession4">Add Handyman</label><br>
      <input type="checkbox" class="items1" id="profession5" name="professionUpdate" value="addglasscontractor">
      <label for="profession5">Add Glass Contractor</label><br>
      <input type="checkbox" class="items1" id="profession6" name="professionUpdate" value="addwindowrepair">
      <label for="profession6">Add Window Repair and Service</label><br>
      <input type="checkbox" class="items1" id="profession7" name="professionUpdate" value="adddoorrepair">
      <label for="profession7">Add Door Repair and Service</label><br>
      <p id="remove"><strong>Remove Your Profession(s)</strong></p>
      <input type="checkbox" class="items1" id="profession8" name="professionUpdate" value="removelocksmith">
      <label for="profession8">Remove Locksmith</label><br>
      <input type="checkbox" class="items1" id="profession9" name="professionUpdate" value="removedoorinstaller">
      <label for="profession9">Remove Door Installer</label><br>
      <input type="checkbox" class="items1" id="profession10" name="professionUpdate" value="removewindowinstaller">
      <label for="profession10">Remove Window Installer</label><br>
      <input type="checkbox" class="items1" id="profession11" name="professionUpdate" value="removehandyman">
      <label for="profession11">Remove Handyman</label><br>
      <input type="checkbox" class="items1" id="profession12" name="professionUpdate" value="removeglasscontractor">
      <label for="profession12">Remove Glass Contractor</label><br>
      <input type="checkbox" class="items1" id="profession13" name="professionUpdate" value="removewindowrepair">
      <label for="profession13">Remove Window Repair and Service</label><br>
      <input type="checkbox" class="items1" id="profession7" name="professionUpdate" value="removedoorrepair">
      <label for="profession7">Remove Door Repair and Service</label><br>
      </div>
      <div class="columns">
      <label for="bioUpdate"></label>
    <textarea id="bioUpdate" name="bioUpdate" rows="20" cols="170" style="max-width:100%" placeholder="Update Bio, Name, E-Mail, State or anything else here"></textarea>
      </div>
      </div>
      <div class="container text-center">
      <p><strong>By Submitting this form I Agree to the <a href="/Terms">Terms and Conditions</a></strong></p>
      </div>
      <h6>*Required</h6>
      <input type="submit" value="Submit">
      
      
    </form>
  </div>
`;
import html from "html-literal";

export default () => html `
<div class="formPage">
<form
  action="/"
  method="post"
  >
    <label for="companyname"></label>
    <input type="text" id="companyname" name="companyname" placeholder="Name/Company">
    <label for="web"></label>
    <input type="text" id="web" name="web" placeholder="Website">
    <label for="phone"></label>
    <input type="text" id="phone" name="phone" placeholder="Phone">
    <label for="email"></label>
    <input type="text" id="email" name="email" placeholder="E-Mail">
    <label for="address"></label>
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
    <label for="bio"></label>
    <textarea id="bio" name="bio" rows="10" cols="120" style="max-width:100%" placeholder="Write your Bio here"></textarea>
      <label for="profession">Choose Your Profession:</label><br>
      <input type="checkbox" class="items1" id="profession1" name="profession" value="locksmith">
      <label for="profession1">Locksmith</label><br>
      <input type="checkbox" class="items1" id="profession2" name="profession" value="doorpart">
      <label for="profession2">Door Part Installer</label><br>
      <input type="checkbox" class="items1" id="profession3" name="profession" value="windowpart">
      <label for="profession3">Window Part Installer</label><br>
      <input type="checkbox" class="items1" id="profession4" name="profession" value="handyman">
      <label for="profession4">Handyman</label><br>
      <input type="submit" value="Submit">
    </form>
  </div>
`;
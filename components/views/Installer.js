import html from "html-literal";

export default () => html `
<div class="formPage">
  <form 
  action="/"
  method="POST">
    <label for="installer">Name</label>
    <input type="text" id="installer" name="installer" placeholder="Your name">

    <label for="companyname">Company Name</label>
    <input type="text" id="companyname" name="companyname" placeholder="Company name">
    <label for="address">Address</label>
    <input type="text" id="address" name="address" placeholder="Your address">
    <label for="city">City</label>
    <input type="text" id="city" name="city" placeholder="City">

    <label for="state">State</label>
    <select id="state" name="state">
    <option value="">Select A State</option>
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
    <label for="zipcode">Zip Code</label>
    <input type="text" id="zipcode" name="zipcode" placeholder="Zip Code">
    <label for="phone">Telephone Number</label>
    <input type="text" id="phone" name="phone" placeholder="(888)888-8888">
    <label for="email">E-Mail</label>
    <input type="text" id="email" name="email" placeholder="jdoe@email.com">
  
    <input type="submit" value="Submit">
  </form>
</div>
`;
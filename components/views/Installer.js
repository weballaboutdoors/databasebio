import html from "html-literal";

export default () => html `
<div>
  <form 
  action="https://formspree.io/f/mlevnoap"
  method="POST">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your name..">

    <label for="cname">Company Name</label>
    <input type="text" id="cname" name="cname" placeholder="Your Company name..">

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
  
    <input type="submit" value="Submit">
  </form>
</div>









<!-- <div class="container">
<form
class="formLayout"
  action="https://formspree.io/f/mlevnoap"
  method="POST"
>
<div class="formText">
<label>
    Your Name:
    <input type="name" name="name" placeholder="John Doe">
</label>
</div>
<div class="formText">
<label>
    Your Company Name:
    <input type="compnayName" name="companyName" placeholder="John Doe Installers">
</label>
</div>
<div class="formText">
<label>
    Your Phone Number:
    <input type="tel" name="phone" placeholder="8888888888">
</label>
</div>
<div class="formText">
  <label>
    Your email:
    <input type="email" name="email" placeholder="jdoe@email.com">
  </label>
  </div>
  <div class="formText">
  <label>
    Your Address:
    <textarea name="message" placeholder="123 Main Street"></textarea>
  </label>
  </div>
  <div class="formText">
  <label>
    Your City:
    <textarea name="message" placeholder="Cityville"></textarea>
  </label>
  </div>
  <div class="formText">
  <label>
    Your State:
    <textarea name="message" placeholder="Missouri"></textarea>
  </label>
  </div>
  <div class="formText">
  <label>
    Your Zip Code:
    <textarea name="message" placeholder="54321"></textarea>
  </label>
  </div>
  
  <div class="formText">
  <button type="submit">Send</button>
  </div>
</form>
</div> -->
`;
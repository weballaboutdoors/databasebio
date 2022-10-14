import html from "html-literal";

export default () => html `
<div class="container">
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
  <!-- your other form fields go here -->
  <div class="formText">
  <button type="submit">Send</button>
  </div>
</form>
</div>
`;
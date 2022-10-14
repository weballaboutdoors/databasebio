import html from "html-literal";

export default () => html `
<h1>This is where customers will give feedback</h1>
<div class="container">
<form
  class="formLayout"
  action="https://formspree.io/f/xaykjlab"
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
    Your E-Mail:
    <input type="email" name="email" placeholder="johndoe@gmail.com">
  </label>
  </div>
  <div class="formText">
  <label>
    Your Feedback:
    <textarea name="message"></textarea>
  </label>
  </div>
  <div class="formText">
  <button type="submit">Send</button>
  </div>
</form>
</div>
`;
import html from "html-literal";

export default () => html `
<h1>This is the installer application Page</h1>
<form
  action="https://formspree.io/f/mlevnoap"
  method="POST"
>
<label>
    Your Name:
    <input type="name" name="name">
</label>
<label>
    Your Phone Number:
    <input type="tel" name="phone">
</label>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your Bio:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
`;
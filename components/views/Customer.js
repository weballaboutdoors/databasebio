import html from "html-literal";

export default () => html `
<h1>This is where customers will give feedback</h1>
<form
  action="https://formspree.io/f/xaykjlab"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
`;
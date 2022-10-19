import html from "html-literal";

export default () => html `
<div class="formPage">
<form
  action="https://formspree.io/f/xaykjlab"
  method="post"
>
<label for="name">Name</label>
<input type="text" id="name" name="name" placeholder="Your name">
<label for="email">E-Mail</label>
<input type="text" id="email" name="email" placeholder="jdoe@email.com">
<label for="feedback">Feedback</label>
<input type="text" id="feedback" name="feedback" placeholder="Your response...">
    <input type="submit" value="Submit">
</form>
</div>
`;
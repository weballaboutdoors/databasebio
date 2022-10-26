import html from "html-literal";

export default () => html `
<div class="formPage">
<form
  action="https://formspree.io/f/xaykjlab"
  method="post"
>
<div>
<label for="customer">Customer Name</label>
<input type="text" id="name" name="customer" placeholder="Your name">
</div>
<div>
<label for="email">E-Mail</label>
<input type="text" id="email" name="email" placeholder="jdoe@email.com">
</div>
<div>
<label for="feedback">Feedback</label>
<input type="text" id="feedback" name="feedback" placeholder="Your response...">
</div>
    <input type="submit" value="Submit">
</form>
</div>
`;

// 
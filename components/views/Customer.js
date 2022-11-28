import html from "html-literal";

export default () => html `
<div class="formPage">
<form
  action="/"
  method="post"
>
<div>
<label for="customer"></label>
<input type="text" id="name" name="customer" placeholder="Customer Name">
</div>
<div>
<label for="email"></label>
<input type="text" id="email" name="email" placeholder="E-Mail">
</div>
<div>
<label for="feedback"></label>
<textarea id="feedback" name="feedback" rows="10" style="width:100%"placeholder="Write your Feedback here"></textarea>
</div>
    <input type="submit" value="Submit">
</form>
</div>
`;
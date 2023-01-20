import html from "html-literal";

export default () => html `

<div>
<div class="container text-center">
<!-- Company name -->
<h1>Billy Can Do It</h1>
</div>
<hr class="spacer">
<div class="container text-center">
<!-- Service(s) offered -->
<h4>Window Part Installer | Door Part Installer | Locksmith</h4>
</div>
<hr class="spacer">
<div class="grid-container">
<div class="item1">
<h4>Contact Info</h4>
<!-- Company Website -->
<p><a href="wwww.fakewebsite.com">wwww.fakewebsite.com</a></p>
<!-- Phone Number -->
<p>Phone:<a href="tel:+15555555555">(555)555-5555</a></p>
<!-- Email -->
<p>E-Mail:<a href="mailto:bob@installer.com">bob@installer.com</a></p>
<!-- Address -->
<p>12345 Hwy 45, Anchorage, Alaska 00000</p>
</div>
<div class="item2">
<!-- Installer Bio -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu. Potenti nullam ac tortor vitae purus faucibus. Etiam tempor orci eu lobortis elementum. Sit amet commodo nulla facilisi. Felis donec et odio pellentesque diam volutpat. In hendrerit gravida rutrum quisque non tellus orci ac auctor.</p>
</div>
</div>
<hr class="spacer">
<!-- Cusomer Reviews -->
<div class="grid-container">
    <div class="item1">
<p class="reviewBox">"Billy helped me, and now my house is as safe as ever!" - Sam</p>
<p class="reviewBox">"Billy helped me, and now my house is as safe as ever!" - Sam</p>
</div>
<div class="item2">
<p class="reviewBox">"Billy helped me, and now my house is as safe as ever!" - Sam</p>
<p class="reviewBox">"Billy helped me, and now my house is as safe as ever!" - Sam</p>
</div>
</div>
</div>
`;
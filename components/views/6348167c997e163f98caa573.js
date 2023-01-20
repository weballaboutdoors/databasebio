import html from "html-literal";

export default () => html `

<div>
<div class="container text-center">
<!-- Company name -->
<h1>Billy Can Do It</h1>
<hr class="spacer">
</div>

<div class="container text-center">
<!-- Service(s) offered -->
<h4>Window Part Installer | Door Part Installer | Locksmith</h4>
<hr class="spacer">
</div>

<div class="container">
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
<p>12345 Hwy 45<br> Anchorage, Alaska<br> 00000<br></p>
</div>
<div class="item2">
<!-- Installer Bio -->
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu. Potenti nullam ac tortor vitae purus faucibus. Etiam tempor orci eu lobortis elementum. Sit amet commodo nulla facilisi. Felis donec et odio pellentesque diam volutpat. In hendrerit gravida rutrum quisque non tellus orci ac auctor.</p>
</div>
</div>
<hr class="spacer">
<!-- Cusomer Reviews -->
<div class="grid-container">
    <div class="item3">
<div class="reviewBox">
<h6>Sam | 01/20/23</h6>
<p>"Billy helped me, and now my house is as safe as ever!"</p>
</div>
<div class="reviewBox">
<h6>Sam | 01/20/23</h6>
<p>"Billy helped me, and now my house is as safe as ever!"</p>
</div>

</div>
<div class="item4">
<div class="reviewBox">
<h6>Sam | 01/20/23</h6>
<p>"Billy helped me, and now my house is as safe as ever! And this is what it looks like when someone leaves a longer review. Pretty neat right? Peter you like this? Would you like to see what happens when you add more to this review?? Kinda crazy it just keeps going!"</p>
</div>
<div class="reviewBox">
<h6>Sam | 01/20/23</h6>
<p>"Billy helped me, and now my house is as safe as ever!"</p>
</div>
</div>
</div>
</div>
</div>
`;
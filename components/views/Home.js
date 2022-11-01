import html from "html-literal";

export default () => html `
<div class="container text-center">
<div class="justify-content-center">


        <h2>Welcome to InstallerBio!</h2>
        <h6>From All About Doors and Windows</h6>
        <p>Installer Bio is the window and door installation destination, after purchasing new parts search this page for installers local to you! Installers can create their free account <a href="/Installer">here</a></p>
        </div>
</div>
<button class="homeButton"><span class="shadow"></span><span class="edge"></span><a href="/States"><b><span class="homeLayer">Start Your State Search</span></b></a></button>
<button class="homeButton"><span class="shadow"></span><span class="edge"></span><a href="/Installer"><b><span class="homeLayer">Installer Application</span></b></a></button>
<button class="homeButton"><span class="shadow"></span><span class="edge"></span><a href="/Customer"><b><span class="homeLayer">Customer Feedback</b></a></button>

`;
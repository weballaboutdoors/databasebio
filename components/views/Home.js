import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="installerbio, door repair, window repair, window installer, door installer, window part installer, Alabama door part installer, handyman, door help, window help, installation">
<meta name="keywords" content="door installation, window installation, window parts, door parts">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>

</head>
<div class="container">

        <!-- <h1 class="robotoMain">Find Your Installer</h1> -->
        <!-- <h6>From All About Doors and Windows</h6>
        <p>InstallerBio is the window and door installation destination, after purchasing new parts search this page for installers local to you! Create your free <a href="/Installer">InstallerBio profile page</a>!</p> -->
  

<a href="/States" class="myButton">Find Your Installer</a>
&nbsp;
&nbsp;
<a href="/Installer" class="myButton">Apply to be an Installer</a>
&nbsp;
&nbsp;
<a href="/Customer" class="myButton">Customer Feedback</a>
&nbsp;
&nbsp;
<a href="https://www.allaboutdoors.com/Products" target="_blank" rel="noopener noreferrer" class="myButton">Find Your Product</a>

</div>
`;
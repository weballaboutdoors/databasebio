import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Georgia installerbio, Georgia door repair, Georgia window repair, Georgia window installer, Georgia door installer, Georgia window part installer, Georgia door part installer, Georgia handyman, Georgia door help, Georgia window help">
<meta name="keywords" content="door installation, window installation, Georgia window, Georgia door">
<meta name="author" content="Delfino Farfan">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Georgia</h1>
<div class="row">
<input class="col" id="searchbarCity" onkeyup="search_city()" type="search"
        name="search" placeholder="Search by City..">
<input class="col" id="searchbarZip" onkeyup="search_zip()" type="search"
        name="search" placeholder="Search by Zip Code..">
        </div>
       
        <div class="container text-center">
<table class="tables" id="myTable">
</div>
    <tr>
      <th class="priority-1">Name / Company</th>
      <th class="priority-6">Address</th>
      <th class="priority-2">City</th>
      <th class="priority-8">State</th>
      <th class="priority-4">Zip Code</th>
      <th class="priority-3">Phone Number</th>
      <th class="priority-5">E-Mail</th>
    </tr>
    ${state.georgias
      .map(georgia => {
        return `<tr><td class="priority-1"><a href="/P${georgia._id}">${georgia.companyName}</a></td><td class="priority-6">${georgia.address}</td><td>${georgia.city}</td><td class="priority-8">${georgia.state
        }</td><td class="priority-4">${georgia.zipcode
        }</td><td><a href="tel:+1${georgia.phone}">${georgia.phone
        }</a></td><td class="priority-5"><a href="mailto:${georgia.email}">${georgia.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;
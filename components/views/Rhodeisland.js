import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Rhode Island installerbio, Rhode Island door repair, Rhode Island window repair, Rhode Island window installer, Rhode Island door installer, Rhode Island window part installer, Rhode Island door part installer, Rhode Island handyman, Rhode Island door help, Rhode Island window help">
<meta name="keywords" content="door installation, window installation, Rhode Island window, Rhode Island door">
<meta name="author" content="Delfino Farfan">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Rhode Island</h1>
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
    ${state.rhodeislands
      .map(rhodeisland => {
        return `<tr><td><a href="/P${rhodeisland._id}">${rhodeisland.companyName}</a></td><td class="priority-6">${rhodeisland.address}</td><td>${rhodeisland.city}</td><td class="priority-8">${rhodeisland.state
        }</td><td class="priority-4">${rhodeisland.zipcode
        }</td><td><a href="tel:+1${rhodeisland.phone}">${rhodeisland.phone
        }</a></td><td class="priority-5"><a href="mailto:${rhodeisland.email}">${rhodeisland.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;
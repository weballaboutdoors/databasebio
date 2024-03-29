import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Michigan installerbio, Michigan door repair, Michigan window repair, Michigan window installer, Michigan door installer, Michigan window part installer, Michigan door part installer, Michigan handyman, Michigan door help, Michigan window help">
<meta name="keywords" content="door installation, window installation, Michigan window, Michigan door">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Michigan</h1>
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
    ${state.michigans
      .map(michigan => {
        return `<tr><td class="priority-1"><a href="/P${michigan._id}">${michigan.companyName}</a></td><td class="priority-6">${michigan.address}</td><td>${michigan.city}</td><td class="priority-8">${michigan.state
        }</td><td class="priority-4">${michigan.zipcode
        }</td><td><a href="tel:+1${michigan.phone}">${michigan.phone
        }</a></td><td class="priority-5"><a href="mailto:${michigan.email}">${michigan.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;
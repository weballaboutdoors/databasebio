import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Montana installerbio, Montana door repair, Montana window repair, Montana window installer, Montana door installer, Montana window part installer, Montana door part installer, Montana handyman, Montana door help, Montana window help">
<meta name="keywords" content="door installation, window installation, Montana window, Montana door">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Montana</h1>
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
    ${state.montanas
      .map(montana => {
        return `<tr><td><a href="/P${montana._id}">${montana.companyName}</a></td><td class="priority-6">${montana.address}</td><td>${montana.city}</td><td class="priority-8">${montana.state
        }</td><td class="priority-4">${montana.zipcode
        }</td><td><a href="tel:+1${montana.phone}">${montana.phone
        }</a></td><td class="priority-5"><a href="mailto:${montana.email}">${montana.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;
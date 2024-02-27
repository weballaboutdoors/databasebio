import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Wyoming installerbio, Wyoming door repair, Wyoming window repair, Wyoming window installer, Wyoming door installer, Wyoming window part installer, Wyoming door part installer, Wyoming handyman, Wyoming door help, Wyoming window help">
<meta name="keywords" content="door installation, window installation, Wyoming window, Wyoming door">
<meta name="author" content="Delfino Farfan">
<title>${state.view} Installers | InstallerBio</title>
</head>
<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Wyoming</h1>
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
    ${state.wyomings
      .map(wyoming => {
        return `<tr><td><a href="/P${wyoming._id}">${wyoming.companyName}</a></td><td class="priority-6">${wyoming.address}</td><td>${wyoming.city}</td><td class="priority-8">${wyoming.state
        }</td><td class="priority-4">${wyoming.zipcode
        }</td><td><a href="tel:+1${wyoming.phone}">${wyoming.phone
        }</a></td><td class="priority-5"><a href="mailto:${wyoming.email}">${wyoming.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;
import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Oklahoma installerbio, Oklahoma door repair, Oklahoma window repair, Oklahoma window installer, Oklahoma door installer, Oklahoma window part installer, Oklahoma door part installer, Oklahoma handyman, Oklahoma door help, Oklahoma window help">
<meta name="keywords" content="door installation, window installation, Oklahoma window, Oklahoma door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<div class="row">
<input class="col "id="searchbarCity" onkeyup="search_city()" type="search"
        name="search" placeholder="Search by City..">
<input class="col" id="searchbarZip" onkeyup="search_zip()" type="search"
        name="search" placeholder="Search by Zip Code..">
        </div>
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
    ${state.oklahomas
      .map(oklahoma => {
        return `<tr><td><a href="/P${oklahoma._id}">${oklahoma.companyName}</a></td><td class="priority-6">${oklahoma.address}</td><td>${oklahoma.city}</td><td class="priority-8">${oklahoma.state
        }</td><td class="priority-4">${oklahoma.zipcode
        }</td><td><a href="tel:+1${oklahoma.phone}">${oklahoma.phone
        }</a></td><td class="priority-5"><a href="mailto:${oklahoma.email}">${oklahoma.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
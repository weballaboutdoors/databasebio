import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Ohio installerbio, Ohio door repair, Ohio window repair, Ohio window installer, Ohio door installer, Ohio window part installer, Ohio door part installer, Ohio handyman, Ohio door help, Ohio window help">
<meta name="keywords" content="door installation, window installation, Ohio window, Ohio door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<div class="row">
<input class="col" id="searchbarCity" onkeyup="search_city()" type="search"
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
    ${state.ohios
      .map(ohio => {
        return `<tr><td><a href="/P${ohio._id}">${ohio.companyName}</a></td><td class="priority-6">${ohio.address}</td><td>${ohio.city}</td><td class="priority-8">${ohio.state
        }</td><td class="priority-4">${ohio.zipcode
        }</td><td><a href="tel:+1${ohio.phone}">${ohio.phone
        }</a></td><td class="priority-5"><a href="mailto:${ohio.email}">${ohio.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
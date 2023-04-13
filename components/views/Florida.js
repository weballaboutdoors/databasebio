import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Florida installerbio, Florida door repair, Florida window repair, Florida window installer, Florida door installer, Florida window part installer, Florida door part installer, Florida handyman, Florida door help, Florida window help">
<meta name="keywords" content="door installation, window installation, Florida window, Florida door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">Florida</h1>
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
    ${state.floridas
      .map(florida => {
        return `<tr><td class="priority-1"><a href="/P${florida._id}">${florida.companyName}</a></td><td class="priority-6">${florida.address}</td><td>${florida.city}</td><td class="priority-8">${florida.state
        }</td><td class="priority-4">${florida.zipcode
        }</td><td><a href="tel:+1${florida.phone}">${florida.phone
        }</a></td><td class="priority-5"><a href="mailto:${florida.email}">${florida.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
`;
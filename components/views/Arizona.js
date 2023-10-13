import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Arizona installerbio, Arizona door repair, Arizona window repair, Arizona window installer, Arizona door installer, Arizona window part installer, Arizona door part installer, Arizona handyman, Arizona door help, Arizona window help">
<meta name="keywords" content="door installation, window installation, Arizona window, Arizona door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>

<div class="container formPage">
<button onclick="history.back()"></button>
<h1 class="container text-center">Arizona</h1>
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
    ${state.arizonas
      .map(arizona => {
        return `<tr><td class="priority-1"><a href="/P${arizona._id}">${arizona.companyName}</a></td><td class="priority-6">${arizona.address}</td><td>${arizona.city}</td><td class="priority-8">${arizona.state
        }</td><td class="priority-4">${arizona.zipcode
        }</td><td><a href="tel:+1${arizona.phone}">${arizona.phone
        }</a></td><td class="priority-5"><a href="mailto:${arizona.email}">${arizona.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
  </div>
`;
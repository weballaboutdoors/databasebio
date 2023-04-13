import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Alabama installerbio, Alabama door repair, Alabama window repair, Alabama window installer, Alabama door installer, Alabama window part installer, Alabama door part installer, Alabama handyman, Alabama door help, Alabama window help">
<meta name="keywords" content="door installation, window installation, Alabama window, Alabama door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<!-- <button onclick="history.back()">Go Back</button> -->
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">Alabama</h1>
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
    ${state.alabamas
      .map(alabama => {
        return `<tr><td class="priority-1"><a href="/P${alabama._id}">${alabama.companyName}</a></td><td class="priority-6">${alabama.address}</td><td>${alabama.city}</td><td class="priority-8">${alabama.state
        }</td><td class="priority-4">${alabama.zipcode
        }</td><td><a href="tel:+1${alabama.phone}">${alabama.phone
        }</a></td><td class="priority-5"><a href="mailto:${alabama.email}">${alabama.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
    </div>
`;
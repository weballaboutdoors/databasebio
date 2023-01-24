import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="New York installerbio, New York door repair, New York window repair, New York window installer, New York door installer, New York window part installer, New York door part installer, New York handyman, New York door help, New York window help">
<meta name="keywords" content="door installation, window installation, New York window, New York door">
<meta name="author" content="Delfino Farfan">
<title>New York</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">New York</h1>
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
</div>
    <tr>
      <th class="priority-1">Company Name</th>
      <th class="priority-6">Address</th>
      <th class="priority-2">City</th>
      <th class="priority-8">State</th>
      <th class="priority-4">Zip Code</th>
      <th class="priority-3">Phone Number</th>
      <th class="priority-5">E-Mail</th>
    </tr>
    ${state.newyorks
      .map(newyork => {
        return `<tr><td><a href="/P${newyork._id}">${newyork.companyName}</a></td><td class="priority-6">${newyork.address}</td><td>${newyork.city}</td><td class="priority-8">${newyork.state
        }</td><td class="priority-4">${newyork.zipcode
        }</td><td><a href="tel:+1${newyork.phone}">${newyork.phone
        }</a></td><td class="priority-5"><a href="mailto:${newyork.email}">${newyork.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
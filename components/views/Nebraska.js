import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Nebraska installerbio, Nebraska door repair, Nebraska window repair, Nebraska window installer, Nebraska door installer, Nebraska window part installer, Nebraska door part installer, Nebraska handyman, Nebraska door help, Nebraska window help">
<meta name="keywords" content="door installation, window installation, Nebraska window, Nebraska door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()">Go Back</button>
<h1 class="container text-center">Nebraska</h1>
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
    ${state.nebraskas
      .map(nebraska => {
        return `<tr><td><a href="/P${nebraska._id}">${nebraska.companyName}</a></td><td class="priority-6">${nebraska.address}</td><td>${nebraska.city}</td><td class="priority-8">${nebraska.state
        }</td><td class="priority-4">${nebraska.zipcode
        }</td><td>${nebraska.phone
        }</td><td class="priority-5">${nebraska.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
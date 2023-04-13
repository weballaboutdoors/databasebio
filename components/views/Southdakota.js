import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="South Dakota installerbio, South Dakota door repair, South Dakota window repair, South Dakota window installer, South Dakota door installer, South Dakota window part installer, South Dakota door part installer, South Dakota handyman, South Dakota door help, South Dakota window help">
<meta name="keywords" content="door installation, window installation, South Dakota window, South Dakota door">
<meta name="author" content="Delfino Farfan">
<title>South Dakota</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">South Dakota</h1>
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
    ${state.southdakotas
      .map(southdakota => {
        return `<tr><td><a href="/P${southdakota._id}">${southdakota.companyName}</a></td><td class="priority-6">${southdakota.address}</td><td>${southdakota.city}</td><td class="priority-8">${southdakota.state
        }</td><td class="priority-4">${southdakota.zipcode
        }</td><td><a href="tel:+1${southdakota.phone}">${southdakota.phone
        }</a></td><td class="priority-5"><a href="mailto:${southdakota.email}">${southdakota.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
`;
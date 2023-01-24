import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="North Dakota installerbio, North Dakota door repair, North Dakota window repair, North Dakota window installer, North Dakota door installer, North Dakota window part installer, North Dakota door part installer, North Dakota handyman, North Dakota door help, North Dakota window help">
<meta name="keywords" content="door installation, window installation, North Dakota window, North Dakota door">
<meta name="author" content="Delfino Farfan">
<title>North Dakota</title>
</head>
<div class="container">
<button onclick="history.back()">Go Back</button>
<h1 class="container text-center">North Dakota</h1>
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
    ${state.northdakotas
      .map(northdakota => {
        return `<tr><td><a href="/P${northdakota._id}">${northdakota.companyName}</a></td><td class="priority-6">${northdakota.address}</td><td>${northdakota.city}</td><td class="priority-8">${northdakota.state
        }</td><td class="priority-4">${northdakota.zipcode
        }</td><td><a href="tel:+1${northdakota.phone}">${northdakota.phone
        }</a></td><td class="priority-5"><a href="mailto:${northdakota.email}">${northdakota.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
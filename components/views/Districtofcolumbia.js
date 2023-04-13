import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="District of Columbia installerbio, District of Columbia door repair, District of Columbia window repair, District of Columbia window installer, District of Columbia door installer, District of Columbia window part installer, District of Columbia door part installer, District of Columbia handyman, District of Columbia door help, District of Columbia window help">
<meta name="keywords" content="door installation, window installation, District of Columbia window, District of Columbia door">
<meta name="author" content="Delfino Farfan">
<title>District of Columbia</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">District of Columbia</h1>
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
    ${state.districtofcolumbias
      .map(districtofcolumbia => {
  return `<tr><td class="priority-1"><a href="/P${districtofcolumbia._id}">${districtofcolumbia.companyName}</a></td><td class="priority-6">${districtofcolumbia.address}</td><td>${districtofcolumbia.city}</td><td class="priority-8">${districtofcolumbia.state
  }</td><td class="priority-4">${districtofcolumbia.zipcode
  }</td><td><a href="tel:+1${districtofcolumbia.phone}">${districtofcolumbia.phone
  }</a></td><td class="priority-5"><a href="mailto:${districtofcolumbia.email}">${districtofcolumbia.email
  }</a></td></tr>`;
})
      .join("")}
  </table>
  </div>
`;

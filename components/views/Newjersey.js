import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="New Jersey installerbio, New Jersey door repair, New Jersey window repair, New Jersey window installer, New Jersey door installer, New Jersey window part installer, New Jersey door part installer, New Jersey handyman, New Jersey door help, New Jersey window help">
<meta name="keywords" content="door installation, window installation, New Jersey window, New Jersey door">
<meta name="author" content="Delfino Farfan">
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
    ${state.newjerseys
      .map(newjersey => {
        return `<tr><td><a href="/P${newjersey._id}">${newjersey.companyName}</a></td><td class="priority-6">${newjersey.address}</td><td>${newjersey.city}</td><td class="priority-8">${newjersey.state
        }</td><td class="priority-4">${newjersey.zipcode
        }</td><td><a href="tel:+1${newjersey.phone}">${newjersey.phone
        }</a></td><td class="priority-5"><a href="mailto:${newjersey.email}">${newjersey.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
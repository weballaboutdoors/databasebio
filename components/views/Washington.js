import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Washington installerbio, Washington door repair, Washington window repair, Washington window installer, Washington door installer, Washington window part installer, Washington door part installer, Washington handyman, Washington door help, Washington window help">
<meta name="keywords" content="door installation, window installation, Washington window, Washington door">
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
    ${state.washingtons
      .map(washington => {
        return `<tr><td><a href="/P${washington._id}">${washington.companyName}</a></td><td class="priority-6">${washington.address}</td><td>${washington.city}</td><td class="priority-8">${washington.state
        }</td><td class="priority-4">${washington.zipcode
        }</td><td><a href="tel:+1${washington.phone}">${washington.phone
        }</a></td><td class="priority-5"><a href="mailto:${washington.email}">${washington.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="California installerbio, California door repair, California window repair, California window installer, California door installer, California window part installer, California door part installer, California handyman, California door help, California window help">
<meta name="keywords" content="door installation, window installation, California window, California door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">California</h1>
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
    ${state.californias
      .map(california => {
        return `<tr><td class="priority-1"><a href="/P${california._id}">${california.companyName}</a></td><td class="priority-6">${california.address}</td><td>${california.city}</td><td class="priority-8">${california.state
        }</td><td class="priority-4">${california.zipcode
        }</td><td><a href="tel:+1${california.phone}">${california.phone
        }</a></td><td class="priority-5"><a href="mailto:${california.email}">${california.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
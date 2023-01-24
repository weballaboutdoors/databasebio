import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="South Carolina installerbio, South Carolina door repair, South Carolina window repair, South Carolina window installer, South Carolina door installer, South Carolina window part installer, South Carolina door part installer, South Carolina handyman, South Carolina door help, South Carolina window help">
<meta name="keywords" content="door installation, window installation, South Carolina window, South Carolina door">
<meta name="author" content="Delfino Farfan">
<title>South Carolina</title>
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
    ${state.southcarolinas
      .map(southcarolina => {
        return `<tr><td><a href="/P${southcarolina._id}">${southcarolina.companyName}</a></td><td class="priority-6">${southcarolina.address}</td><td>${southcarolina.city}</td><td class="priority-8">${southcarolina.state
        }</td><td class="priority-4">${southcarolina.zipcode
        }</td><td><a href="tel:+1${southcarolina.phone}">${southcarolina.phone
        }</a></td><td class="priority-5"><a href="mailto:${southcarolina.email}">${southcarolina.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="North Carolina installerbio, North Carolina door repair, North Carolina window repair, North Carolina window installer, North Carolina door installer, North Carolina window part installer, North Carolina door part installer, North Carolina handyman, North Carolina door help, North Carolina window help">
<meta name="keywords" content="door installation, window installation, North Carolina window, North Carolina door">
<meta name="author" content="Delfino Farfan">
<title>North Carolina</title>
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
    ${state.northcarolinas
      .map(northcarolina => {
        return `<tr><td><a href="/P${northcarolina._id}">${northcarolina.companyName}</a></td><td class="priority-6">${northcarolina.address}</td><td>${northcarolina.city}</td><td class="priority-8">${northcarolina.state
        }</td><td class="priority-4">${northcarolina.zipcode
        }</td><td><a href="tel:+1${northcarolina.phone}">${northcarolina.phone
        }</a></td><td class="priority-5"><a href="mailto:${northcarolina.email}">${northcarolina.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
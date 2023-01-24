import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Kentucky installerbio, Kentucky door repair, Kentucky window repair, Kentucky window installer, Kentucky door installer, Kentucky window part installer, Kentucky door part installer, Kentucky handyman, Kentucky door help, Kentucky window help">
<meta name="keywords" content="door installation, window installation, Kentucky window, Kentucky door">
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
    ${state.kentuckys
      .map(kentucky => {
        return `<tr><td class="priority-1"><a href="/P${kentucky._id}">${kentucky.companyName}</a></td><td class="priority-6">${kentucky.address}</td><td>${kentucky.city}</td><td class="priority-8">${kentucky.state
        }</td><td class="priority-4">${kentucky.zipcode
        }</td><td><a href="tel:+1${kentucky.phone}">${kentucky.phone
        }</a></td><td class="priority-5"><a href="mailto:${kentucky.email}">${kentucky.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
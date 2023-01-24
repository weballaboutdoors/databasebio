import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="New Mexico installerbio, New Mexico door repair, New Mexico window repair, New Mexico window installer, New Mexico door installer, New Mexico window part installer, New Mexico door part installer, New Mexico handyman, New Mexico door help, New Mexico window help">
<meta name="keywords" content="door installation, window installation, New Mexico window, New Mexico door">
<meta name="author" content="Delfino Farfan">
<title>New Mexico</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">New Mexico</h1>
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
    ${state.newmexicos
      .map(newmexico => {
        return `<tr><td><a href="/P${newmexico._id}">${newmexico.companyName}</a></td><td class="priority-6">${newmexico.address}</td><td>${newmexico.city}</td><td class="priority-8">${newmexico.state
        }</td><td class="priority-4">${newmexico.zipcode
        }</td><td><a href="tel:+1${newmexico.phone}">${newmexico.phone
        }</a></td><td class="priority-5"><a href="mailto:${newmexico.email}">${newmexico.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
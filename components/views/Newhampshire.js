import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="New Hampshire installerbio, New Hampshire door repair, New Hampshire window repair, New Hampshire window installer, New Hampshire door installer, New Hampshire window part installer, New Hampshire door part installer, New Hampshire handyman, New Hampshire door help, New Hampshire window help">
<meta name="keywords" content="door installation, window installation, New Hampshire window, New Hampshire door">
<meta name="author" content="Delfino Farfan">
<title>New Hampshire</title>
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
      <th class="priority-1">Company Name</th>
      <th class="priority-6">Address</th>
      <th class="priority-2">City</th>
      <th class="priority-8">State</th>
      <th class="priority-4">Zip Code</th>
      <th class="priority-3">Phone Number</th>
      <th class="priority-5">E-Mail</th>
    </tr>
    ${state.newhampshires
      .map(newhampshire => {
        return `<tr><td><a href="/P${newhampshire._id}">${newhampshire.companyName}</a></td><td class="priority-6">${newhampshire.address}</td><td>${newhampshire.city}</td><td class="priority-8">${newhampshire.state
        }</td><td class="priority-4">${newhampshire.zipcode
        }</td><td><a href="tel:+1${newhampshire.phone}">${newhampshire.phone
        }</a></td><td class="priority-5"><a href="mailto:${newhampshire.email}">${newhampshire.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
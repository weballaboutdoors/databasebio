import html from "html-literal";

export default (state) => html `
<head>
<meta name="description" content="Kansas installerbio, Kansas door repair, Kansas window repair, Kansas window installer, Kansas door installer, Kansas window part installer, Kansas door part installer, Kansas handyman, Kansas door help, Kansas window help">
<meta name="keywords" content="door installation, window installation, Kansas window, Kansas door">
<meta name="author" content="Delfino Farfan">
<title>${state.view}</title>
</head>
<div class="container">
<button onclick="history.back()"></button>
<h1 class="container text-center">Kansas</h1>
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
    ${state.kansass
      .map(kansas => {
        return `<tr><td class="priority-1"><a href="/P${kansas._id}">${kansas.companyName}</a></td><td class="priority-6">${kansas.address}</td><td>${kansas.city}</td><td class="priority-8">${kansas.state
        }</td><td class="priority-4">${kansas.zipcode
        }</td><td><a href="tel:+1${kansas.phone}">${kansas.phone
        }</a></td><td class="priority-5"><a href="mailto:${kansas.email}">${kansas.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
  </div>
`;
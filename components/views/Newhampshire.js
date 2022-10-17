import html from "html-literal";

export default (state) => html `
<div class="container text-center">
<div class="justify-content-center">
<input id="searchbarCity" onkeyup="search_city()" type="text"
        name="search" placeholder="Search by City..">
<input id="searchbarZip" onkeyup="search_zip()" type="text"
        name="search" placeholder="Search by Zip Code..">
<table class="tables" id="myTable">
</div>
</div>
    <tr>
      <th>Name</th>
      <th>Company Name</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      <th>E-Mail</th>
    </tr>
    ${state.newhampshires
      .map(newhampshire => {
        return `<tr><td>${newhampshire.name}</td><td>${newhampshire.companyName}</td><td>${newhampshire.address}</td><td>${newhampshire.city}</td><td>${newhampshire.state
        }</td><td>${newhampshire.zipcode
        }</td><td>${newhampshire.phone
        }</td><td>${newhampshire.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
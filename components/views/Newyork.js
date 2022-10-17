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
    ${state.newyorks
      .map(newyork => {
        return `<tr><td>${newoyork.name}</td><td>${newyork.companyName}</td><td>${newyork.address}</td><td>${newyork.city}</td><td>${newyork.state
        }</td><td>${newyork.zipcode
        }</td><td>${newyork.phone
        }</td><td>${newyork.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
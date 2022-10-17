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
    ${state.alaskas
      .map(alaska => {
        return `<tr><td>${alaska.name}</td><td>${alaska.companyName}</td><td>${alaska.address}</td><td>${alaska.city}</td><td>${alaska.state
        }</td><td>${alaska.zipcode
        }</td><td>${alaska.phone
        }</td><td>${alaska.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
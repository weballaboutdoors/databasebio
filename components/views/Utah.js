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
    ${state.utahs
      .map(utah => {
        return `<tr><td>${utah.name}</td><td>${utah.companyName}</td><td>${utah.address}</td><td>${utah.city}</td><td>${utah.state
        }</td><td>${utah.zipcode
        }</td><td>${utah.phone
        }</td><td>${utah.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
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
    ${state.floridas
      .map(florida => {
        return `<tr><td>${florida.name}</td><td>${florida.companyName}</td><td>${florida.address}</td><td>${florida.city}</td><td>${florida.state
        }</td><td>${florida.zipcode
        }</td><td>${florida.phone
        }</td><td>${florida.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
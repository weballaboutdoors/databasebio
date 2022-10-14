import html from "html-literal";

export default (state) => html `
<input id="searchbarCity" onkeyup="search_city()" type="text"
        name="search" placeholder="Search by City..">
<input id="searchbarZip" onkeyup="search_zip()" type="text"
        name="search" placeholder="Search by Zip Code..">
<table class="tables" id="myTable">
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
    ${state.louisianas
      .map(louisiana => {
        return `<tr><td>${louisiana.name}</td><td>${louisiana.companyName}</td><td>${louisiana.address}</td><td>${louisiana.city}</td><td>${louisiana.state
        }</td><td>${louisiana.zipcode
        }</td><td>${louisiana.phone
        }</td><td>${louisiana.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
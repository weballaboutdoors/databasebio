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
    ${state.hawaiis
      .map(hawaii => {
        return `<tr><td>${hawaii.name}</td><td>${hawaii.companyName}</td><td>${hawaii.address}</td><td>${hawaii.city}</td><td>${hawaii.state
        }</td><td>${hawaii.zipcode
        }</td><td>${hawaii.phone
        }</td><td>${hawaii.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
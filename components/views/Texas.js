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
    ${state.texass
      .map(texas => {
        return `<tr><td>${texas.name}</td><td>${texas.companyName}</td><td>${texas.address}</td><td>${texas.city}</td><td>${texas.state
        }</td><td>${texas.zipcode
        }</td><td>${texas.phone
        }</td><td>${texas.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
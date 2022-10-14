import html from "html-literal";

export default (state) => html `
<input id="searchbarCity" onkeyup="search_city()" type="text"
        name="search" placeholder="Search by City..">
<input id="searchbarZip" onkeyup="search_zip()" type="text"
        name="search" placeholder="Search by Zip Code..">
<table class="tables" id="myTable"></table>
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
    ${state.iowas
      .map(iowa => {
        return `<tr><td>${iowa.name}</td><td>${iowa.companyName}</td><td>${iowa.address}</td><td>${iowa.city}</td><td>${iowa.state
        }</td><td>${iowa.zipcode
        }</td><td>${iowa.phone
        }</td><td>${iowa.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
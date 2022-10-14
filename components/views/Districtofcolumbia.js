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
    ${state.districtofcolumbias
      .map(districtofcolumbia => {
        return `<tr><td>${districtofcolumbia.name}</td><td>${districtofcolumbia.companyName}</td><td>${districtofcolumbia.address}</td><td>${districtofcolumbia.city}</td><td>${districtofcolumbia.state
        }</td><td>${districtofcolumbia.zipcode
        }</td><td>${districtofcolumbia.phone
        }</td><td>${districtofcolumbia.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
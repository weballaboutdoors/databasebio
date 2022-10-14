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
    ${state.southdakotas
      .map(southdakota => {
        return `<tr><td>${southdakota.name}</td><td>${southdakota.companyName}</td><td>${southdakota.address}</td><td>${southdakota.city}</td><td>${southdakota.state
        }</td><td>${southdakota.zipcode
        }</td><td>${southdakota.phone
        }</td><td>${southdakota.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
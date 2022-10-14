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
    ${state.georgias
      .map(georgia => {
        return `<tr><td>${georgia.name}</td><td>${georgia.companyName}</td><td>${georgia.address}</td><td>${georgia.city}</td><td>${georgia.state
        }</td><td>${georgia.zipcode
        }</td><td>${georgia.phone
        }</td><td>${georgia.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
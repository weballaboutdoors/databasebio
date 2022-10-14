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
    ${state.nevadas
      .map(nevada => {
        return `<tr><td>${nevada.name}</td><td>${nevada.companyName}</td><td>${nevada.address}</td><td>${nevada.city}</td><td>${nevada.state
        }</td><td>${nevada.zipcode
        }</td><td>${nevada.phone
        }</td><td>${nevada.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
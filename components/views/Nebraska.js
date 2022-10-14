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
    ${state.nebraskas
      .map(nebraska => {
        return `<tr><td>${nebraska.name}</td><td>${nebraska.companyName}</td><td>${nebraska.address}</td><td>${nebraska.city}</td><td>${nebraska.state
        }</td><td>${nebraska.zipcode
        }</td><td>${nebraska.phone
        }</td><td>${nebraska.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
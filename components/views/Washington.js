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
    ${state.washingtons
      .map(washington => {
        return `<tr><td>${washington.name}</td><td>${washington.companyName}</td><td>${washington.address}</td><td>${washington.city}</td><td>${washington.state
        }</td><td>${washington.zipcode
        }</td><td>${washington.phone
        }</td><td>${washington.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
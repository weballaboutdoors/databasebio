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
    ${state.vermonts
      .map(vermont => {
        return `<tr><td>${vermont.name}</td><td>${vermont.companyName}</td><td>${vermont.address}</td><td>${vermont.city}</td><td>${vermont.state
        }</td><td>${vermont.zipcode
        }</td><td>${vermont.phone
        }</td><td>${vermont.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
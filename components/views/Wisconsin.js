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
    ${state.wisconsins
      .map(wisconsin => {
        return `<tr><td>${wisconsin.name}</td><td>${wisconsin.companyName}</td><td>${wisconsin.address}</td><td>${wisconsin.city}</td><td>${wisconsin.state
        }</td><td>${wisconsin.zipcode
        }</td><td>${wisconsin.phone
        }</td><td>${wisconsin.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
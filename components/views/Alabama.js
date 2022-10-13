import html from "html-literal";

export default (state) => html `
<p>this is the alabama page</p>
<input id="searchbarName" onkeyup="search_name()" type="text"
        name="search" placeholder="Search Names..">
<input id="searchbarZip" onkeyup="search_zip()" type="text"
        name="search" placeholder="Search by Zip Code..">
<table class="tables">
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
    ${state.alabamas
      .map(alabama => {
        return `<tr><td class="name">${alabama.name}</td><td>${alabama.companyName}</td><td>${alabama.address}</td><td>${alabama.city}</td><td>${alabama.state
        }</td><td class="zip">${alabama.zipcode
        }</td><td>${alabama.phone
        }</td><td>${alabama.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
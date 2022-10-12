import html from "html-literal";

export default (state) => html `
<p>this is the delaware page</p>
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
    ${state.delawares
      .map(delaware => {
        return `<tr><td>${delaware.name}</td><td>${delaware.companyName}</td><td>${delaware.address}</td><td>${delaware.city}</td><td>${delaware.state
        }</td><td>${delaware.zipcode
        }</td><td>${delaware.phone
        }</td><td>${delaware.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
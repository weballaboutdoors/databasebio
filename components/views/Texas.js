import html from "html-literal";

export default (state) => html `
<p>this is the texas page</p>
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
    ${state.texass
      .map(texas => {
        return `<tr><td>${texas.name}</td><td>${texas.companyName}</td><td>${texas.address}</td><td>${texas.city}</td><td>${texas.state
        }</td><td>${texas.zipcode
        }</td><td>${texas.phone
        }</td><td>${texas.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
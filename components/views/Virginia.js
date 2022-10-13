import html from "html-literal";

export default (state) => html `
<p>this is the virginia page</p>
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
    ${state.virginias
      .map(virginia => {
        return `<tr><td>${virginia.name}</td><td>${virginia.companyName}</td><td>${virginia.address}</td><td>${virginia.city}</td><td>${virginia.state
        }</td><td>${virginia.zipcode
        }</td><td>${virginia.phone
        }</td><td>${virginia.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
import html from "html-literal";

export default (state) => html `
<p>this is the hawaii page</p>
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
    ${state.hawaiis
      .map(hawaii => {
        return `<tr><td>${hawaii.name}</td><td>${hawaii.companyName}</td><td>${hawaii.address}</td><td>${hawaii.city}</td><td>${hawaii.state
        }</td><td>${hawaii.zipcode
        }</td><td>${hawaii.phone
        }</td><td>${hawaii.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
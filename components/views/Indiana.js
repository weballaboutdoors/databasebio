import html from "html-literal";

export default (state) => html `
<p>this is the indiana page</p>
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
    ${state.indianas
      .map(indiana => {
        return `<tr><td>${indiana.name}</td><td>${indiana.companyName}</td><td>${indiana.address}</td><td>${indiana.city}</td><td>${indiana.state
        }</td><td>${indiana.zipcode
        }</td><td>${indiana.phone
        }</td><td>${indiana.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
import html from "html-literal";

export default (state) => html `
<p>this is the illinois page</p>
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
    ${state.illinoiss
      .map(illinois => {
        return `<tr><td>${illinois.name}</td><td>${illinois.companyName}</td><td>${illinois.address}</td><td>${illinois.city}</td><td>${illinois.state
        }</td><td>${illinois.zipcode
        }</td><td>${illinois.phone
        }</td><td>${illinois.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
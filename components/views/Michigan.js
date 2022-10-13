import html from "html-literal";

export default (state) => html `
<p>this is the michigan page</p>
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
    ${state.michigans
      .map(michigan => {
        return `<tr><td>${michigan.name}</td><td>${michigan.companyName}</td><td>${michigan.address}</td><td>${michigan.city}</td><td>${michigan.state
        }</td><td>${michigan.zipcode
        }</td><td>${michigan.phone
        }</td><td>${michigan.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
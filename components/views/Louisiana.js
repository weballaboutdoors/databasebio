import html from "html-literal";

export default (state) => html `
<p>this is the louisiana page</p>
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
    ${state.louisianas
      .map(louisiana => {
        return `<tr><td>${louisiana.name}</td><td>${louisiana.companyName}</td><td>${louisiana.address}</td><td>${louisiana.city}</td><td>${louisiana.state
        }</td><td>${louisiana.zipcode
        }</td><td>${louisiana.phone
        }</td><td>${louisiana.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
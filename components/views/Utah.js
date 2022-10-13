import html from "html-literal";

export default (state) => html `
<p>this is the utah page</p>
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
    ${state.utahs
      .map(utah => {
        return `<tr><td>${utah.name}</td><td>${utah.companyName}</td><td>${utah.address}</td><td>${utah.city}</td><td>${utah.state
        }</td><td>${utah.zipcode
        }</td><td>${utah.phone
        }</td><td>${utah.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
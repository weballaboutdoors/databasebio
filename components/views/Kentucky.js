import html from "html-literal";

export default (state) => html `
<p>this is the kentucky page</p>
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
    ${state.kentuckys
      .map(kentucky => {
        return `<tr><td>${kentucky.name}</td><td>${kentucky.companyName}</td><td>${kentucky.address}</td><td>${kentucky.city}</td><td>${kentucky.state
        }</td><td>${kentucky.zipcode
        }</td><td>${kentucky.phone
        }</td><td>${kentucky.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
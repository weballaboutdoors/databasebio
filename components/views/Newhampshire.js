import html from "html-literal";

export default (state) => html `
<p>this is the new hampshire page</p>
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
    ${state.newhampshires
      .map(newhampshire => {
        return `<tr><td>${newhampshire.name}</td><td>${newhampshire.companyName}</td><td>${newhampshire.address}</td><td>${newhampshire.city}</td><td>${newhampshire.state
        }</td><td>${newhampshire.zipcode
        }</td><td>${newhampshire.phone
        }</td><td>${newhampshire.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
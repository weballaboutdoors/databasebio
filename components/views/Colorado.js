import html from "html-literal";

export default (state) => html `
<p>this is the colorado page</p>
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
    ${state.colorados
      .map(colorado => {
        return `<tr><td>${colorado.name}</td><td>${colorado.companyName}</td><td>${colorado.address}</td><td>${colorado.city}</td><td>${colorado.state
        }</td><td>${colorado.zipcode
        }</td><td>${colorado.phone
        }</td><td>${colorado.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
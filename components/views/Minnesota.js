import html from "html-literal";

export default (state) => html `
<p>this is the minnesota page</p>
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
    ${state.minnesotas
      .map(minnesota => {
        return `<tr><td>${minnesota.name}</td><td>${minnesota.companyName}</td><td>${minnesota.address}</td><td>${minnesota.city}</td><td>${minnesota.state
        }</td><td>${minnesota.zipcode
        }</td><td>${minnesota.phone
        }</td><td>${minnesota.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
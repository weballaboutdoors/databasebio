import html from "html-literal";

export default (state) => html `
<p>this is the connecticut page</p>
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
    ${state.connecticuts
      .map(connecticut => {
        return `<tr><td>${connecticut.name}</td><td>${connecticut.companyName}</td><td>${connecticut.address}</td><td>${connecticut.city}</td><td>${connecticut.state
        }</td><td>${connecticut.zipcode
        }</td><td>${connecticut.phone
        }</td><td>${connecticut.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
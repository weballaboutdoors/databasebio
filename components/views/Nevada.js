import html from "html-literal";

export default (state) => html `
<p>this is the nevada page</p>
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
    ${state.nevadas
      .map(nevada => {
        return `<tr><td>${nevada.name}</td><td>${nevada.companyName}</td><td>${nevada.address}</td><td>${nevada.city}</td><td>${nevada.state
        }</td><td>${nevada.zipcode
        }</td><td>${nevada.phone
        }</td><td>${nevada.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
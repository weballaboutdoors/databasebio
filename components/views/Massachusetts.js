import html from "html-literal";

export default (state) => html `
<p>this is the massachusetts page</p>
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
    ${state.massachusettss
      .map(massachusetts => {
        return `<tr><td>${massachusetts.name}</td><td>${massachusetts.companyName}</td><td>${massachusetts.address}</td><td>${massachusetts.city}</td><td>${massachusetts.state
        }</td><td>${massachusetts.zipcode
        }</td><td>${massachusetts.phone
        }</td><td>${massachusetts.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
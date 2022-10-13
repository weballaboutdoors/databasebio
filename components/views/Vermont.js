import html from "html-literal";

export default (state) => html `
<p>this is the vermont page</p>
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
    ${state.vermonts
      .map(vermont => {
        return `<tr><td>${vermont.name}</td><td>${vermont.companyName}</td><td>${vermont.address}</td><td>${vermont.city}</td><td>${vermont.state
        }</td><td>${vermont.zipcode
        }</td><td>${vermont.phone
        }</td><td>${vermont.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
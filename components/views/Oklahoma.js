import html from "html-literal";

export default (state) => html `
<p>this is the oklahoma page</p>
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
    ${state.oklahomas
      .map(oklahoma => {
        return `<tr><td>${oklahoma.name}</td><td>${oklahoma.companyName}</td><td>${oklahoma.address}</td><td>${oklahoma.city}</td><td>${oklahoma.state
        }</td><td>${oklahoma.zipcode
        }</td><td>${oklahoma.phone
        }</td><td>${oklahoma.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
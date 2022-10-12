import html from "html-literal";

export default (state) => html `
<p>this is the iowa page</p>
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
    ${state.iowas
      .map(iowa => {
        return `<tr><td>${iowa.name}</td><td>${iowa.companyName}</td><td>${iowa.address}</td><td>${iowa.city}</td><td>${iowa.state
        }</td><td>${iowa.zipcode
        }</td><td>${iowa.phone
        }</td><td>${iowa.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
import html from "html-literal";

export default (state) => html `
<p>this is the arkansas page</p>
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
    ${state.arkansass
      .map(arkansas => {
        return `<tr><td>${arkansas.name}</td><td>${alabama.companyName}</td><td>${arkansas.address}</td><td>${arkansas.city}</td><td>${arkansas.state
        }</td><td>${arkansas.zipcode
        }</td><td>${arkansas.phone
        }</td><td>${arkansas.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
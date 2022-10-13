import html from "html-literal";

export default (state) => html `
<p>this is the south carolina page</p>
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
    ${state.southcarolinas
      .map(southcarolina => {
        return `<tr><td>${southcarolina.name}</td><td>${southcarolina.companyName}</td><td>${southcarolina.address}</td><td>${southcarolina.city}</td><td>${southcarolina.state
        }</td><td>${southcarolina.zipcode
        }</td><td>${southcarolina.phone
        }</td><td>${southcarolina.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
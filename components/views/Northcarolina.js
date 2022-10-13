import html from "html-literal";

export default (state) => html `
<p>this is the north carolina page</p>
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
    ${state.northcarolinas
      .map(northcarolina => {
        return `<tr><td>${northcarolina.name}</td><td>${northcarolina.companyName}</td><td>${northcarolina.address}</td><td>${northcarolina.city}</td><td>${northcarolina.state
        }</td><td>${northcarolina.zipcode
        }</td><td>${northcarolina.phone
        }</td><td>${northcarolina.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
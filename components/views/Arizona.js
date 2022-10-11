import html from "html-literal";

export default (state) => html `
<p>this is the arizona page</p>
<table class="tables">
    <tr>
      <th>Name</th>
      <th>Company Name</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      <th>E-Mail</th>
    </tr>
    ${state.arizonas
      .map(arizona => {
        return `<tr><td>${arizona.name}</td><td>${arizona.companyName}</td><td>${arizona.address}</td><td>${arizona.city}</td><td>${arizona.state
        }</td><td>${arizona.zipcode
        }</td><td>${arizona.phone
        }</td><td>${arizona.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
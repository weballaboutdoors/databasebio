import html from "html-literal";

export default (state) => html `
<p>this is the new mexico page</p>
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
    ${state.newmexicos
      .map(newmexico => {
        return `<tr><td>${newmexico.name}</td><td>${newmexico.companyName}</td><td>${newmexico.address}</td><td>${newmexico.city}</td><td>${newmexico.state
        }</td><td>${newmexico.zipcode
        }</td><td>${newmexico.phone
        }</td><td>${newmexico.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
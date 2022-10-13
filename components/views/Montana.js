import html from "html-literal";

export default (state) => html `
<p>this is the montana page</p>
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
    ${state.montanas
      .map(montana => {
        return `<tr><td>${montana.name}</td><td>${montana.companyName}</td><td>${montana.address}</td><td>${montana.city}</td><td>${montana.state
        }</td><td>${montana.zipcode
        }</td><td>${montana.phone
        }</td><td>${montana.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
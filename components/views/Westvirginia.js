import html from "html-literal";

export default (state) => html `
<p>this is the west virginia page</p>
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
    ${state.westvirginias
      .map(westvirginia => {
        return `<tr><td>${westvirginia.name}</td><td>${westvirginia.companyName}</td><td>${westvirginia.address}</td><td>${westvirginia.city}</td><td>${westvirginia.state
        }</td><td>${westvirginia.zipcode
        }</td><td>${westvirginia.phone
        }</td><td>${westvirginia.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
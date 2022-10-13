import html from "html-literal";

export default (state) => html `
<p>this is the oregon page</p>
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
    ${state.oregons
      .map(oregon => {
        return `<tr><td>${oregon.name}</td><td>${oregon.companyName}</td><td>${oregon.address}</td><td>${oregon.city}</td><td>${oregon.state
        }</td><td>${oregon.zipcode
        }</td><td>${oregon.phone
        }</td><td>${oregon.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
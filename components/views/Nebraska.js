import html from "html-literal";

export default (state) => html `
<p>this is the nebraska page</p>
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
    ${state.nebraskas
      .map(nebraska => {
        return `<tr><td>${nebraska.name}</td><td>${nebraska.companyName}</td><td>${nebraska.address}</td><td>${nebraska.city}</td><td>${nebraska.state
        }</td><td>${nebraska.zipcode
        }</td><td>${nebraska.phone
        }</td><td>${nebraska.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
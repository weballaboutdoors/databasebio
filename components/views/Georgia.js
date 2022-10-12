import html from "html-literal";

export default (state) => html `
<p>this is the georgia page</p>
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
    ${state.georgias
      .map(georgia => {
        return `<tr><td>${georgia.name}</td><td>${georgia.companyName}</td><td>${georgia.address}</td><td>${georgia.city}</td><td>${georgia.state
        }</td><td>${georgia.zipcode
        }</td><td>${georgia.phone
        }</td><td>${georgia.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
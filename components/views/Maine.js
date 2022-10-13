import html from "html-literal";

export default (state) => html `
<p>this is the maine page</p>
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
    ${state.maines
      .map(maine => {
        return `<tr><td>${maine.name}</td><td>${maine.companyName}</td><td>${maine.address}</td><td>${maine.city}</td><td>${maine.state
        }</td><td>${maine.zipcode
        }</td><td>${maine.phone
        }</td><td>${maine.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
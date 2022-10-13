import html from "html-literal";

export default (state) => html `
<p>this is the wyoming page</p>
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
    ${state.wyomings
      .map(wyoming => {
        return `<tr><td>${wyoming.name}</td><td>${wyoming.companyName}</td><td>${wyoming.address}</td><td>${wyoming.city}</td><td>${wyoming.state
        }</td><td>${wyoming.zipcode
        }</td><td>${wyoming.phone
        }</td><td>${wyoming.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
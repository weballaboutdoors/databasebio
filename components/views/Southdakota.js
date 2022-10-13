import html from "html-literal";

export default (state) => html `
<p>this is the south dakota page</p>
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
    ${state.southdakotas
      .map(southdakota => {
        return `<tr><td>${southdakota.name}</td><td>${southdakota.companyName}</td><td>${southdakota.address}</td><td>${southdakota.city}</td><td>${southdakota.state
        }</td><td>${southdakota.zipcode
        }</td><td>${southdakota.phone
        }</td><td>${southdakota.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
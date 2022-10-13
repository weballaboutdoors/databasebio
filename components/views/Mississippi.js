import html from "html-literal";

export default (state) => html `
<p>this is the mississippi page</p>
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
    ${state.mississippis
      .map(mississippi => {
        return `<tr><td>${mississippi.name}</td><td>${mississippi.companyName}</td><td>${mississippi.address}</td><td>${mississippi.city}</td><td>${mississippi.state
        }</td><td>${mississippi.zipcode
        }</td><td>${mississippi.phone
        }</td><td>${mississippi.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
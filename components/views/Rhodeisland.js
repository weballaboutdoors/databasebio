import html from "html-literal";

export default (state) => html `
<p>this is the rhode island page</p>
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
    ${state.rhodeislands
      .map(rhodeisland => {
        return `<tr><td>${rhodeisland.name}</td><td>${rhodeisland.companyName}</td><td>${rhodeisland.address}</td><td>${rhodeisland.city}</td><td>${rhodeisland.state
        }</td><td>${rhodeisland.zipcode
        }</td><td>${rhodeisland.phone
        }</td><td>${rhodeisland.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
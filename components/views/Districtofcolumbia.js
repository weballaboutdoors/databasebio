import html from "html-literal";

export default (state) => html `
<p>this is the district of columbia page</p>
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
    ${state.districtofcolumbias
      .map(districtofcolumbia => {
        return `<tr><td>${districtofcolumbia.name}</td><td>${districtofcolumbia.companyName}</td><td>${districtofcolumbia.address}</td><td>${districtofcolumbia.city}</td><td>${districtofcolumbia.state
        }</td><td>${districtofcolumbia.zipcode
        }</td><td>${districtofcolumbia.phone
        }</td><td>${districtofcolumbia.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
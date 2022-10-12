import html from "html-literal";

export default (state) => html `
<p>this is the alaska page</p>
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
    ${state.alaskas
      .map(alaska => {
        return `<tr><td>${alaska.name}</td><td>${alaska.companyName}</td><td>${alaska.address}</td><td>${alaska.city}</td><td>${alaska.state
        }</td><td>${alaska.zipcode
        }</td><td>${alaska.phone
        }</td><td>${alaska.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
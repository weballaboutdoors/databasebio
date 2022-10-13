import html from "html-literal";

export default (state) => html `
<p>this is the missouri page</p>
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
    ${state.missouris
      .map(missouri => {
        return `<tr><td>${missouri.name}</td><td>${missouri.companyName}</td><td>${missouri.address}</td><td>${missouri.city}</td><td>${missouri.state
        }</td><td>${missouri.zipcode
        }</td><td>${missouri.phone
        }</td><td>${misouri.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
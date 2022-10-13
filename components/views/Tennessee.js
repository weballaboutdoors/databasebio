import html from "html-literal";

export default (state) => html `
<p>this is the tennessee page</p>
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
    ${state.tennessees
      .map(tennessee => {
        return `<tr><td>${tennessee.name}</td><td>${tennessee.companyName}</td><td>${tennessee.address}</td><td>${tennessee.city}</td><td>${tennessee.state
        }</td><td>${tennessee.zipcode
        }</td><td>${tennessee.phone
        }</td><td>${tennessee.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
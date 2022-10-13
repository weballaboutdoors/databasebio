import html from "html-literal";

export default (state) => html `
<p>this is the new jersey page</p>
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
    ${state.newjerseys
      .map(newjersey => {
        return `<tr><td>${newjersey.name}</td><td>${newjersey.companyName}</td><td>${newjersey.address}</td><td>${newjersey.city}</td><td>${newjersey.state
        }</td><td>${newjersey.zipcode
        }</td><td>${newjersey.phone
        }</td><td>${newjersey.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
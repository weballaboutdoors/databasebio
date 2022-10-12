import html from "html-literal";

export default (state) => html `
<p>this is the california page</p>
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
    ${state.californias
      .map(california => {
        return `<tr><td>${california.name}</td><td>${california.companyName}</td><td>${california.address}</td><td>${california.city}</td><td>${california.state
        }</td><td>${california.zipcode
        }</td><td>${california.phone
        }</td><td>${california.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
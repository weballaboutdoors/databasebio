import html from "html-literal";

export default (state) => html `
<p>this is the idaho page</p>
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
    ${state.idahos
      .map(idaho => {
        return `<tr><td>${idaho.name}</td><td>${idaho.companyName}</td><td>${idaho.address}</td><td>${idaho.city}</td><td>${idaho.state
        }</td><td>${idaho.zipcode
        }</td><td>${idaho.phone
        }</td><td>${idaho.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
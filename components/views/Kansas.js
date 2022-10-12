import html from "html-literal";

export default (state) => html `
<p>this is the kansas page</p>
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
    ${state.kansass
      .map(kansas => {
        return `<tr><td>${kansas.name}</td><td>${kansas.companyName}</td><td>${kansas.address}</td><td>${kansas.city}</td><td>${kansas.state
        }</td><td>${kansas.zipcode
        }</td><td>${kansas.phone
        }</td><td>${kansas.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
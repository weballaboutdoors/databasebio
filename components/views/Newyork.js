import html from "html-literal";

export default (state) => html `
<p>this is the new york page</p>
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
    ${state.newyorks
      .map(newyork => {
        return `<tr><td>${newoyork.name}</td><td>${newyork.companyName}</td><td>${newyork.address}</td><td>${newyork.city}</td><td>${newyork.state
        }</td><td>${newyork.zipcode
        }</td><td>${newyork.phone
        }</td><td>${newyork.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
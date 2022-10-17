import html from "html-literal";

export default (state) => html `
<div class="container text-center">
<div class="justify-content-center">
<input id="searchbarCity" onkeyup="search_city()" type="text"
        name="search" placeholder="Search by City..">
<input id="searchbarZip" onkeyup="search_zip()" type="text"
        name="search" placeholder="Search by Zip Code..">
<table class="tables" id="myTable">
</div>
</div>
    <tr>
      <th class="priority-7">Name</th>
      <th class="priority-1">Company Name</th>
      <th class="priority-6">Address</th>
      <th class="priority-2">City</th>
      <th class="priority-8">State</th>
      <th class="priority-4">Zip Code</th>
      <th class="priority-3">Phone Number</th>
      <th class="priority-5">E-Mail</th>
    </tr>
    ${state.southcarolinas
      .map(southcarolina => {
        return `<tr><td class="priority-7">${southcarolina.name}</td><td>${southcarolina.companyName}</td><td class="priority-6">${southcarolina.address}</td><td>${southcarolina.city}</td><td class="priority-8">${southcarolina.state
        }</td><td class="priority-4">${southcarolina.zipcode
        }</td><td>${southcarolina.phone
        }</td><td class="priority-5">${southcarolina.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
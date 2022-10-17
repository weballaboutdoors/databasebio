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
    ${state.michigans
      .map(michigan => {
        return `<tr><td class="priority-7">${michigan.name}</td><td>${michigan.companyName}</td><td class="priority-6">${michigan.address}</td><td>${michigan.city}</td><td class="priority-8">${michigan.state
        }</td><td class="priority-4">${michigan.zipcode
        }</td><td>${michigan.phone
        }</td><td class="priority-5">${michigan.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
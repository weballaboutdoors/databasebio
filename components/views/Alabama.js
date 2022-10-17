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
    ${state.alabamas
      .map(alabama => {
        return `<tr><td class="priority-7">${alabama.name}</td><td>${alabama.companyName}</td><td class="priority-6">${alabama.address}</td><td>${alabama.city}</td><td class="priority-8">${alabama.state
        }</td><td class="priority-4">${alabama.zipcode
        }</td><td>${alabama.phone
        }</td><td class="priority-5">${alabama.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
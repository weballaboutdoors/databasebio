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
    ${state.newmexicos
      .map(newmexico => {
        return `<tr><td class="priority-7">${newmexico.name}</td><td>${newmexico.companyName}</td><td class="priority-6">${newmexico.address}</td><td>${newmexico.city}</td><td class="priority-8">${newmexico.state
        }</td><td class="priority-4">${newmexico.zipcode
        }</td><td>${newmexico.phone
        }</td><td class="priority-5">${newmexico.email
        }</td></tr>`;
      })
      .join("")}
  </table>
`;
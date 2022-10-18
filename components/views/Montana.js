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
    ${state.montanas
      .map(montana => {
        return `<tr><td class="priority-7">${montana.name}</td><td>${montana.companyName}</td><td class="priority-6">${montana.address}</td><td>${montana.city}</td><td class="priority-8">${montana.state
        }</td><td class="priority-4">${montana.zipcode
        }</td><td><a href="tel:+1${montana.phone}">${montana.phone
        }</a></td><td class="priority-5"><a href="mailto:${montana.email}">${montana.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
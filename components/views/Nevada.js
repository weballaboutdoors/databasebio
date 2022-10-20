import html from "html-literal";

export default (state) => html `
<div class="container">
<div class="row">
<input class="col" id="searchbarCity" onkeyup="search_city()" type="search"
        name="search" placeholder="Search by City..">
<input class="col" id="searchbarZip" onkeyup="search_zip()" type="search"
        name="search" placeholder="Search by Zip Code..">
        </div>
        </div>
        <div class="container text-center">
<table class="tables" id="myTable">
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
    ${state.nevadas
      .map(nevada => {
        return `<tr><td class="priority-7">${nevada.name}</td><td>${nevada.companyName}</td><td class="priority-6">${nevada.address}</td><td>${nevada.city}</td><td class="priority-8">${nevada.state
        }</td><td class="priority-4">${nevada.zipcode
        }</td><td><a href="tel:+1${nevada.phone}">${nevada.phone
        }</a></td><td class="priority-5"><a href="mailto:${nevada.email}">${nevada.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
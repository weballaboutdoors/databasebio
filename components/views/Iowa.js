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
      <th class="priority-1">Name / Company</th>
      <th class="priority-6">Address</th>
      <th class="priority-2">City</th>
      <th class="priority-8">State</th>
      <th class="priority-4">Zip Code</th>
      <th class="priority-3">Phone Number</th>
      <th class="priority-5">E-Mail</th>
    </tr>
    ${state.iowas
      .map(iowa => {
        return `<tr><td class="priority-1"><a href="/P${iowa._id}">${iowa.companyName}</a></td><td class="priority-6">${iowa.address}</td><td>${iowa.city}</td><td class="priority-8">${iowa.state
        }</td><td class="priority-4">${iowa.zipcode
        }</td><td><a href="tel:+1${iowa.phone}">${iowa.phone
        }</a></td><td class="priority-5"><a href="mailto:${iowa.email}">${iowa.email
        }</a></td></tr>`;
      })
      .join("")}
  </table>
`;
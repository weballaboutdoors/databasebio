import html from "html-literal";

export default () => html `
<div class="container text-center">
<div class="justify-content-center">
<div>
        <h2>Welcome to InstallerBio!</h2>
        <p>At <a href="https://www.allaboutdoors.com/">All About Doors and Windows</a>, we realized that there might be some customers purchasing door or window parts who need some assistance with proper installation of their purchase. This site is a place for window and door contractors and installers to list their information. Now when you purchase a door part or a window part, you have a place to find someone who will assist you with installation. This is a free service website.   
        As an installer, it costs you nothing to list your name, address, website and other details. You can sign up for your free account <a href="/Installer">here</a></p>
<div>
<div class="container text-center">
<div class="row justify-content-center">
    <div>
    <input id="searchbarState" onkeyup="search_state()" type="text"
        name="search" placeholder="Search States..">
        <h2>Browse Window and Door Installers by State</h2>
        <p>Below are states where installers are available on our site:</p>
        <div>
        <div class="row">
        <div class="col">
        <ul class="state"><a href="./Alabama">Alabama</a></ul>
        <ul class="state"><a href="./Alaska">Alaska</a></ul>
        <ul class="state"><a href="./Arizona">Arizona</a></ul>
        <ul class="state"><a href="./Arkansas">Arkansas</a></ul>
        <ul class="state"><a href="./California">California</a></ul>
        <ul class="state"><a href="./Colorado">Colorado</a></ul>
        <ul class="state"><a href="./Connecticut">Connecticut</a></ul>
        <ul class="state"><a href="./Delaware">Delaware</a></ul>
        <ul class="state"><a href="./Districtofcolumbia">District of Columbia</a></ul>
        <ul class="state"><a href="./Florida">Florida</a></ul>
        <ul class="state"><a href="./Georgia">Georgia</a></ul>
        <ul class="state"><a href="./Hawaii">Hawaii</a></ul>
        <ul class="state"><a href="./Idaho">Idaho</a></ul>
        <ul class="state"><a href="./Illinois">Illinois</a></ul>
        <ul class="state"><a href="./Indiana">Indiana</a></ul>
        <ul class="state"><a href="./Iowa">Iowa</a></ul>
        <ul class="state"><a href="./Kansas">Kansas</a></ul>
        <ul class="state"><a href="./Kentucky">Kentucky</a></ul>
        <ul class="state"><a href="./Louisiana">Louisiana</a></ul>
        <ul class="state"><a href="./Maine">Maine</a></ul>
        <ul class="state"><a href="./Maryland">Maryland</a></ul>
        <ul class="state"><a href="./Massachusetts">Massachusetts</a></ul>
        <ul class="state"><a href="./Michigan">Michigan</a></ul>
        <ul class="state"><a href="./Minnesota">Minnesota</a></ul>
        <ul class="state"><a href="./Mississippi">Mississippi</a></ul>
        </div>
        <div class="col">
        <ul class="state"><a href="./Missouri">Missouri</a></ul>
        <ul class="state"><a href="./Montana">Montana</a></ul>
        <ul class="state"><a href="./Nebraska">Nebraska</a></ul>
        <ul class="state"><a href="./Nevada">Nevada</a></ul>
        <ul class="state"><a href="./Newhampshire">New Hampshire</a></ul>
        <ul class="state"><a href="./Newjersey">New Jersey</a></ul>
        <ul class="state"><a href="./Newmexico">New Mexico</a></ul>
        <ul class="state"><a href="./Newyork">New York</a></ul>
        <ul class="state"><a href="./Northcarolina">North Carolina</a></ul>
        <ul class="state"><a href="./Northdakota">North Dakota</a></ul>
        <ul class="state"><a href="./Ohio">Ohio</a></ul>
        <ul class="state"><a href="./Oklahoma">Oklahoma</a></ul>
        <ul class="state"><a href="./Oregon">Oregon</a></ul>
        <ul class="state"><a href="./Pennsylvania">Pennsylvania</a></ul>
        <ul class="state"><a href="./Rhodeisland">Rhode Island</a></ul>
        <ul class="state"><a href="./Southcarolina">South Carolina</a></ul>
        <ul class="state"><a href="./Southdakota">South Dakota</a></ul>
        <ul class="state"><a href="./Tennessee">Tennessee</a></ul>
        <ul class="state"><a href="./Texas">Texas</a></ul>
        <ul class="state"><a href="./Utah">Utah</a></ul>
        <ul class="state"><a href="./Vermont">Vermont</a></ul>
        <ul class="state"><a href="./Virginia">Virginia</a></ul>
        <ul class="state"><a href="./Washington">Washington</a></ul>
        <ul class="state"><a href="./Westvirginia">West Virginia</a></ul>
        <ul class="state"><a href="./Wisconsin">Wisconsin</a></ul>
        <ul class="state"><a href="./Wyoming">Wyoming</a></ul>
        </div>
        </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
`;
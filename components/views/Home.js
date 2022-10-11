import html from "html-literal";

export default () => html `
<div class="homePage">
<div class="containter text-center">
<div class="row justify-content-center">
    <div class="col-6">
        <h2>Welcome to InstallerBio!</h2>
        <p>All About Doors and Windows, <a href="">Door and Window Parts </a>and <a href="">Locks and Deadbolts</a> we realized that there might be some customers purchasing door or window parts who have no idea how to install them. That's why this site came into existence.
            <br>
        It is a place for window and door contractors and installers to list their information. Now when you purchase a door part or a window part, you have a place to find someone who will put them in for you. This is a free service.
            <br>
        As an installer, it costs you nothing to list your name, address, website and other details. If you have a site and want to link back to one of our sites, that would be great. You can sign up for your free account <a href="">here</a>
            
            </p>
    </div>
</div>
</div>
</div>
<div class="homePage">
<div class="containter text-center">
<div class="row justify-content-center">
    <div>
        <h2>Browse Window and Door Installers by State</h2>
        <p>Below are states where installers are available on our site:</p>
        <input id="searchbar" onkeyup="search_state()" type="text"
        name="search" placeholder="Search States..">
        <div>
            <div class="row align-items-start">
                <div class="col">
        <ul class="state"><a href="./Alabama">&#128297; Alabama</a></ul>
        <ul class="state"><a href="./Alaska">&#128297; Alaska</a></ul>
        <ul class="state"><a href="./Arizona">&#128297; Arizona</a></ul>
        <ul class="state"><a href="./Arkansas">&#128297; Arkansas</a></ul>
        <ul class="state"><a href="./California">&#128297; California</a></ul>
        <ul class="state"><a href="./Colorado">&#128297; Colorado</a></ul>
        <ul class="state"><a href="./Connecticut">&#128297; Connecticut</a></ul>
        <ul class="state"><a href="./Delaware">&#128297; Delaware</a></ul>
        <ul class="state"><a href="./Districtofcolumbia">&#128297; District of Columbia</a></ul>
        <ul class="state"><a href="./Florida">&#128297; Florida</a></ul>
        </div>
        <div class="col">
        <ul class="state"><a href="./Georgia">&#128297; Georgia</a></ul>
        <ul class="state"><a href="./Hawaii">&#128297; Hawaii</a></ul>
        <ul class="state"><a href="./Idaho">&#128297; Idaho</a></ul>
        <ul class="state"><a href="./Illinois">&#128297; Illinois</a></ul>
        <ul class="state"><a href="./Indiana">&#128297; Indiana</a></ul>
        <ul class="state"><a href="./Iowa">&#128297; Iowa</a></ul>
        <ul class="state"><a href="./Kansas">&#128297; Kansas</a></ul>
        <ul class="state"><a href="./Kentucky">&#128297; Kentucky</a></ul>
        <ul class="state"><a href="./Louisiana">&#128297; Louisiana</a></ul>
        <ul class="state"><a href="./Maine">&#128297; Maine</a></ul>
        </div>
        <div class="col">
        <ul class="state"><a href="./Maryland">&#128297; Maryland</a></ul>
        <ul class="state"><a href="./Massachusetts">&#128297; Massachusetts</a></ul>
        <ul class="state"><a href="./Michigan">&#128297; Michigan</a></ul>
        <ul class="state"><a href="./Minnesota">&#128297; Minnesota</a></ul>
        <ul class="state"><a href="./Mississippi">&#128297; Mississippi</a></ul>
        <ul class="state"><a href="./Missouri">&#128297; Missouri</a></ul>
        <ul class="state"><a href="./Montana">&#128297; Montana</a></ul>
        <ul class="state"><a href="./Nebraska">&#128297; Nebraska</a></ul>
        <ul class="state"><a href="./Nevada">&#128297; Nevada</a></ul>
        <ul class="state"><a href="./Newhampshire">&#128297; New Hampshire</a></ul>
        </div>
        <div class="col">
        <ul><a href="./Newjersey">&#128297; New Jersey</a></ul>
        <ul><a href="./Newmexico">&#128297; New Mexico</a></ul>
        <ul><a href="./Newyork">&#128297; New York</a></ul>
        <ul><a href="./Northcarolina">&#128297; North Carolina</a></ul>
        <ul><a href="./Northdakota">&#128297; North Dakota</a></ul>
        <ul><a href="./Ohio">&#128297; Ohio</a></ul>
        <ul><a href="./Oklahoma">&#128297; Oklahoma</a></ul>
        <ul><a href="./Oregon">&#128297; Oregon</a></ul>
        <ul><a href="./Pennsylvania">&#128297; Pennsylvania</a></ul>
        <ul><a href="./Rhodeisland">&#128297; Rhode Island</a></ul>
        </div>
        <div class="col">
        <ul><a href="./Southcarolina">&#128297; South Carolina</a></ul>
        <ul><a href="./Southdakota">&#128297; South Dakota</a></ul>
        <ul><a href="./Tennessee">&#128297; Tennessee</a></ul>
        <ul><a href="./Texas">&#128297; Texas</a></ul>
        <ul><a href="./Utah">&#128297; Utah</a></ul>
        <ul><a href="./Vermont">&#128297; Vermont</a></ul>
        <ul><a href="./Virginia">&#128297; Virginia</a></ul>
        <ul><a href="./Washington">&#128297; Washington</a></ul>
        <ul><a href="./Westvirginia">&#128297; West Virginia</a></ul>
        <ul><a href="./Wisconsin">&#128297; Wisconsin</a></ul>
        <ul><a href="./Wyoming">&#128297; Wyoming</a></ul>
        </div>
        </div>
        </div>
    </div>
</div>
</div>
</div>
`;
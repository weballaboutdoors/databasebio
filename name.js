function search_name() {
    let input = document.getElementById('searchbarName').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('name');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
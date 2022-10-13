function search_zip() {
    let input = document.getElementById('searchbarZip').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('zip');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
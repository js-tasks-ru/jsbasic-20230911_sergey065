/* function highlight(table) {
  for (let tr of table.children[1].rows) {
    let available = tr.cells[3];
    if (available.hasAttribute("data-available"))
        switch (available.dataset.available) {
            case "true":
                tr.classList.add("available");
                break;
            case "false":
                tr.classList.add("unavailable");
        }
    else  
        tr.hidden = true;
     
    let gender = tr.cells[2].textContent;
    switch (gender) {
        case "m":
            tr.classList.add("male");
            break;
        case "f":
            tr.classList.add("female");
    }

    let age = +tr.cells[1].textContent;

    if (age < 18) tr.style.textDecoration = "line-through";
  }
} */

function highlight(table) {
    let rows = table.querySelector('tbody').querySelectorAll('tr');

    for (let td of rows) {
        if(td.cells[3].getAttribute('data-available') === 'true') {
            td.classList.add("available");
        } else if(td.cells[3].getAttribute('data-available') === 'false') {
            td.classList.add("unavailable");
        } else {
            td.hidden = true;
        }

        /* if(td.cells[2].innerHTML === 'm') {
            td.classList.add("male");
        } else if(td.cells[2].textContent === 'f') {
            td.classList.add("female");
        } */
        switch (td.cells[2].innerHTML) {
            case "m":
                td.classList.add("male");
                break;

            case "f":
                td.classList.add("female");
                break;
            }        

        /* if(Number(td.cells[1].innerHTML) < 18) {
            td.style.textDecoration = 'line-through';
        } */
        +(td.cells[1].innerHTML) < 18 ? td.style.textDecoration = 'line-through' : '';
    }
}
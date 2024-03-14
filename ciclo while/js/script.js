//Stampare sulla pagina (anche brutalmente, basta che si vedano) 
//gli elementi della lista individualmente.

const list = ['Latte','Cacao','Insalata','Carote','Pomodori','Piatti pronti'];

//prendo la ul con id list
let listItem = document.getElementById("list");

let i = 0
//finchè la i è minore della lunghezza dell'array
while(i < list.length) {

    //scorri gli elementi della lista

    //stampo in pagina oogni elemento
    listItem.innerHTML += list[i] + "<br>";

    i++;
}
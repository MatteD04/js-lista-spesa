//Stampare sulla pagina (anche brutalmente, basta che si vedano) 
//gli elementi della lista individualmente.

const list = ['Latte','Cacao','Insalata','Carote','Pomodori','Piatti pronti'];

//prendo la ul con id list
let listItem = document.getElementById("list");

//scorro ogni elemneto dell'array
for(let i = 0; i < list.length; i++) {
    //creo per ognuno una li
    listItem.innerHTML += list[i] + "<br>";
}
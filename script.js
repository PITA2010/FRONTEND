console.log("Loading Javascript.......")


function saveBook(){


let nameBook = document.getElementById("name");
let autorBook = document.getElementById("autor");
let isbnBook = document.getElementById("isbn");
let editionBook = document.getElementById("edition");

let book = {
    name: nameBook.value,
    autor: autorBook.value,
    isbn: isbnBook.value,
    edition: editionBook.value
}

console.log(book);


let url = "http://localhost:8000/api/create";
let params = {
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(book),
}

fetch(url,params).then((response) =>{

    console.log(response);
    console.log(response.json());

    if(response.status == 201){
        alert("Creación Exitosa Libro !!");
    }else{
        alert("Error en la creación de Libro !!");
    }
});

return true;
}


function getBooks(){


    let url = "http://localhost:8000/api/read";
    let params = {
    method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    }

    fetch(url,params).then((response) =>{
        console.log(response);
        console.log(response.json());
    });
    
    return true;
}

function updateBooks(){

    let nameBook = document.getElementById("name");
    let autorBook = document.getElementById("autor");
    let isbnBook = document.getElementById("isbn");
    let editionBook = document.getElementById("edition");

let newbook = {
    name: nameBook.value,
    autor: autorBook.value,
    isbn: isbnBook.value,
    edition: editionBook.value
}

    let url = "http://localhost:8000/api/update";
    let params = {
    
    method: "PUT",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newbook),
    }

    fetch(url,params).then((response) =>{
        console.log(response);
        console.log(response.json());

        if(response.status == 201){
            alert("Actualizacion Exitosa del Libro !!");
        }else{
            alert("Error en la Actualizacion del Libro !!");
        }
    });
    
    return true;
}
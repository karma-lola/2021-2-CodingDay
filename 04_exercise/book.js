var books = [
    {tittle:"Home",
     author:"karma",
     price: "10CHF",
     stock: true
    },
    {tittle:"day",
     author:"Sonam",
     price:"15CHF",
     stock: true
    },
    {tittle:"night",
    author:"lola",
    price:"20CHF",
    stock: true
    }
];

books = books.sort();
console.log(books);
let content = document.querySelector("body");
content.textContent = books.element;
console.log
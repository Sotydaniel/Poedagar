const products = [ 
    {
        id: 1,
        name: "Power Bank"
        image: "https://images.pexels.com/photos/10104284/pexels-photo-10104284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        decription: "Black Power Bank on Wood",
        price: 50.00,
    },
    {
        id: 2,
        name: "Second ID"
        image: "",
        decription: "Second",
        price: 70.00,
    },
    {
        id: 3,
        name: "Third ID"
        image: "",
        decription: "Third",
        price: 80.00,
    },
    {
        id: 4,
        name: "Fourth ID"
        image: "",
        decription: "Fourth",
        price: 90.00,
    },
    {
        id: 5,
        name: "Fifth ID"
        image: "",
        decription: "Fifth",
        price: 20.00,
    },
    {
        id: 6,
        name: "Sixth ID"
        image: "",
        decription: "Sixth",
        price: 70.00,
    },

]

const itemslist = document.getElementById("items-list");
items.forEach(product =>{
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
     <img src = "${product.image}>" alt="${product.name} ">
     <h3>${product.name}</h3>
      <p>${product.description}</p>
     <p><strong>ID:</strong>${product.id}</p>
     <p><strong>Price:</strong>${product.price}</p>
     <a href="cart page/index.html?id=${product.id}">
        <button>Add to cart➕</button>
    </a>
    `;
    itemslist.appendChild(div);

    localStorage.setItem("items", product.name)
    
});
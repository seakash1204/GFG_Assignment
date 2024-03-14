let products = [
  {
    id: "1",
    item: "Shirt",
  },
  {
    id: "2",
    item: "Jeans",
  },
  {
    id: "3",
    item: "T-shirt",
  },
  {
    id: "4",
    item: "Denim Jacket",
  },
  {
    id: "5",
    item: "Casual Shoes",
  },
];

let appContainer = document.getElementById("app");

const showProducts = (products) => {
  for (let product of products) {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.style.display = 'inline'
    h2.innerHTML = product.item;

    let button = document.createElement('button');
    button.setAttribute("data-ID", product.id)
    button.innerText = "Remove";
    
    div.append(h2);
    div.append(button);
    appContainer.append(div);

    button.addEventListener("click", (event) => {
        let itemId = event.target.dataset.id;
        products = products.filter((product) => product.id !== itemId);
        appContainer.innerHTML = "";
        console.log(itemId)
        showProducts(products);
      });
  }
};

showProducts(products);




// let appContainer = document.getElementById("app");
        
//         function showProducts(products) {
//           for (let product of products) {
//             let container = document.createElement("div");
//             let label = document.createElement("span");
//             label.innerText = product.item;
        
//             let button = document.createElement("button");
//             button.setAttribute("data-ID", product.id);
//             button.innerText = "Remove";

//             let button1 = document.createElement("button");
//             button1.setAttribute("dataD", product.id);
//             button1.innerText = "Edit";
        
//             container.appendChild(label);
//             container.appendChild(button1);
//             container.appendChild(button)
//             appContainer.appendChild(container);

//             button.addEventListener("click", (event) => {
//                 let itemId = event.target.dataset.id;
//                 products = products.filter((product) => product.id !== itemId);
//                 appContainer.innerHTML = "";
//                 showProducts(products);
//               });
//           }
//         }
        
//         showProducts(products);
        
        // appContainer.addEventListener("click", (event) => {
        //   let itemId = event.target.dataset.id;
        //   products = products.filter((product) => product.id !== itemId);
        //   appContainer.innerHTML = "";
        //   showProducts(products);
        // });
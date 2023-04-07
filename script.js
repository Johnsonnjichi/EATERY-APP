function renderMenus() {
  fetch("http://localhost:3000/menus")
    .then((res) => res.json())
    .then((menus) => {
      console.log(menus);
      let li = "";

      menus.forEach((menu) => {
        li += `<li>${menu.title}`;
      });
      document.getElementById("menus").innerHTML = li;
      console.log(li);
      let list = document.querySelectorAll("li");
      console.log(list);
      console.log(document.querySelectorAll("li"));
      list.forEach((item) => {
        item.addEventListener("click", () => {
          console.log(item);
          renederSingleMenu(item.textContent, menus);
        });
      });
      
      
    });
    
}
renderMenus();

function renederSingleMenu(menuname, menus) {
  let menu = menus.find((mn) => mn.title === menuname);
  document.getElementById("image").src = menu.image;
  document.getElementById("title").textContent = menu.title;
  document.getElementById("price").textContent = menu.price;
  document.getElementById("orders").textContent = menu.order_capacity - menu.orders_received;

  document.getElementById("place-order");


  document.getElementById("place-order").addEventListener("click", () => {
    let ordersLeft = menu.order_capacity - menu.orders_received;
    if (ordersLeft > 0) {
      menu.orders_received += 1;
      document.getElementById("orders").textContent = ordersLeft - 1;
    } else {
      alert("Sorry,we are out of orders!");
    }
  });

// Get the search input and button elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Add a click event listener to the search button
searchButton.addEventListener("click", () => {
  // Get the search query from the input field
  const searchQuery = searchInput.value.toLowerCase();

  // Filter the menus array to only show items that match the search query
  const filteredMenus = menus.filter((menu) =>
    menu.title.toLowerCase().includes(searchQuery)
  );

  // Update the list of menus to show only the filtered items
  let filteredLi = "";
  filteredMenus.forEach((menu) => {
    filteredLi += `<li>${menu.title}</li>`;
  });
  document.getElementById("menus").innerHTML = filteredLi;
  console.log(filteredLi);
  let filteredList = document.querySelectorAll("li");
  console.log(filteredList);
  console.log(document.querySelectorAll("li"));
  filteredList.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item);
      renederSingleMenu(item.textContent, filteredMenus);
    });
  });
})


// get the like button
  let likeButton = document.getElementById("like-button");
  let likeCount = 0;

//   adding eventlistener to the like button
  likeButton.addEventListener("click", () => {
    likeCount++;
    likeButton.textContent = `Like (${likeCount})`;
  });



  const createMenuButton = document.getElementById("create-menu-button");

createMenuButton.addEventListener("click", () => {
  const menuTitleInput = document.getElementById("menu-title-input");
  const menuImageInput = document.getElementById("menu-image-input");
  const menuPriceInput = document.getElementById("menu-price-input");
  const menuOrderCapacityInput = document.getElementById("menu-order-capacity-input");

  const newMenu = {
    title: menuTitleInput.value,
    image: menuImageInput.value,
    price: menuPriceInput.value,
    order_capacity: menuOrderCapacityInput.value,
    orders_received: 0
  };

  fetch("http://localhost:3000/menus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newMenu)
  })
    .then((res) => res.json())
    .then((menu) => {
      console.log(menu);
      renderMenus();
    })
    .catch((err) => console.log(err));

  menuTitleInput.value = "";
  menuImageInput.value = "";
  menuPriceInput.value = "";
  menuOrderCapacityInput.value = "";
});


}



  


  

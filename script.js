function renderMenus() {
  fetch("http://localhost:3000/menus")
    .then((res) => res.json())
    .then((menus) => {
      console.log(menus);
      let li = "";

      menus.forEach((menu) => {
        li += `<li>${menu.title}</li>`;
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
  let menu = menus.find((menu) => menu.title === menuname);
  document.getElementById("image").src = menu.image;
  document.getElementById("title").textContent = menu.title;
  document.getElementById("price").textContent = menu.price;
}

const defaultdisplay = document.querySelector('#menus li')
if(defaultdisplay){
    defaultdisplay.click();
}

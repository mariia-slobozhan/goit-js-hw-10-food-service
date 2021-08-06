import menu from "../menu.json";
import menuCardTmp from "../templates/menu-markup.hbs"

const menuList = document.querySelector(".js-menu")

const markUp = menuCardTmp(menu)

menuList.insertAdjacentHTML("beforeend", markUp )
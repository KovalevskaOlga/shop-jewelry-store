import jewelleries from "./data-base/jewelleries.json"
import createList from "./templates/jewellery.hbs"
console.log(createList({jewelleries}))
console.log("test")
const body = document.querySelector("body")
body.innerHTML = createList(jewelleries);
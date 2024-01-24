import { create_about, create_menu, create_contact } from "./create_pages"

const switch_tab = () => {
    const about = document.querySelector("#head_1")
    const menu = document.querySelector("#head_2")
    const contact = document.querySelector("#head_3")

    about.addEventListener("click", function() {
        clear_content();
        create_about();
    })

    menu.addEventListener("click", function() {
        clear_content();
        create_menu();
    })

    contact.addEventListener("click", function() {
        clear_content();
        create_contact();
    })
}

const clear_content = () => {
    const content = document.querySelector("#content")
    const page_content = document.querySelector("#page_content")
    content.removeChild(page_content)
}

export default switch_tab
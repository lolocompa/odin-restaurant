const content = document.querySelector("#content");
const page_content = document.createElement("div")
page_content.id = "page_content"

const create_about = () => {
    page_content.innerHTML = `            <div class="about_page">
    <h1>One piece restraurant</h1>
    <h2>Welcome to the one piece restaurant</h2>
    <h5>here you can taste the finest food coming straight from the one piece world</h5>
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDFqbzc4MHFhZzE4ZzA3MmpseWJiNnQ5bnh4cXYxamJhZ3h3cXpidCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iixdMr6cSURW/giphy.gif" alt="">
    </div>`;
    content.appendChild(page_content)

}

const create_menu = () => {
    page_content.innerHTML = `           <div class="menu_page">
    <div class="image_container">
        <img src="" alt="">
    </div>
    <div class="image_container">
        <img src="https://cdn.shopify.com/s/files/1/0561/3553/files/10_dc5f13cc-b9af-48d7-b121-2ae85a8b2f96.jpg?v=1659524371" alt="">
    </div>
    <div class="image_container">

    </div>
    <div class="image_container">

    </div>
    </div>
    <div class="all_titles">
    <h1 class="dish">luffy's meat on bone</h1>
    <h1 class="dish">sanji's special seafood rice</h1>
    <h1 class="dish">G-8 rice and curry</h1>
    <h1 class="dish">nami's potato pille</h1>
    </div>`;
    content.appendChild(page_content)

}

const create_contact = () => {
    page_content.innerHTML = `            <div class="create_contact">
    <h1>Conatct us</h1>
    <div class="info">
        <h2>One piece restaurant</h2>
        <h2>* +63912345678</h2>
        <h2>one_piece@gmail.com</h2>
    </div>
    </div>`;
    content.appendChild(page_content)

}



export {create_about, create_menu, create_contact}
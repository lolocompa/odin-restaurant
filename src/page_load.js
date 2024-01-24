const content = document.querySelector("#content");

const header = () => {
    const create_header = document.createElement("header")
    create_header.innerHTML = `            
        <div class="logo">
        <img src="https://1000marcas.net/wp-content/uploads/2022/10/One-Piece-Logo.png"  alt="">
        </div>
        <div class="all_buttons">
            <button id="head_1" class="head_btn">Home</button>
            <button id="head_2" class="head_btn">Menu</button>
            <button id="head_3" class="head_btn">Conatct</button>
        </div>`
    content.appendChild(create_header)
};

const welcome = () => {
    const page_content = document.createElement("div")
    page_content.id = "page_content"
    page_content.innerHTML = `
        <div class="welcome">
            <h1>Welcome to the one piece restaurant</h1>
        </div>`

    content.appendChild(page_content)
}

export {  header, welcome  }

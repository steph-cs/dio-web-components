class CardNews extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: "open"})
        //shadow.innerHTML = "<h1>Hello world!</h1>"
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card__left")

        const autor = document.createElement("span")
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const linkTitle = document.createElement("a")
        linkTitle.textContent = this.getAttribute("newsTitle")
        linkTitle.href = this.getAttribute("url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("newsContent")

        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card__right")

        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute("src") || "assets/img/defaultProfile.jpg"
        newsImage.alt = this.getAttribute("alt") || "Foto Noticia"

        //cardleft
        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        //cardRight
        cardRight.appendChild(newsImage)

        //root
        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        return componentRoot
    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: content-box;
        }
        
        .card{
            display: flex;
            justify-content: space-between;
            margin:20px 0;
            padding:15px;
            border: 1px solid gray;
            box-shadow: black 0 0 5px;
            height: 150px;
            width: 350px;
        }
        .card__left{
            width: 50%;
        }
        img{
            width: 150px;
            height: 150px;
        }
        `
        return style
    }
}

customElements.define("card-news", CardNews)
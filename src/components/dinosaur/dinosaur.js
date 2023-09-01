class dinosaur extends HTMLElement {
    properties = {}
    selected = "No seleccionado"

    static get observedAttributes() {
        return ["name", "type", "size", "period"]
    }

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.mount()
    }

    mount() {
        this.render()
        const btn = this.shadowRoot.querySelector("button")
        btn.addEventListener("click", ()=>{
            if (this.selected === "No seleccionado") {
                this.selected = "Seleccionado"
            } else {
                this.selected = "No seleccionado"
            }
            
            this.mount()
        })
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            case "name":
                this.properties.name = newValue
                break;
            case "type":
                this.properties.type = newValue
                break;
            case "size":
                this.properties.size = newValue
                break;
            case "period":
                this.properties.period = newValue
                break;
            default:
                break;
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/src/components/dinosaur/dinosaur.css">    

            <div class="userDinosaur">
                <h1>${this.properties.name}</h1>
                <h2>${this.properties.type}</h2>
                <h3>${this.properties.size}</h3>
                <h4>${this.properties.period}</h4>
                <button>Boton</button>

                <p>${this.selected}</p>
            </div>
        `
    }
}

customElements.define("user-dinosaur", dinosaur)

export default dinosaur
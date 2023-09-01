import dinosaursData from "./dinosaurs.js"
import "./src/components/dinosaur/dinosaur.js"

console.log(dinosaursData)

class appContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const preDinosaurs = dinosaursData.map( (dinosaur)=>{return `<user-dinosaur name="${dinosaur.name}" type="${dinosaur.type}" size="${dinosaur.size}" period="${dinosaur.period}"></user-dinosaur>`} )
        const dinosaursJoined = preDinosaurs.join("")
        this.shadowRoot.innerHTML = `
            ${dinosaursJoined}
        `
    }
}

customElements.define("app-container", appContainer)
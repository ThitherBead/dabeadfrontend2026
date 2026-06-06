class PopupInfo extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallBack(){
        const wrapper = document.createElement("span")
        wrapper.setAttribute("class", "wrapper")

        const icon = document.createElement("span")
        icon.setAttribute("class", "icon")
        icon.setAttribute("tabIndex", "0")

        const info = document.createElement("span")
        icon.setAttribute("class", "info")

        const text = this.getAttribute("data-text")
        info.textContent = text

        let imgurl

        if (this.hasAttribute("img")){
            imgurl = this.getAttribute("img")
        } else {
            imgurl = "defeault.png"
        }

        const img = document.createElement("img")
        img = 
    }
}
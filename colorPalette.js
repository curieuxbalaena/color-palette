const refreshBtn = document.querySelector(".refresh-btn")
const container = document.querySelector(".container")
const maxColors = 32

const generatePalette = () => {
    container.innerHTML = ""
    for(let i = 0; i<maxColors;i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6,'0')}`
        const color = document.createElement("li")
        color.classList.add("color")
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>`

        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color)
        
    } 
}


const copyColor = (elem, hexValue) => {
   const colorElement = elem.querySelector(".hex-value")
   navigator.clipboard.writeText(hexValue).then(() => {
        colorElement.innerText = "copied"
   })
   
   setTimeout(() => colorElement.innerText = hexValue,1000)
   }

refreshBtn.addEventListener("click", generatePalette)
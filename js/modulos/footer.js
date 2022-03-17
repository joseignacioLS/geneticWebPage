import { createElement } from "../functions/basic.js"

const appendFooter = (footer) => {
  footer.appendChild(
    createElement(
      "p",
      ["footer--text"],
      ["Cyanobacterial Genetics Alicante - Universidad de Alicante"]
    )
  )
}

export { appendFooter }

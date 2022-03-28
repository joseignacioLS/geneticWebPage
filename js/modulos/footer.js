import { createElement } from "../functions/basic.js?ver=2"

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

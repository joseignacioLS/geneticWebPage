import { createElement } from "../functions/basic.js"

const appendNav = (nav, pages) => {
  let sectionContainer1 = createElement(
    "section",
    ["nav--logos"],
    [
      createElement("img", [], [], { src: "./imagenes/basicos/logo-cg.png" }),
      createElement(
        "section",
        ["nav--otherlogos"],
        [
          createElement("img", [], [], {
            src: "./imagenes/basicos/logo-minic.jpg",
          }),
          createElement("img", [], [], {
            src: "./imagenes/basicos/logo-generalitat.png",
          }),
          createElement("img", [], [], {
            src: "./imagenes/basicos/logo-ua.jpg",
          }),
        ]
      ),
    ]
  )

  let sectionContainer2 = createElement("section", ["nav--bar"], [])
  for (let page in pages) {
    let target = "_self"
    if (page === "Teaching") target = "_blank"
    sectionContainer2.appendChild(
      createElement("a", ["nav--link"], [page], {
        href: pages[page],
        target: target,
      })
    )
  }

  nav.appendChild(sectionContainer1)
  nav.appendChild(sectionContainer2)
}

export { appendNav }

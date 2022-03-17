import { createElement } from "../functions/basic.js"

const workWithUs = (main) => {
  let sectionContainer = createElement(
    "div",
    ["work--section"],
    [
      createElement(
        "section",
        [],
        [
          createElement(
            "p",
            ["work--descr"],
            [
              "If you are interested in joining the group as Ph.D. student or Post-doc please send your C.V. and research interests to <b>contrera@ua.es</b>",
            ]
          ),
        ]
      ),
      createElement("img", [], [], {
        src: "./imagenes/basicos/workwithus.jfif",
      }),
    ]
  )

  main.appendChild(
    createElement("h1", ["section--title"], ["Do you want to work with us?"])
  )
  main.appendChild(sectionContainer)
}

export { workWithUs }

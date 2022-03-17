import { createElement } from "../functions/basic.js"

const index = (main) => {
  //ANUNCIO
  let ad = createElement(
    "section",
    ["anuncio--SI"],
    [
      createElement(
        "h1",
        [],
        [
          "The <em>Molecular Genetics of Cyanobacteria</em> Life Special Issue is open to submissions!",
        ]
      ),
      createElement(
        "p",
        [],
        [
          "More information at Life's webpage <br>",
          createElement(
            "a",
            [],
            [
              createElement("img", [], [], {
                src: "./imagenes/otros/life-logo.webp",
              }),
            ],
            {
              href: "https://www.mdpi.com/journal/life/special_issues/genetics_cyanobacteria",
            }
          ),
        ]
      ),
    ]
  )

  //PRESENTACION
  let sectionContainer1 = createElement(
    "section",
    ["index--welcome"],
    [
      "<br>",
      createElement(
        "p",
        [],
        [
          "Our research focus on the molecular mechanisms that allow bacteria to sense and adapt to environmental changes. We are particularly interested in regulatory interaction networks.",
        ]
      ),
      "<br>",
      createElement(
        "p",
        [],
        [
          "Most of our work is carried out with a model system, the fresh water cyanobacterium <i>Synechococcus elongatus PCC 7942</i>",
        ]
      ),
    ]
  )

  let sectionContainer2 = createElement(
    "section",
    ["index--images"],
    [
      createElement("img", [], [], {
        src: "./imagenes/basicos/foto-home01.jpg",
      }),
      createElement("img", [], [], {
        src: "./imagenes/basicos/foto-home02.jpg",
      }),
    ]
  )

  main.appendChild(ad)
  main.appendChild(
    createElement("h1", ["section--title"], ["Welcome to our website"])
  )
  main.appendChild(sectionContainer1)
  main.appendChild(sectionContainer2)
}

export { index }

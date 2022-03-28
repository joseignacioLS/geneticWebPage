import { pubList } from "../data/pub-list.js?ver=2"
import { createElement, decorateTitle } from "../functions/basic.js?ver=2"

const publications = (main) => {
  let sectionContainer = createElement(
    "section",
    ["pub--list"],
    [
      ...pubList.map((ele) => {
        return createElement(
          "article",
          ["publication"],
          [
            createElement(
              "section",
              ["pub--authors"],
              [
                createElement("img", [], [], {
                  src: "./imagenes/basicos/bullet-ver.jpg",
                }),
                createElement("p", [], [`${ele.authors} (${ele.year})`]),
              ]
            ),
            createElement("p", ["pub--title"], [`${decorateTitle(ele.title)}`]),
            createElement("p", ["pub--refe"], [ele.refe]),
            createElement(
              "a",
              [],
              [
                createElement("img", [], [], {
                  src: "./imagenes/basicos/bot-read-public.jpg",
                }),
              ],
              { href: ele.url, target: "_blank" }
            ),
          ]
        )
      }),
    ]
  )

  main.appendChild(
    createElement("h1", ["section--title"], ["Our Publications"])
  )
  main.appendChild(sectionContainer)
}

export { publications }

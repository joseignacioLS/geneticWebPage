import { collaborators } from "../data/collaborators.js?ver=2"
import { createElement } from "../functions/basic.js?ver=2"

const network = (main) => {
  let sectionContainer = createElement(
    "section",
    ["col--list"],
    [
      ...collaborators.map((ele) => {
        return createElement(
          "article",
          ["collaborator"],
          [
            createElement("p", ["coll--name"], [`${ele.title} ${ele.name}`]),
            createElement("p", ["coll--country"], [ele.country]),
            createElement("p", [], [ele.aff]),
            createElement(
              "a",
              ["coll--link"],
              [
                createElement("img", [], [], {
                  src: "./imagenes/basicos/bot-info.jpg",
                }),
              ],
              { href: ele.url, target: "_blank" }
            ),
          ]
        )
      }),
    ]
  )

  main.appendChild(createElement("h1", ["section--title"], ["Our Network"]))
  main.append(sectionContainer)
}

export { network }

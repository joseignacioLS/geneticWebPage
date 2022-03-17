import { createElement } from "../functions/basic.js"
import { resourceList } from "../data/resources-list.js"

const resources = (main) => {
  let sectionContainer = createElement(
    "div",
    ["container--resources"],
    [
      ...resourceList.map((resource) => {
        return createElement(
          "article",
          [],
          [
            createElement("a", [], [resource.name], { href: resource.url }),
            createElement("p", [], [resource.descr]),
            createElement("img", [], [], { src: resource.img }),
          ]
        )
      }),
    ]
  )

  main.appendChild(createElement("h1", ["section--title"], ["Resources"]))

  main.appendChild(sectionContainer)
}

export { resources }

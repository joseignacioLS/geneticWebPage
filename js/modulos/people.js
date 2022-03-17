import {
  createElement,
  removeDuplicates,
  capitalizeFirstLetter,
} from "../functions/basic.js"
import { peopleList } from "../data/people-list.js"

const people = (main, filter = "All", force = false) => {
  main.innerHTML = ""

  let data = window.location.href.split("#")
  if (force) {
    window.location.href = window.location.href.split("#")[0] + `#${filter}`
  } else if (data.length === 2) {
    filter = data[1]
  }
  filter = filter.replace("%20", " ")

  let categories = [
    "All",
    ...removeDuplicates(peopleList.map((ele) => ele.key)),
  ]

  //second Nav
  main.appendChild(
    createElement(
      "section",
      ["nav--bar", "second--navBar"],
      [
        ...categories.map((cat) => {
          let span = createElement("span", ["nav--link"], [cat])
          span.addEventListener("click", (e) => people(main, cat, true))
          return span
        }),
      ]
    )
  )

  //esta es la seccion de esta pagina
  let sectionContainer = createElement("section", ["people--section"], [])

  //si no hay filtro aplicado enseño la foto del grupo y una lista de gente por categorias
  if (filter.toLowerCase() === "all") {
    //foto
    let im = document.createElement("img")
    im.className = "img--all"
    im.src = "./imagenes/people/grupo.jpg?ver=1"
    main.appendChild(im)
  } else {
    peopleList
      .filter((ele) => ele.key.toLowerCase() === filter.toLowerCase())
      .forEach((ele) => {
        sectionContainer.appendChild(
          createElement(
            "article",
            ["people--card"],
            [
              createElement(
                "section",
                ["people--card--img"],
                [createElement("img", [], [], { src: ele.pic })]
              ),
              createElement(
                "section",
                ["people--card--info"],
                [
                  createElement("p", ["people--card--name"], [ele.name]),
                  createElement("p", ["people--card--title"], [ele.title]),
                  createElement(
                    "p",
                    ["people--card--tlf"],
                    ["Telephone: ", ele.name]
                  ),
                  createElement(
                    "p",
                    ["people--card--mail"],
                    ["Email: ", ele.name]
                  ),
                  ...ele.desc.map((merito) =>
                    createElement("li", [], [merito])
                  ),
                ]
              ),
            ]
          )
        )
      })
  }

  main.appendChild(
    createElement(
      "h1",
      ["section--title"],
      [filter.toLowerCase() !== "all" ? capitalizeFirstLetter(filter) : ""]
    )
  )
  main.append(sectionContainer)
}

export { people }

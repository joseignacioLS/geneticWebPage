import { resourceList } from "./resources-list.js"
import { collaborators } from "./collaborators.js"
import { peopleList } from "./people-list.js"
import { pubList, decorateTitle } from "./pub-list.js"

const pages = {
  Home: "./index.htm",
  Research: "./research.htm",
  People: "./people.htm",
  Publications: "./publications.htm",
  Teaching: "https://dfgm.ua.es/en/genetics/teaching/genetics-teaching.html",
  Network: "./network.htm",
  "Work With Us": "./workwithus.htm",
  Contact: "./contact.htm",
  Resources: "./resources.htm",
}

const nav = document.getElementsByTagName("nav")[0]
const main = document.getElementsByTagName("main")[0]
const footer = document.getElementsByTagName("footer")[0]

function appendNav() {
  let sectionContainer1 = createElement(
    "section",
    ["nav--logos"],
    [
      `<img src="./imagenes/basicos/logo-cg.png">`,
      createElement(
        "section",
        ["nav--otherlogos"],
        [
          `<img src="./imagenes/basicos/logo-minic.jpg">`,
          `<img src="./imagenes/basicos/logo-generalitat.png">`,
          `<img src="./imagenes/basicos/logo-ua.jpg">`,
        ]
      ),
    ]
  )

  let sectionContainer2 = createElement("section", ["nav--bar"], [])
  for (let page in pages) {
    sectionContainer2.innerHTML += `<a class="nav--link" href="${pages[page]}">${page}</a>`
  }

  nav.appendChild(sectionContainer1)
  nav.appendChild(sectionContainer2)
}

function appendFooter() {
  footer.appendChild(
    createElement(
      "p",
      ["footer--text"],
      ["Cyanobacterial Genetics Alicante - Universidad de Alicante"]
    )
  )
}

function index() {
  appendNav()
  appendFooter()

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
          `More information at Life's webpage <br><a href="https://www.mdpi.com/journal/life/special_issues/genetics_cyanobacteria" target="_blank"><img src="./imagenes/otros/life-logo.webp"</a>`,
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
      "<img src='./imagenes/basicos/foto-home01.jpg'>",
      "<img src='./imagenes/basicos/foto-home02.jpg'>",
    ]
  )

  main.appendChild(ad)
  main.appendChild(
    createElement("h1", ["section--title"], ["Welcome to our website"])
  )
  main.appendChild(sectionContainer1)
  main.appendChild(sectionContainer2)
}

function research() {
  appendNav()
  appendFooter()

  let sectionContainer = createElement(
    "section",
    ["research--lines"],
    [
      "<br>",
      createElement(
        "p",
        [],
        [
          "<strong>Cyanobacteria</strong> are the simplest organisms performing <strong>oxygenic photosynthesis</strong>. They must adapt their metabolic processes to important environmental challenges, like those imposed by the succession of days and nights. However, the regulatory mechanisms behind the versatility and environmental adaptations of cyanobacteria are largely unknown, despite their enormous <strong>ecological and biotechnological importance</strong>. Since cyanobacteria are the ancestors of plant chloroplasts, their study is also important to <strong>understand life on Earth</strong>. Some cyanobacterial proteins have close relatives in chloroplasts, and many others are found exclusively in the cyanobacterial phylum.",
        ]
      ),
      "<br>",
      createElement(
        "div",
        ["research--img"],
        [
          "<img src='./imagenes/basicos/research-02.png'>",
          createElement(
            "span",
            ["caption"],
            [
              "Liquid culture of <i>S. elongatus</i>, showing a zoom-in picture of the cells (bright-field and confocal microscopy)",
            ]
          ),
        ]
      ),
      createElement(
        "p",
        [],
        [
          "We are interested in understanding <strong>processes and regulatory mechanisms</strong> that allow cyanobacteria to inhabit most illuminated ecosystems and play essential roles in the carbon and nitrogen cycles. To this goal we are concentrating efforts in the characterization of the complex signaling network involving the unique protein <strong>PipX</strong> (for PII-interacting protein X), which was identified as a component of the <strong>nitrogen regulation network</strong> in <i>Synechococcus elongatus PCC7942</i>. We are using this cyanobacterium, amenable to genetic disection, to connect the wealth of genomic information to the particular features of cyanobacterial cells, for which we have recently developed a <a href='https://dfgm.ua.es/es/cyanobacterial-genetics/dclg/index.htm'>Cyanobacterial Linked Genome</a>, that uses as reference the gene set of <i>S. elongatus</i>.",
        ]
      ),
      "<br>",
      createElement(
        "div",
        ["research--img"],
        [
          "<img src='./imagenes/basicos/research-03.png'>",
          createElement(
            "span",
            ["caption"],
            [
              "Model for the transcriptional regulation of the PipX regulon. The proteins PipX, PII (signal transduction), NtcA (transcriptional factor), PipY (PLP binding protein) and at least another transcriptional factor (hypothetically PlmA) interact physically or modulate the formation of other complexes in response to different effectors.",
            ]
          ),
        ]
      ),
    ]
  )
  main.appendChild(
    createElement(
      "h1",
      ["section--title"],
      ["Interation networks and functional genomics in cyanobacteria"]
    )
  )
  main.appendChild(sectionContainer)
}

function publications() {
  appendNav()
  appendFooter()

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
                `<img src='./imagenes/basicos/bullet-ver.jpg'><p>${ele.authors} (${ele.year})</p>`,
              ]
            ),
            createElement("p", ["pub--title"], [`${decorateTitle(ele.title)}`]),
            createElement("p", ["pub--refe"], [ele.refe]),
            `<a href='${ele.url}' target='_blank'><img src='./imagenes/basicos/bot-read-public.jpg'></a>`,
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

function network() {
  appendNav()
  appendFooter()

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
            `<a class='coll--link' href='${ele.url}' target='J_blank'><img src='./imagenes/basicos/bot-info.jpg'></a>`,
          ]
        )
      }),
    ]
  )

  main.appendChild(createElement("h1", ["section--title"], ["Our Network"]))
  main.append(sectionContainer)
}

function workWithUs() {
  appendNav()
  appendFooter()

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
      "<img src='./imagenes/basicos/workwithus.jfif'>",
    ]
  )

  main.appendChild(
    createElement("h1", ["section--title"], ["Do you want to work with us?"])
  )
  main.appendChild(sectionContainer)
}

function contact() {
  appendNav()
  appendFooter()

  let sectionContainer = createElement(
    "div",
    ["container--contact"],
    [
      createElement(
        "section",
        [],
        [
          createElement(
            "p",
            [],
            ["Dpto. Fisiología, Genética y Microbiología."]
          ),
          createElement("p", [], ["Pabellón 12"]),
          createElement("p", [], ["Universidad de Alicante"]),
          "<a href='https://web.ua.es/en/universidad-alicante/get-to-know-the-campus.html' target='_blank'><img src='./imagenes/basicos/bot-campus.jpg'></a>",
          createElement(
            "p",
            ["caption"],
            [
              `Carretera de San Vicente del Raspeig s/n
                        03690 San Vicente del Raspeig (Alicante)
                        fax (+34) 965 909 569`,
            ]
          ),
        ]
      ),
      createElement(
        "section",
        [],
        [
          `
                <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3127.378242201547!2d-0.5132099!3d38.3865026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236bbaba189a9%3A0x7da3bc67c687893f!2sEdificio+12+-+Pabellon+Universitario+12%2C+Universidad+de+Alicante%2C+03690+San+Vicente+del+Raspeig%2C+Alicante!5e0!3m2!1sen!2ses!4v1419242111570'></iframe>
                `,
        ]
      ),
    ]
  )

  main.appendChild(createElement("h1", ["section--title"], ["Contact"]))
  main.appendChild(sectionContainer)
}

function resources() {
  appendNav()
  appendFooter()

  let sectionContainer = createElement(
    "div",
    ["container--resources"],
    [
      ...resourceList.map((resource) => {
        return createElement(
          "article",
          [],
          [
            `<a href='${resource.url}'>${resource.name}</a>`,
            `<p>${resource.descr}</p>`,
            `<img src='${resource.img}'>`,
          ]
        )
      }),
    ]
  )

  main.appendChild(createElement("h1", ["section--title"], ["Resources"]))

  main.appendChild(sectionContainer)
}

function removeDuplicates(arr) {
  let arr2 = []
  arr.forEach((ele) => {
    if (arr2.includes(ele)) return
    arr2.push(ele)
  })
  return arr2
}

function people(extraInfo, force = false) {
  nav.innerHTML = ""
  main.innerHTML = ""
  appendNav()
  appendFooter()

  let categories = [
    "All",
    ...removeDuplicates(peopleList.map((ele) => ele.key)),
  ]

  //second Nav
  nav.appendChild(
    createElement(
      "section",
      ["nav--bar", "second--navBar"],
      [
        ...categories.map((cat) => {
          let span = createElement("span", ["nav--link"], [cat])
          span.addEventListener("click", (e) => {
            return loadPage(
              window.location.href + `?filter=${cat.toLowerCase()}`
            )
          })
          return span
        }),
      ]
    )
  )

  //esta es la seccion de esta pagina
  let sectionContainer = createElement("section", ["people--section"], [])

  //si no hay filtro aplicado enseño la foto del grupo y una lista de gente por categorias
  if (extraInfo.filter === "all") {
    //foto
    let im = document.createElement("img")
    im.className = "img--all"
    im.src = "./imagenes/people/grupo.jpg?ver=1"
    main.appendChild(im)
  } else {
    peopleList
      .filter((ele) => ele.key.toLowerCase() === extraInfo.filter)
      .forEach((ele) => {
        sectionContainer.appendChild(
          createElement(
            "article",
            ["people--card"],
            [
              createElement(
                "section",
                ["people--card--img"],
                [`<img src="${ele.pic}">`]
              ),
              createElement(
                "section",
                ["people--card--info"],
                [
                  `<p class="people--card--name">${ele.name}</p>`,
                  `<p class="people--card--title">${ele.title}</p>`,
                  `<p class="people--card--tlf">Telephone: ${ele.tlf}</p>`,
                  `<p class="people--card--mail">Email: ${ele.mail}</p>`,
                  ...ele.desc.map((merito) => `<li>${merito}</li>`),
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
      [extraInfo.filter !== "all" ? extraInfo.filter : ""]
    )
  )
  main.append(sectionContainer)
}

function createElement(type, classNames, content) {
  let ele = document.createElement(type)
  classNames.forEach((c) => ele.classList.add(c))
  content.forEach((c) => {
    if (typeof c === "string") ele.innerHTML += c
    if (typeof c === "object") ele.appendChild(c)
  })
  return ele
}

const loadPage = (url = "") => {
  let baseUrl = url === "" ? window.location.href : url

  let urlData = baseUrl.split("/").pop().toLowerCase()
  console.log(urlData)

  let currentPage = urlData.split("?")[0]
  let objInfo = {
    filter: "all",
  }

  if (urlData.split("?").length > 1) {
    urlData
      .split("?")[1]
      .split("&")
      .map((pair) => {
        return pair.split("=").map((ele) => ele.replace("%20", " "))
      })
      .forEach((ele) => {
        return (objInfo[ele[0]] = ele[1])
      })
  }

  console.log(currentPage, objInfo)

  switch (currentPage) {
    case "index.htm":
      index(objInfo)
      break
    case "research.htm":
      research(objInfo)
      break
    case "people.htm":
      people(objInfo)
      break
    case "publications.htm":
      publications(objInfo)
      break
    case "network.htm":
      network(objInfo)
      break
    case "workwithus.htm":
      workWithUs(objInfo)
      break
    case "contact.htm":
      contact(objInfo)
      break
    case "resources.htm":
      resources(objInfo)
      break
    default:
      index(objInfo)
  }
}

loadPage()

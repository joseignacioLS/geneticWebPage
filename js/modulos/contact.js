import { createElement } from "../functions/basic.js"

const contact = (main) => {
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
          createElement(
            "a",
            [],
            [
              createElement("img", [], [], {
                src: "./imagenes/basicos/bot-campus.jpg",
              }),
            ],
            {
              href: "https://web.ua.es/en/universidad-alicante/get-to-know-the-campus.html",
              target: "_blank",
            }
          ),
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
          createElement("iframe", [], [], {
            src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3127.378242201547!2d-0.5132099!3d38.3865026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6236bbaba189a9%3A0x7da3bc67c687893f!2sEdificio+12+-+Pabellon+Universitario+12%2C+Universidad+de+Alicante%2C+03690+San+Vicente+del+Raspeig%2C+Alicante!5e0!3m2!1sen!2ses!4v1419242111570",
          }),
        ]
      ),
    ]
  )

  main.appendChild(createElement("h1", ["section--title"], ["Contact"]))
  main.appendChild(sectionContainer)
}

export { contact }

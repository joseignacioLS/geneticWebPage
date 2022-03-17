import { appendNav } from "./modulos/nav.js"
import { index } from "./modulos/index.js"
import { appendFooter } from "./modulos/footer.js"
import { research } from "./modulos/research.js"
import { publications } from "./modulos/publications.js"
import { network } from "./modulos/network.js"
import { workWithUs } from "./modulos/workwithus.js"
import { contact } from "./modulos/contact.js"
import { resources } from "./modulos/resources.js"
import { people } from "./modulos/people.js"

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

const loadPage = () => {
  const url = window.location.href.split("/").pop().toLowerCase()
  let currentPage = url.split("#")[0]
  let additionalUrl = url.split("#")[1] ?? "All"
  additionalUrl = additionalUrl.replace("%20", " ")

  nav.innerHTML = ""
  main.innerHTML = ""
  footer.innerHTML = ""

  appendNav(nav, pages)
  appendFooter(footer)

  switch (currentPage) {
    case "index.htm":
      index(main)
      break
    case "research.htm":
      research(main)
      break
    case "people.htm":
      people(main, additionalUrl, true)
      break
    case "publications.htm":
      publications(main)
      break
    case "network.htm":
      network(main)
      break
    case "workwithus.htm":
      workWithUs(main)
      break
    case "contact.htm":
      contact(main)
      break
    case "resources.htm":
      resources(main)
      break
    default:
      index(main)
  }
}

loadPage()

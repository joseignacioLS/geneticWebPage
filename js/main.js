import { appendNav } from "./modulos/nav.js?ver=2"
import { index } from "./modulos/index.js?ver=2"
import { appendFooter } from "./modulos/footer.js?ver=2"
import { research } from "./modulos/research.js?ver=2"
import { publications } from "./modulos/publications.js?ver=2"
import { network } from "./modulos/network.js?ver=2"
import { workWithUs } from "./modulos/workwithus.js?ver=2"
import { contact } from "./modulos/contact.js?ver=2"
import { resources } from "./modulos/resources.js?ver=2"
import { people } from "./modulos/people.js?ver=2"

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
  let currentPage = url.split("?")[0]
  let additionalUrl = url.split("?")[1] ?? "filter:All"
  additionalUrl = additionalUrl.replace("%20", " ")

  let urlOptions = {}

  additionalUrl.split("&").forEach(ele => {
    let [key, value] = ele.split(":")
    urlOptions[key] = value
  })


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
      people(main, urlOptions.filter)
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

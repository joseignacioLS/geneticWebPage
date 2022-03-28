import { cursives } from "../data/italic-words.js?ver=2"

const createElement = (type, classNames, content, attrs = {}) => {
  let ele = document.createElement(type)
  classNames.forEach((c) => ele.classList.add(c))
  for (let attr in attrs) {
    ele[attr] = attrs[attr]
  }
  content.forEach((c) => {
    if (typeof c === "string") ele.innerHTML += c
    if (typeof c === "object") ele.appendChild(c)
  })
  return ele
}

const removeDuplicates = (arr) => {
  let arr2 = []
  arr.forEach((ele) => {
    if (arr2.includes(ele)) return
    arr2.push(ele)
  })
  return arr2
}

const capitalizeFirstLetter = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return (
        word[0].toUpperCase() + [...word].splice(1, word.length - 1).join("")
      )
    })
    .join(" ")
}

const decorateTitle = (title) => {
  cursives.map((cur) => {
    let rg = new RegExp("(" + cur + ")")
    title = title.replace(rg, "<i>$1</i>")
  })
  return title
}

export { createElement, removeDuplicates, capitalizeFirstLetter, decorateTitle }

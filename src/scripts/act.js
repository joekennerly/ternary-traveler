console.log("act loaded")

export const act = {
  init() {
    return "hello"
  },
  select(html) {
    document.querySelector(html)
  },
  render(container, component) {
    document.querySelector(container).innerHTML = component
  },
  plus(container, component) {
    document.querySelector(container).innerHTML += component
  }
}
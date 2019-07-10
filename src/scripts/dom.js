console.log("dom loaded")

import { comp } from "./comp.js"
import { act } from "./act.js"

export const dom = {
  init() {
    act.render("#container", comp.init())
    this.addForm()
    this.addList()
  },
  addForm() {
    act.render("#form-container", comp.form())
  },
  addList() {
    act.render("#list-container", comp.list())
  }
}


console.log("dom loaded")

import { comp } from "./comp.js"
import { act } from "./act.js"
import { API } from "./api.js";

export const dom = {
  init() {
    act.render("#container", comp.init())
    this.addForm()
    this.addList()
    this.button()
  },
  addForm() {
    API.get("places").then(places => {
      places.forEach(place => {
        act.plus("#list-container", comp.place(place))
      })
    })
    act.render("#form-container", comp.form())
  },
  addList() {
    API.get("interests").then((interests) => {
      interests.forEach(element => {
        console.log(element.placeId)
        if (element.placeId === 1) {
          act.plus("#points-1", comp.list(element))
        }
        else if (element.placeId === 2) {
          act.plus("#points-2", comp.list(element))
        }
        else if (element.placeId === 3) {
          act.plus("#points-3", comp.list(element))
        }
      })
    })
  },
  button() {
    act.select("#container").addEventListener("click", event => {
      //POST
      if (event.target.id.startsWith("form-add")) {
        //save values
        let obj = {
          name: act.select("#form-name").value,
          placeId: act.select("#form-place").value,
          discription: act.select("#form-discription").value,
          cost: act.select("#form-cost").value,
          review: act.select("#form-review").value
        }

        //post to db
        API.post("interests", obj).then(() => {
          //clear page
          act.select("#list-container").innerHTML = ""
          //get new db
          API.get("interests").then((array) => {
            array.forEach(interest => {
              //add list to dom
              act.plus("#list-container", comp.list(interest))
            })
          })
        })
      }
      else if (event.target.id.startsWith("list-edit")) {
        let id = +event.target.id.split("-")[2]
        let parent = event.target.id
        console.log(parent)
        API.get(`interests/${id}`).then((el) => {
          act.render(`#list-item-${id}`, comp.form(el))
        })
      }
      else if (event.target.id.startsWith("form-edit")) {
        //save values
        let obj = {
          name: act.select("#edit-name").value,
          placeId: act.select("#edit-place").value,
          discription: act.select("#edit-discription").value,
          cost: act.select("#edit-cost").value,
          review: act.select("#edit-review").value
        }
        let id = +event.target.id.split("-")[2]
        // edit db
        API.edit("interests", id, obj).then(() => {
          //clear page
          act.render("#list-container", "")
          //get new db
          API.get("interests").then((array) => {
            array.forEach(interest => {
              //add list to dom
              act.plus("#list-container", comp.list(interest))
              console.log(interest)
            })
          })
        })
      }
      else if (event.target.id.startsWith("list-delete")) {
        let id = +event.target.id.split("-")[2]
        act.render(`#list-item-${id}`, comp.warning(id))
        // Delete from db
        // API.delete("interests", id).then(() => {
        //   //clear page
        //   act.select("#list-container").innerHTML = ""
        //   //get new db
        //   API.get("interests").then((array) => {
        //     array.forEach(interest => {
        //       //add list to dom
        //       act.plus("#list-container", comp.list(interest))
        //     })
        //   })
        // })
      }
      else if (event.target.id.startsWith("delete-yes")) {
        console.log("yes delete")
      }
      else if (event.target.id.startsWith("delete-no")) {
        let id = +event.target.id.split("-")[2]
        console.log(id)
        act.render(`#list-item-${id}`, )
        // act.render("#delete-warning", "")
      }
    })
  }
}


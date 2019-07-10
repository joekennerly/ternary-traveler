console.log("comp loaded")

export const comp = {
  init() {
    return `
    <section class="dashboard" id="dashboard">
      <h1 id="dashboard-title">Ternary Traveler</h1>
      <div id="form-container"></div>
      <div id="list-container"></div>
    </section>
    `
  },
  form(obj) {
    if (obj) {
      return `
      <input id="edit-name" type="text" value="${obj.name}"/>
      <input id="edit-discription" type="text" value="${obj.discription}"/>
      <input id="edit-cost" type="text" value="${obj.cost}"/>
      <input id="edit-review" type="text" value="${obj.review}"/>
      <select id="edit-place">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button id="form-edit-${obj.id}">add</button>
      `
    }
    else {
      return `
      <input id="form-name" type="text" placeholder="name"/>
      <input id="form-discription" type="text" placeholder="discription"/>
      <input id="form-cost" type="text" placeholder="cost"/>
      <input id="form-review" type="text" placeholder="review"/>
      <select id="form-place">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button id="form-add">add</button>
      `
    }
  },
  list(element) {
    return `
    <div id="list-item-${element.id}">
      <div id="list-name">${element.name}</div>
      <div id="list-discription">${element.discription}</div>
      <div id="list-cost">${element.cost}</div>
      <div id="list-review">${element.review}</div>
      <button id="list-edit-${element.id}">edit</button>
      <button id="list-delete-${element.id}">delete</button>
    </div>
    `
  },
  warning(id) {
    return `
    <div id="delete-warning-${id}">
      <h2>Are you sure you want to delete?</h2>
      <button id="delete-yes-${id}">delete</button>
      <button id="delete-no-${id}">cancel</button>
    </div>`
  },
  place(obj) {
    return `
    <div id="week-${obj.id}">
      <h2>Location ${obj.id}: ${obj.name}</h2>
      <div id="points-${obj.id}"></div>
    </div>
    `
  }
}
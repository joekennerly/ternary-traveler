console.log("comp loaded")

export const comp = {
  init() {
    return `
    <section class="dashboard" id="dashboard">
      <h1 id="dashboard-title">Ternary Traveler</h1>
      <div id="form-container">form</div>
      <div id="list-container">list</div>
    </section>
    `
  },
  form() {
    return `
    <input type="text" placeholder="name"/>
    <input type="text" placeholder="discription"/>
    <input type="text" placeholder="cost"/>
    <input type="text" placeholder="review"/>
    <button>add</button>
    `
  },
  list() {
    return `
    <div id="sublist-contaner"></div>
    `
  },
  point() {

  }
}
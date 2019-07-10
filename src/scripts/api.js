console.log("api loaded")

export const API = {
  get(resource) {
    return fetch(`http://localhost:8088/${resource}`).then(res => res.json())
  },
  post(resource, data) {
    return fetch(`http://localhost:8088/${resource}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },

  delete(resource, id) {
    return fetch(`http://localhost:8088/${resource}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json())
  },

  edit(resource, id, data) {
    return fetch(`http://localhost:8088/${resource}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
}
export const state = () => ({
  headers: [
    {
      text: "",
      align: "start",
      value: "number",
    },
    { text: "", value: "site" },
    { text: "", value: "address" },
    { text: "", value: "underground" },
    { text: "", value: "active" },
    { text: "", value: "actions", sortable: false },
  ],
  places: [
    {
      number: 1,
      site: "Cabinet.rent",
      address: "Новослободская, 12",
      underground: "м. Новослободская",
      active: true,
    },
    {
      number: 2,
      site: "news.rent",
      address: "Китай-город, 12",
      underground: "м. Китай город",
      active: false,
    },
  ]
})

export const mutations = {
  add(state, newplaces){
    state.places.push(newplaces)
  },
  delete(state, deleteItem){
    state.places.splice[deleteItem, 1]
  }
}
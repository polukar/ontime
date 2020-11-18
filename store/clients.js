export const state = () => ({
  headers: [
    {
      text: "",
      align: "start",
      value: "number",
    },
    { text: "", value: "name" },
    { text: "", value: "nameActive" },
    { text: "", value: "phone" },
    { text: "", value: "whatsapp" },
    { text: "", value: "tm" },
    { text: "", value: "summ" },
    { text: "", value: "active",},
    { text: "", value: "actions", sortable: false },
  ],
  clients: [
    {
      number: 1,
      name: "Маша Иванова",
      nameAtive: true,
      phone: "89193581152",
      whatsapp: "#",
      tm: "#",
      summ: "2 неоплаченные записи (2 000 р)",
      active: true,
    },
    {
      number: 2,
      name: "Маша Иванова",
      nameAtive: true,
      phone: "89193581152",
      whatsapp: "#",
      tm: "#",
      summ: "2 неоплаченные записи (2 000 р)",
      active: false,
    },
    {
      number: 3,
      name: "Маша Иванова",
      nameAtive: false,
      phone: "89193581152",
      whatsapp: "#",
      tm: "#",
      summ: "2 неоплаченные записи (2 000 р)",
      active: true,
    }
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
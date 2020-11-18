<template>
  <div class="page d-flex">
    <vNav></vNav>
    <div class="content">
      <header class="page__header d-flex justify-space-between align-center">
        <h1 class="h1-title">Места</h1>
        <v-btn fab class="btn-add" @click="newItem">
          <v-icon light> mdi-plus </v-icon>
        </v-btn>
      </header>
      <div class="filter d-flex align-center">
        <div class="search m-r-20">
          <v-text-field label="Поиск"></v-text-field>
        </div>
        <div class="select">
          <v-select
            label="Активность"
            v-model="active"
            :items="actives"
          ></v-select>
        </div>
      </div>
      <div class="innerpage">
        <v-data-table
          :headers="headers"
          :items="places"
          hide-default-header
          hide-default-footer
          class="place-table"
        >
          <template
            v-slot:item.active="{ item }"
            class="d-flex justify-content-center"
          >
            <div class="d-flex justify-center">
              <v-chip v-if="item.active" :class="{ active: item.active }">
                активно
              </v-chip>
              <v-chip v-else> Неактивно </v-chip>
            </div>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn small outlined @click="editItem(item)"> Открыть</v-btn>
          </template>
        </v-data-table>
      </div>
      <div class="panel" :class="{ active: panelActive }">
        <div class="panel__head d-flex justify-space-between align-center">
          <div class="back d-flex align-center" @click="closePanel">
            Назад
            <svg-icon class="panel__head-ico" name="icon-back" />
          </div>
          <div class="panel__title d-flex justify-center">Место</div>
          <div class="close d-flex justify-end" @click="closePanel">
            <svg-icon class="panel__head-ico" name="icon-close" />
          </div>
        </div>
        <div class="panel__body">
          <label class="panel-label">
            <v-text-field
              label="Название"
              :value="editedItem.site"
              v-model="editedItem.site"
            ></v-text-field>
          </label>
          <label class="panel-label">
            <v-text-field
              label="Адрес или ссылка"
              :value="editedItem.address"
              v-model="editedItem.address"
            ></v-text-field>
          </label>
          <label class="panel-label">
            <v-text-field
              label="Метро"
              :value="editedItem.underground"
              v-model="editedItem.underground"
            ></v-text-field>
          </label>
          <label class="panel-label d-flex align-center">
            <v-checkbox
              class="panel__checkbox"
              v-model="editedItem.active"
            ></v-checkbox>
            Активно
          </label>
          <label class="panel-label">
            <v-text-field label="Комментарий к месту"></v-text-field>
          </label>
          <div
            class="delete d-flex align-center"
            @click="deleteItem"
            v-if="editOrNew"
          >
            <svg-icon class="panel__head-ico" name="icon-delete" />
            Удалить место
          </div>
        </div>
        <div class="panel__footer">
          <v-btn normal class="btn-primary" v-if="editOrNew" @click="saveItem"
            >СОХРАНИТЬ</v-btn
          >
          <v-btn normal class="btn-primary" v-else @click="addPlace"
            >СОХРАНИТЬ</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vNav from "~/components/nav/nav";
export default {
  components: {
    vNav,
  },
  data() {
    return {
      active: "Все",
      actives: ["Все", "1", "2", "3"],
      headers: this.$store.state.places.headers,
      panelActive: false,
      places: this.$store.state.places.places,
      editOrNew: true,
      editedIndex: "",
      editedItem: {
        number: "",
        site: "",
        address: "",
        underground: "",
        active: "",
      },
      newItems: {
        number: 3,
        site: "",
        address: "",
        underground: "",
        active: false,
      },
    };
  },
  methods: {
    openPanel() {
      this.panelActive = !this.panelActive;
    },
    closePanel() {
      this.panelActive = !this.panelActive;
    },
    editItem(item) {
      this.editedIndex = this.places.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editOrNew = true;
      this.openPanel();
    },
    newItem() {
      this.editedItem = this.newItems;
      this.editOrNew = false;
      this.openPanel();
    },
    addPlace() {
      this.$store.commit("places/add", this.editedItem);
      this.editedItem = this.newItems;
      this.closePanel();
    },
    deleteItem(item) {
      this.places.splice(this.editedIndex, 1);
      this.editedIndex = this.places.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.closePanel();
    },
    saveItem() {
      Object.assign(this.places[this.editedIndex], this.editedItem);
      this.closePanel();
    },
  },
};
</script>

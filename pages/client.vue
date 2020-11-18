<template>
  <div class="page d-flex">
    <vNav></vNav>
    <div class="content">
      <header class="page__header d-flex justify-space-between align-center">
        <h1 class="h1-title">Клиенты</h1>
        <v-btn fab class="btn-add">
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
        <div class="checkbox d-flex align-center">
          <v-checkbox class="panel__checkbox"></v-checkbox>
          Постоянные клиенты
        </div>
        <div class="checkbox d-flex align-center">
          <v-checkbox class="panel__checkbox"></v-checkbox>
          Должники
        </div>
      </div>
      <div class="innerpage">
        <v-data-table
          :headers="headers"
          :items="clients"
          hide-default-header
          hide-default-footer
          class="place-table"
        >
          <template v-slot:item.name="{ item }" class="d-flex align-center">
            {{ item.name }}
            <svg-icon class="star" v-if="item.nameAtive" name="icon-star" />
          </template>
          <template v-slot:item.whatsapp="{ item }">
            <a :href="item.whatsapp" class="whatsapp">
              <v-img :src="iconWhatsapp"></v-img>
            </a>
          </template>
          <template v-slot:item.tm="{ item }">
            <a :href="item.tm" class="tm">
              <v-img :src="iconTm"></v-img>
            </a>
          </template>
          <template v-slot:item.summ="{ item }">
            <span class="point">{{ item.summ }}</span>
          </template>
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
            <v-btn small outlined @click="editItem(item)"> Записи</v-btn>
            <v-btn small outlined @click="editItem(item)"> Открыть</v-btn>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import vNav from "~/components/nav/nav";
import iconTm from "~/static/icons/icon-tm.svg";
import iconWhatsapp from "~/static/icons/icon-whatsapp.svg";
export default {
  components: {
    vNav,
    iconTm,
    iconWhatsapp,
  },
  data() {
    return {
      iconTm: iconTm,
      iconWhatsapp: iconWhatsapp,
      headers: this.$store.state.clients.headers,
      clients: this.$store.state.clients.clients,
      active: "Все",
      actives: ["Все", "1", "2", "3"],
    };
  },
};
</script>

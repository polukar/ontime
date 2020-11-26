<template>
  <div class="page">
    <mobileHeader title="Клиенты"></mobileHeader>
    <div class="page-wrap d-flex">
      <vNav></vNav>
      <div class="content">
        <header class="page__header d-flex justify-space-between align-center">
          <h1 class="h1-title">Клиенты</h1>
          <v-btn fab class="btn-add" @click="openPanel">
            <v-icon light> mdi-plus </v-icon>
          </v-btn>
        </header>
        <div class="filter filter--clients d-flex align-center">
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
          <div class="page__header-checkboxs d-flex">
            <div class="checkbox d-flex align-center">
              <v-checkbox class="panel__checkbox"></v-checkbox>
              Постоянные клиенты
            </div>
            <div class="checkbox d-flex align-center">
              <v-checkbox class="panel__checkbox"></v-checkbox>
              Должники
            </div>
          </div>
        </div>
        <div class="innerpage">
          <v-data-table
            :headers="headers"
            :items="clients"
            hide-default-header
            hide-default-footer
            class="place-table clients-table"
            :mobile-breakpoint="0"
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
              <span class="point" v-if="item.summActive">{{ item.summ }}</span>
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
              <v-btn small outlined @click="openPanel"> Записи</v-btn>
              <v-btn small outlined @click="openPanel"> Открыть</v-btn>
            </template>
          </v-data-table>
        </div>
        <div class="panel" :class="{ active: panelActive }">
          <div class="panel__head d-flex justify-space-between align-center">
            <div class="back d-flex align-center" @click="closePanel">
              Назад
              <svg-icon class="panel__head-ico" name="icon-back" />
            </div>
            <div class="panel__title d-flex justify-center">Клиент</div>
            <div class="close d-flex justify-end" @click="closePanel">
              <svg-icon class="panel__head-ico" name="icon-close" />
            </div>
          </div>
          <div class="panel__body">
            <label class="panel-label">
              <v-text-field label="Имя"></v-text-field>
            </label>
            <label class="panel-label">
              <v-text-field label="Фамилия"></v-text-field>
            </label>
            <label class="panel-label">
              <v-text-field label="Телефон"></v-text-field>
            </label>
            <label class="panel-label">
              <v-text-field label="WhatsApp"></v-text-field>
            </label>
            <label class="panel-label">
              <v-text-field label="Telegram"></v-text-field>
            </label>
            <label class="panel-label">
              <v-text-field label="Цена за 60 мин"></v-text-field>
            </label>
            <label class="panel-label d-flex align-center">
              <v-checkbox class="panel__checkbox"></v-checkbox>
              Постоянный клиент
            </label>
            <label class="panel-label d-flex align-center">
              <v-checkbox class="panel__checkbox"></v-checkbox>
              Активно
            </label>
            <label class="panel-label">
              <v-text-field label="Комментарий к месту"></v-text-field>
            </label>
            <div class="delete d-flex align-center" v-if="editOrNew">
              <svg-icon class="panel__head-ico" name="icon-delete" />
              Удалить место
            </div>
          </div>
          <div class="panel__footer">
            <v-btn normal class="btn-primary">СОХРАНИТЬ</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vNav from "~/components/nav/nav";
import mobileHeader from "~/components/header/mobileheader";
import iconTm from "~/static/icons/icon-tm.svg";
import iconWhatsapp from "~/static/icons/icon-whatsapp.svg";
export default {
  components: {
    vNav,
    iconTm,
    iconWhatsapp,
    mobileHeader,
  },
  data() {
    return {
      iconTm: iconTm,
      iconWhatsapp: iconWhatsapp,
      headers: this.$store.state.clients.headers,
      clients: this.$store.state.clients.clients,
      active: "Все",
      actives: ["Все", "1", "2", "3"],
      editOrNew: true,
      panelActive: false,
    };
  },
  methods: {
    openPanel() {
      this.panelActive = !this.panelActive;
    },
    closePanel() {
      this.panelActive = !this.panelActive;
    },
    editPanel() {
      this.openPanel();
    },
  },
};
</script>

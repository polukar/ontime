<template>
  <div class="panel" :class="{ active: panelActive }">
    <div class="panel__head d-flex justify-space-between align-center">
      <div class="back d-flex align-center" @click="closePanel"></div>
      <div class="panel__title d-flex justify-center">Место</div>
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
</template>



<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      panelActive: this.$store.state.settings.panelActive,
    };
  },
};
</script>
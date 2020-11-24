<template>
  <header class="mobileheader d-flex align-center justify-space-between">
    <div class="mobileheader__start d-flex align-center">
      <div class="burger">
        <svg-icon name="burger" />
      </div>
      <h1 class="h1-title">{{ title }}</h1>
    </div>
    <div class="mobileheader__end d-flex align-center justify-end">
      <div class="mobileheader__search">
        <svg-icon name="search" />
      </div>
      <v-btn fab class="btn-add" @click="newItem">
        <v-icon light> mdi-plus </v-icon>
      </v-btn>
    </div>
  </header>
</template>


<script>
export default {
  props: ["title"],
};
</script>
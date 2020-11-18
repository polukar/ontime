<template>
  <div class="page d-flex">
    <vNav></vNav>
    <div class="content">
      <header class="page__header d-flex justify-space-between align-center">
        <h1 class="h1-title">Записи</h1>
        <v-btn fab class="btn-add" @click="openPanel">
          <v-icon light> mdi-plus </v-icon>
        </v-btn>
      </header>
    </div>
  </div>
</template>

<script>
import vNav from "~/components/nav/nav";
export default {
  components: {
    vNav,
  },
};
</script>

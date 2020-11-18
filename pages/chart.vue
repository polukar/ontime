<template>
  <div class="page d-flex">
    <vNav></vNav>
    <div class="content">
      <header class="page__header d-flex justify-space-between align-center">
        <h1 class="h1-title">Рабочий график</h1>
        <v-btn normal class="btn-primary">РАБОЧЕЕ ВРЕМЯ</v-btn>
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

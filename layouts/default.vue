<template>
  <v-app>
    <vHeader></vHeader>
    <nuxt />
  </v-app>
</template>
<script>
import vHeader from "~/components/header/header";
export default {
  components: {
    vHeader,
  },
};
</script>

<style lang="scss">
$color-pack: false;
</style>



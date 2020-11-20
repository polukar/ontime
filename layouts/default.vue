<template>
  <v-app>
    <vHeader></vHeader>
    <nuxt />
    <vSettings></vSettings>
  </v-app>
</template>
<script>
import vHeader from "~/components/header/header";
import vSettings from "~/components/settings/setting";
export default {
  components: {
    vHeader,
    vSettings,
  },
};
</script>

<style lang="scss">
$color-pack: false;
</style>



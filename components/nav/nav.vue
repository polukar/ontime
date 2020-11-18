<template>
  <nav class="nav">
    <nuxt-link
      class="nav__link"
      v-for="item in links"
      :key="item.id"
      :to="item.to"
    >
      <svg-icon class="nav__ico" :name="item.ico" />
      <span>{{ item.title }}</span>
    </nuxt-link>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          id: 0,
          title: "Записи",
          ico: "message",
          to: "/",
        },
        {
          id: 1,
          title: "Рабочий график",
          ico: "chart",
          to: "chart",
        },
        {
          id: 2,
          title: "Клиенты",
          ico: "client",
          to: "client",
        },
        {
          id: 3,
          title: "Места",
          ico: "place",
          to: "place",
        },
      ],
    };
  },
};
</script>


<template>
  <div class="header d-flex justify-space-between align-center">
    <div class="logo">
      <v-img :src="logo"></v-img>
    </div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="reset btn-dropdown" text v-bind="attrs" v-on="on">
          Dropdown
          <i class="icon-arrow-down"><v-img :src="iconArrowDown"></v-img></i>
        </v-btn>
      </template>
      <v-list class="drop-down-header">
        <v-list-item @click="panelStatus">Настройки</v-list-item>
        <v-list-item>Выйти</v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import logo from "~/static/img/logo.svg";
import iconArrowDown from "~/static/icons/icon-arrow-down.svg";
export default {
  data() {
    return {
      logo: logo,
      iconArrowDown: iconArrowDown,
    };
  },
  methods: {
    panelStatus() {
      this.$store.commit("settings/statusSettings");
    },
  },
};
</script>


<style lang="scss">
.v-btn {
  &:before {
    display: none;
  }
}
.v-btn:not(.v-btn--round).v-size--default {
  padding: 0;
  height: 53px;
  border-radius: 0px;
  color: #fff;
  font-weight: normal;
  &:active {
    &:before {
      display: none;
    }
  }
  &:hover {
    &:before {
      display: none;
    }
    background-color: transparent;
  }
}
.btn-dropdown[aria-expanded="true"] {
  .icon-arrow-down {
    transform: rotateZ(180deg);
  }
}
.btn-dropdown .icon-arrow-down {
  margin-left: 12px;
  transition: 0.4s;
}

.drop-down-header {
  min-width: 244px;
  color: $black;
  padding-top: 11px;
  padding-bottom: 11px;
  border-radius: 4px;
  &.v-sheet.v-list:not(.v-sheet--outlined) {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 14px 24px rgba(51, 51, 51, 0.12);
  }

  .v-list-item {
    color: $black;
  }
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: $black !important;
    height: 24px;
    min-height: auto;
    font-size: 16px;
    line-height: 24px;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
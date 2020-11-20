<template>
  <div class="enter d-flex justify-center align-start">
    <div class="enter__panel">
      <div class="enter__logo">
        <svg-icon name="logo" />
      </div>
      <v-tabs v-model="tab" class="enter__tabs">
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <div class="enter__socials d-flex justify-space-between align-center">
            <span>Вы можете войти с помощью</span>
            <div class="socials d-flex justify-end">
              <a href="" class="socials__link">
                <svg-icon name="icon-vk" />
              </a>
              <a href="" class="socials__link">
                <svg-icon name="icon-facebook" />
              </a>
              <a href="" class="socials__link">
                <svg-icon name="icon-google" />
              </a>
            </div>
          </div>
          <v-form v-model="valid" class="enter__form">
            <div class="enter__input">
              <input type="text" placeholder="Номер телефона или email" />
            </div>
            <div class="enter__input">
              <input type="password" placeholder="Пароль" />
            </div>
            <div class="enter__btn">
              <v-btn normal class="btn-primary">Войти</v-btn>
            </div>
          </v-form>
        </v-tab-item>
        <v-tab-item>
          <v-form v-model="valid" class="enter__form">
            <div class="registr --sms" v-if="regStatus == 'sms'">
              <div class="enter__input">
                <input type="text" placeholder="Номер телефона или email" />
              </div>
              <div class="enter__input">
                <input type="text" placeholder="Код из смс" />
              </div>
              <div class="enter__btn">
                <v-btn normal @click="nextPassword" class="btn-primary"
                  >Продолжить</v-btn
                >
              </div>
            </div>
            <div class="registr --password" v-else-if="regStatus == 'password'">
              <div class="enter__input">
                <input type="password" placeholder="Создайте пароль" />
              </div>
              <div class="enter__input">
                <input type="password" placeholder="Повторите пароль " />
              </div>
              <div class="enter__btn">
                <v-btn normal class="btn-primary">Регистрация</v-btn>
              </div>
            </div>
            <div class="registr" v-else>
              <div class="enter__input">
                <input type="text" placeholder="Номер телефона или email" />
              </div>
              <div class="enter__btn">
                <v-btn normal class="btn-primary" @click="nextSms"
                  >Продолжить</v-btn
                >
              </div>
            </div>
          </v-form>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tab: null,
      items: ["Войти", "Регистрация"],
      text: "123",
      regStatus: "",
    };
  },
  methods: {
    nextSms() {
      this.regStatus = "sms";
    },

    nextPassword() {
      this.regStatus = "password";
    },
  },
};
</script>
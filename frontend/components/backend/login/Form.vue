<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
      <form @submit.prevent="handleSubmit(login)">
        <h1 class="display-4 mb-10">{{ $t("panel.login.welcomeAgain") }}</h1>
        <p class="mb-30">{{ $t("panel.login.loginWithYourCredentials") }}</p>
        <div class="form-group mb-3">
          <ValidationProvider
            vid="email"
            :name="$t('panel.login.email')"
            rules="required|min:2|email"
            v-slot="{ errors }"
          >
            <label for="email" class="mb-5">{{
              $t("panel.login.email")
            }}</label>
            <input
              id="email"
              class="form-control form-control-sm rounded-0"
              :placeholder="$t('panel.login.email')"
              type="email"
              v-model="loginData.email"
              required
            />
            <span class="mt-5 d-block text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group mb-3">
          <ValidationProvider
            vid="password"
            :name="$t('panel.login.password')"
            rules="required|min:6"
            v-slot="{ errors }"
          >
            <label for="password" class="mb-5">{{
              $t("panel.login.password")
            }}</label>
            <input
              id="password"
              class="form-control form-control-sm rounded-0"
              :placeholder="$t('panel.login.password')"
              type="password"
              v-model="loginData.password"
              required
            />
            <span class="mt-5 d-block text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <button
          class="btn btn-pink btn-block btn-sm rounded-0"
          type="submit"
          :disabled="invalid"
        >
          {{ $t("panel.login.login") }}
        </button>

        <p class="font-14 text-center mt-15">
          {{ $t("panel.login.havingProblemsLoggingIn") }}
        </p>
        <p class="text-center">
          <nuxt-link to="/panel/forgot-password">{{
            $t("panel.login.forgotPassword")
          }}</nuxt-link>
        </p>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      loginData: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    async login() {
      try {
        let { data } = await this.$auth.loginWith("admin", {
          data: this.loginData,
        });
        this.$router.replace("/panel").then(() => {
          this.$toast.success(
              this.$t("panel.login.welcome") +
              " <b>" +
              this.$auth.user.first_name +
              " " +
              this.$auth.user.last_name+"</b>",
            this.$t("successfully")
          );
        });
      } catch (error) {
        if (error.response) {
          this.$toast.error(error.response.data.message, this.$t("error"));
        }
      }
    },
  },
};
</script>
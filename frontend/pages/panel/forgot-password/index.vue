<template>
  <client-only>
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-5 pa-0">
            <BackendLoginCarousel />
          </div>
          <div class="col-xl-7 pa-0">
            <div class="auth-form-wrap py-xl-0 py-50">
              <div class="auth-form w-xxl-55 w-xl-75 w-sm-90 w-xs-100">
                <BackendForgotPasswordForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  layout: "admin_login",
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        $(".preloader-it").delay(500).fadeOut("slow");
        this.$nuxt.$loading.finish();
        $(".hk-wrapper").removeClass("d-none");
      }, 1000);
    });
  },
};
</script>
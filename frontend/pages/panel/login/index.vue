<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-5 pa-0">
          <BackendLoginCarousel />
        </div>
        <div class="col-xl-7 pa-0">
          <div class="auth-form-wrap py-xl-0 py-50">
            <div class="auth-form w-xxl-55 w-xl-75 w-sm-90 w-xs-100">
              <BackendLoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin_login",
  mounted() {
  },
};
</script>
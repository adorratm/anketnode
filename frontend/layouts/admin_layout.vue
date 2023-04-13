<template>
  <div>
    <!-- Preloader -->
    <div class="preloader-it">
      <div class="loader-pendulums"></div>
    </div>
    <!-- /Preloader -->
    <!-- HK Wrapper -->
    <div class="hk-wrapper hk-vertical-nav">
      <!-- Top Navbar -->
      <BackendHeader />
      <!-- /Top Navbar -->

      <!-- Vertical Nav -->
      <BackendSidebar />
      <!-- /Vertical Nav -->

      <!-- Main Content -->
      <div class="hk-pg-wrapper">
        <!-- Container -->
        <div class="container-fluid mt-xl-50 mt-sm-30 mt-15">
          <slot />
        </div>
        <!-- /Container -->

        <!-- Footer -->
        <BackendFooter />
        <!-- /Footer -->

        <!-- /Main Content -->
      </div>
      <!-- /HK Wrapper -->
    </div>
  </div>
</template>


<script setup>
useHead({
  title: "Anket - Mutfak Yapım Dijital Reklam Ajansı",
  meta: [
    {
      name: "description",
      content: "Anket - Mutfak Yapım Dijital Reklam Ajansı",
    },
    {
      name: "author",
      content: "Adorratm https://github.com/adorratm",
    },
  ],
  htmlAttrs: {
    lang: "tr",
  },
  link: [
    {
      rel: "stylesheet",
      href: "/backend/plugins/bootstrap/css/bootstrap.min.css",
    },
    {
      rel: "stylesheet",
      href: "/backend/css/animate.css",
    },
    {
      rel: "stylesheet",
      href: "/backend/css/all.min.css",
    },
    {
      rel: "stylesheet",
      href: "/backend/css/v4-shims.min.css",
    },
    {
      rel: "stylesheet",
      href: "/backend/css/style.css",
    },
  ],
  script: [
    {
      src: "/backend/plugins/jquery/jquery.min.js",
      defer: true,
      tagPosition: "bodyClose",
    },
    {
      src: "/backend/plugins/jquery-migrate/jquery-migrate.min.js",
      defer: true,
      tagPosition: "bodyClose",
    },
    {
      src: "/backend/plugins/lazysizes/lazysizes.min.js",
      defer: true,
      tagPosition: "bodyClose",
    },
    {
      src: "/backend/plugins/bootstrap/js/bootstrap.bundle.min.js",
      defer: true,
      tagPosition: "bodyClose",
    },
    { src: "/backend/js/init.js", defer: true, tagPosition: "bodyClose" },
  ],
});
</script>
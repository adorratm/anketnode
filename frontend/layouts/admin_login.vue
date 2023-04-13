<template>
  <div>
    <!-- HK Wrapper -->
    <div class="hk-wrapper">
      <!-- Main Content -->
      <div class="hk-pg-wrapper hk-auth-wrapper">
        <BackendLoginHeader />
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: "%s - Anket",
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
      {
        rel: "stylesheet",
        href: "/backend/plugins/owlcarousel/owl.carousel.min.css",
      },
    ],
    script: [
      {
        src: "/backend/plugins/jquery/jquery.min.js",
        defer: true,
        body: true,
      },
      {
        src: "/backend/plugins/jquery-migrate/jquery-migrate.min.js",
        defer: true,
        body: true,
      },
      {
        src: "/backend/plugins/lazysizes/lazysizes.min.js",
        defer: true,
        body: true,
      },
      {
        src: "/backend/plugins/bootstrap/js/bootstrap.bundle.min.js",
        defer: true,
        body: true,
      },
      {
        src: "/backend/plugins/owlcarousel/owl.carousel.min.js",
        body: true,
        defer: true,
      },
      { src: "/backend/js/init.js", defer: true, body: true },
    ],
  },
};
</script>
<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: '%s - Anket',
    meta: [
      {
        name: 'description',
        content: 'Anket - Mutfak Yapım Dijital Reklam Ajansı',
      },
      {
        name: 'author',
        content: 'Adorratm https://github.com/adorratm',
      },
    ],
    htmlAttrs: {
      lang: 'tr',
    },
    link: [
      {
        rel: 'stylesheet',
        href: '/frontend/css/vendors.css',
      },
      {
        rel: 'stylesheet',
        href: '/frontend/css/main.css',
      },
    ],
    script: [
      { src: '/frontend/js/vendors.js', defer: true, body: true },
      { src: '/frontend/js/scrollmagic.min.js', defer: true, body: true },
      { src: '/frontend/js/main.js', defer: true, body: true },
    ],
  },
}
</script>
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: ['acomcapital.vibrantick.org', 'localhost'],
    },
  },


  app: {
    head: {
      title: 'Home',
      link: [
        // 🔸 Favicon
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/logo/favicon.png' },

        // 🔸 Google Fonts
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css'},
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap' },

        // 🔸 CSS Files (from /public/css)
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/slicknav.min.css' },
        { rel: 'stylesheet', href: '/css/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/css/all.css' },
        { rel: 'stylesheet', href: '/css/animate.css' },
        { rel: 'stylesheet', href: '/css/mousecursor.css' },
        { rel: 'stylesheet', href: '/css/custom.css' },
      ],

      script: [
        // ✅ jQuery must load first (no defer)
        { src: '/js/jquery-3.7.1.min.js', tagPosition: 'bodyClose' },

        // ✅ Other JS (in same order as HTML theme)
        { src: '/js/bootstrap.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/validator.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/jquery.slicknav.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/swiper-bundle.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/jquery.waypoints.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/jquery.counterup.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/SmoothScroll.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/parallaxie.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/gsap.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/magiccursor.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/SplitText.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/jquery.mb.YTPlayer.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/wow.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/function.js', tagPosition: 'bodyClose', defer: true },
        

      ],
    },
  },
})

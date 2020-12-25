module.exports = {
  sass: {
    data: `
        @import "@styles/_global";
      `,
  },
  themeConfig: {
    logo: '/assets/logo.png',
    searchPlaceholder: 'Buscar ...',
    nav: [],
    sidebar: ['/'],
    smoothScroll: true,
  },
  markdown: {
    lineNumbers: false,
  },
  plugins: [
    [
      'vuepress-plugin-code-copy',
      {
        color: '#727479',
        backgroundColor: '#983128',
        successText: 'Copiado al portapapeles!',
        staticIcon: true,
      },
    ],
  ],
}

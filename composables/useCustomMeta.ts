export const useCustomMeta = () => {
  const defaultDesc
    = 'app description'
  const defaultImage = 'url ogImage'

  const setMeta = (title: string, desc = defaultDesc, image = defaultImage) => {
    useHead({
      titleTemplate: (title?: string) => `${title} - App Name`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: desc },
        { name: 'og:site_name', content: 'App Name' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'url app' },
        { name: 'og:image', content: image },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@appname' },
        { name: 'twitter:creator', content: '@appname' },
        { name: 'twitter:title', content: 'App Name' },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: image },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    })
  }

  return {
    setMeta,
  }
}

import { meta } from 'nuxt-social-meta'
import Vue from 'vue'
Vue.use(meta, {
    url: "Site url",
    title: "Title",
    site_name: "Site name",
    description: "Site description",
    img: "Link to image in static folder",
    img_size: { width: "Image width in px", height: "Image height in px" },
    locale: "en_US",
    twitter: "@user",
    twitter_card: "summary_large_image",
    theme_color: "#theme-color",
})

/*
'@nuxtjs/apollo', [
            "nuxt-social-meta",
            {
                url: "Site url",
                title: "Title",
                site_name: "Site name",
                description: "Site description",
                img: "Link to image in static folder",
                img_size: { width: "Image width in px", height: "Image height in px" },
                locale: "en_US",
                twitter: "@user",
                twitter_card: "summary_large_image",
                theme_color: "#theme-color",
            },
        ],
*/

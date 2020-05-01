import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

// Install BootstrapVue
Vue.use(Vuetify)

const options = {
    theme: {
        themes: {
          light: {
          },
          dark: {
          },
        },
      },
}

export default new Vuetify(options)
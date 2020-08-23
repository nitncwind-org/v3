import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
          light: {
            primary: '#1B3DB0',
            secondary: '#cccccc',
            accent: '#ffc107',
            error: '#f44336',
            warning: '#ff9800',
            info: '#00bcd4',
            success: '#4caf50'
          },
          dark: {
            primary: '#1B3DB0',
            secondary: '#cccccc',
            accent: '#ffc107',
            error: '#f44336',
            warning: '#ff9800',
            info: '#00bcd4',
            success: '#4caf50'
          },
        },

      },

});

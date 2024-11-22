/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false, // ライトテーマ
        variables: {
          // 背景にカスタムCSSを使用
          'background-base': 'linear-gradient(135deg, #42a5f5, #7e57c2)',
        },
      },
    },
  },
});

export default vuetify;

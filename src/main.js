import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import * as Sentry from "@sentry/vue";

const app = createApp(App)

Sentry.init({
  app,
  dsn: "https://7f94a09e29d5645cf00eb57f030af133@o4509524895727616.ingest.de.sentry.io/4509524904050768",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

app.use(createPinia())
app.use(router)

app.mount('#app')

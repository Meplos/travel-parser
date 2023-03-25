import { createApp } from 'vue'
import "./style/reset-css.css"
import './style.css'

import App from './App.vue'
import TravelBuilder from './domain/builder/TravelBuilder'

const app = createApp(App, { TravelBuilder: TravelBuilder })
    .mount('#app');


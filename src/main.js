import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import _ from 'lodash';

import App from './App.vue';
import Checkin from './views/Checkin.vue';
import Profile from './views/Profile.vue';
import Random from './views/Random.vue';
Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
   vuetify: new Vuetify({}),
   router: new VueRouter({
      routes: [{
            path: '/',
            component: Checkin
         },
         {
            path: '/profile',
            component: Profile
         },
         {
            path: '/random',
            component: Random
         }
      ]
   }),
   store: new Vuex.Store({
      state: {
         bgColor: _.shuffle(['blue-grey darken-4', 'grey darken-4', 'brown darken-4'])[0],
         guilds: [],
         guildData: {},
         publicStyle: {
            background: 'url(images/ictp-board.jpg)',
            backgroundAttachment: 'fixed',
         }
      }
   }),
   render: h => h(App)
}).$mount('#app');
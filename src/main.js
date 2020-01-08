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
import RandomChance from './views/RandomChance.vue';
import RandomScore from './views/RandomScore.vue';

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueRouter);



new Vue({
   vuetify: new Vuetify({}),
   router: new VueRouter({
      routes: [{
            path: '/',
            component: Checkin,
            meta: {
               transitionName: 'slide'
            },
         },
         {
            path: '/profile',
            component: Profile,
            meta: {
               transitionName: 'slide'
            },
         },
         {
            path: '/random',
            component: Random,
            meta: {
               transitionName: 'slide'
            },
         },
         {
            path: '/view',
            component: RandomChance,
            meta: {
               transitionName: 'slide'
            },
         },
         {
            path: '/score',
            component: RandomScore,
            meta: {
               transitionName: 'slide'
            },
         },
      ]
   }),
   store: new Vuex.Store({
      state: {
         caseData: {},
         bgColor: _.shuffle(['blue-grey darken-4', 'grey darken-4', 'brown darken-4'])[0],
         guilds: [{
               id: 1,
               name: 'มยุรเวนไตย',
               image: 'images/mayura.png',
               case: 'case1',
               score: 0
            }, {
               id: 2,
               name: 'ครุฑา',
               image: 'images/krutta.png',
               case: 'case2',
               score: 0
            },
            {
               id: 3,
               name: 'กิเลน',
               image: 'images/kiren.png',
               case: 'case3',
               score: 0
            }, {
               id: 4,
               name: 'เอราวัณ',
               image: 'images/erawan.png',
               case: 'case4',
               score: 0
            }, {
               id: 5,
               name: 'บัณฑุราชสีห์',
               image: 'images/ratsri.png',
               case: 'case5',
               score: 0
            }, {
               id: 6,
               name: 'พญานาคราช',
               image: 'images/nakrat.png',
               case: 'case6',
               score: 0
            }
         ],
         guildData: {
            id: 1,
            name: 'มยุรเวนไตย',
            image: 'images/mayura.png',
            case: 'case1'
         },
         publicStyle: {
            background: 'url(images/ictp-board.jpg)',
            backgroundAttachment: 'fixed',
         }
      }
   }),
   render: h => h(App)
}).$mount('#app');
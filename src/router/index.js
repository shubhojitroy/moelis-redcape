import Vue from 'vue';
import Router from 'vue-router';

import ProspectusPage from '../home/ProspectusPage.vue';
import LoginPage from '../login/LoginPage.vue';
import RegistrationDetails from '../rego-details/RegistrationDetails.vue';
import ApplicationPage from '../application/ApplicationPage.vue';
import ConfirmationPage from '../confirmation/ConfirmationPage.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ProspectusPage,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/rego-details',
      name: 'Rego-Details',
      component: RegistrationDetails,
    },
    {
      path: '/application',
      name: 'Application',
      component: ApplicationPage,
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: ConfirmationPage,
    },
  ],
});

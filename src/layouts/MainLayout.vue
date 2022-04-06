<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background: linear-gradient(#8274C5, #5A4A9F);">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Test Task
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list class="px-2">
        <q-item-label
          header
          class="text-grey-8"
        >
          Dashboard Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const authRoutes = [
    {
      title: 'Children',
      caption: 'Children',
      icon: 'users',
      link: '/children'
    },
    {
      title: 'Classes',
      caption: 'Classes',
      icon: 'home',
      link: '/classes'
    },
    {
      title: 'Logout',
      caption: 'Logout',
      icon: 'sign-out',
      link: '/logout'
    },
    
];

const commonRoutes = [
  {
    title: 'Login / Sign Up',
    caption: 'Authentication',
    icon: 'login',
    link: '/user-authentication'
  },
];
import EssentialLink from 'components/EssentialLink.vue'
export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  computed:{
    user(){
      return this.$store.state.loginUser;
    },
    essentialLinks(){
      if(window.localStorage.getItem('user') && window.localStorage.getItem('user') != null)
      {
        return authRoutes;
      }
      else
      {
        return commonRoutes;
      }
    }
  }
}
</script>

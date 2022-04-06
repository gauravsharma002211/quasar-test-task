<template>
  <q-item
    clickable
    tag="a"
    :href="title != 'Logout' ? link : false"
    @click="action"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  methods:{
    action()
    {
      if(this.title == 'Logout')
      {
        this.$store.dispatch('logOutUser');
        this.$router.replace('/user-authentication')
      }
    }
  }
}
</script>

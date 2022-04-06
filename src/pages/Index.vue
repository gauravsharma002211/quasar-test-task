<template>
  <q-page class="text-center">
    <div v-if="user && user.id">
      <h3>Welcom to Dashboard Page</h3>
    </div>
    <div v-else>
      <h3>Welcom to Test Home page</h3>
      <label>Please login into system to proceed</label>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  computed:{
    user(){
      return this.$store.state.loginUser;
    }
  }
}
</script>

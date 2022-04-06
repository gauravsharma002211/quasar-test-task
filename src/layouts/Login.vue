<template>
  <div
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Login</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="email" type="email" label="Email">
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated @click="loginUser" size="lg" color="purple-4" class="full-width text-white" label="Login" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <q-btn
                @click="$router.replace('/register')"
                icon-right="login"
            >
                Sign Up
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    loginUser(){
      {
      if(!this.email || !this.password)
      {
        this.$q.notify('Please enter email and password both.')
      }
      else
      {
        const payload = {
          email:this.email,
          password:this.password
        }

        this.$store.dispatch('loginUser',payload).then(res=>{
          
            this.$q.notify(res.message);
            if(res.status)
            {
              this.$router.replace('/#/')
            }
        });
      }
    }
    }
  }
}
</script>

<style>
</style>
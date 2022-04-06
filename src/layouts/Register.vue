<template>
  <div
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Register</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input square clearable v-model="username" type="text" label="Username">
              </q-input>
              <q-input square clearable v-model="email" type="email" label="Email">
              </q-input>
              <q-input square clearable v-model="password" type="password" label="Password">
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Register" @click="register" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <q-btn
                @click="$router.replace('/user-authentication')"
                icon-right="login"
            >
                Login
            </q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  methods:{
    register()
    {
      if(!this.email || !this.username || !this.password)
      {
        this.$q.notify('Please fill up all the fields in valid form')
      }
      else
      {
        const payload = {
          email:this.email,
          username:this.username,
          password:this.password
        }

        this.$store.dispatch('registerUser',payload).then(res=>{
          if(res.status)
          {
             this.$q.notify(res.message)
             this.$router.push('/user-authentication')
          }
          else
          {
             this.$q.notify(res.message)
          }
         
        });
      }
    }
  },
}
</script>

<style>
</style>
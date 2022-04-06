<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="childrenData.name"
        label="Your name *"
        hint="Name and surname"
      />

      <q-input
        filled
        type="number"
        v-model="childrenData.age"
        label="Your age *"

      />

      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>

import { mapActions } from "vuex";
export default {
data(){
    return({
        childrenData : {
            name : '',
            age: ''
        }
    })
},
methods:{
    ...mapActions(['addChildrenData']),
    onSubmit(){
        console.log("submit called", this.childrenData)
        var payload = this.childrenData
        this.addChildrenData(payload)
        this.$router.push('/children')

    },
    onReset(){
        this.childrenData.name = '',
        this.childrenData.age =''
    }
}
}
</script>

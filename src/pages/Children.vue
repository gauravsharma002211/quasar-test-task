<template>
  <q-page class="children">
  <q-table
      title="Children"
      :columns="columns"
      row-key="name"
      :data="rows"
  >
  <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
           {{ props.row.name }}
        </q-td>
         <q-td key="age" :props="props">
              {{ props.row.age }}
        </q-td>
        <q-td key="action" :props="props">
            <q-btn icon-right="delete" class="text-red" @click="removeChild(props.row.id)">  </q-btn>
        </q-td>
      </q-tr>
 </template>
   <template v-slot:top-right>
             <q-btn label="Add" color="primary" @click="prompt = true" />
        </template>
 </q-table>
  <div>

        <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Add Children</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          

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
        min="3"
        v-model="childrenData.age"
        label="Your age *"

      />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>


  </div>
  </q-page>
</template>

<script>
import { mapActions , mapGetters} from "vuex";
export default {
  name: 'Children',
  data(){
    return {
      prompt: false,
      childrenData : {
            name : '',
            age: ''
        },
        columns: [
            {
                name: 'name',
                required: true,
                label: 'Name',
                align: 'left',
                field: row => row.name,
                format: val => `${val}`,
                sortable: true
            },
            { name: 'age', align: 'center', label: 'Age', field: 'age', sortable: true },
            { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: false },
        ]
    } 
  },
  computed:{
    ...mapGetters(['childData']),
    user(){
      return this.$store.state.loginUser;
    },
    rows(){
        return this.childData
    },
    column()
    {
        return this.columns;
    },
  },
  watch:{
    prompt(){
      if(this.prompt == true)
      {
        this.onReset();
      }
    }
  },
  methods:{
      ...mapActions(['removeChildData','addChildrenData']),
      addChild(){
        this.$router.push('/addchildren')
      },
      removeChild(id){
     
        this.removeChildData(id)
      },
       onSubmit(){
        if(this.childrenData.name == '' || this.childrenData.age == '')
        {
          this.$q.notify('Please enter valid details.')
        }
        else
        {
          var payload = this.childrenData
          this.addChildrenData(payload)
          this.prompt = false;
        }
        
    },
    onReset(){
        this.childrenData.name = '',
        this.childrenData.age =''
    }
  }
}
</script>

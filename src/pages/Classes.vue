<template>
  <q-page class="classes">
    <q-table
        title="classes"
        :columns="columns"
        row-key="name"
        :data="rows"
    >
      <template v-slot:body="props">
         <q-td auto-width>
          </q-td>
          <q-tr :props="props">
            <q-td key="name" :props="props">
              <div class="d-flex" @click="classStudDetails(props.row)">
                <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
                <label class="pl-2"> {{ props.row.name }}</label>
              </div>
              
            </q-td>
            <q-td key="description" :props="props">
                  {{ props.row.description }}
            </q-td>
            <q-td key="seats" :props="props">
                  {{ props.row.seats }}
            </q-td>
            <q-td key="action" :props="props">
                <q-btn class="text-green" @click="$router.push({path : `/enroll-student/${props.row.id}`})"> Enroll Child </q-btn>
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%" v-if="reloadList">
            <template v-if="studDetails[props.row.id] != undefined && studDetails[props.row.id] != null " >
              <span>Enrolled Student details : </span>
              <div class="row  q-pt-md q-pb-md">
                <div class="col col-md-2">
                 <strong>Name</strong> 
                </div>
                <div class="col col-md-2">
                 <strong>Age</strong> 
                </div>
                <div class="col col-md-2">
                 <strong>Action</strong> 
                </div>
              </div>
              <div class="row q-pt-md q-pb-md" v-for="(element,indexs) in studDetails[props.row.id]" :key="indexs">
                <div class="col col-md-2">
                  {{element.name}}
                </div>
                <div class="col col-md-2">
                  {{element.age}}
                </div>
                <div class="col col-md-2 justify-center items-center">
                  <q-btn icon-right="remove" @click="removeStudent()" />
                </div>
              </div>    
            </template>
            <template v-else>
              <span class="column col col-md-12 text-center">No data available</span>
            </template>
          
            </q-td>
          </q-tr>
      </template>
    
  </q-table>
  
  </q-page>
</template>

<script>
import { mapActions , mapGetters} from "vuex";
export default {
  name: 'classes',
  data(){
    return {
      prompt: false,
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
            { name: 'description', align: 'center', label: 'Description', field: 'description', sortable: true },
            { name: 'seats', align: 'center', label: 'seats', field: 'seats', sortable: true },
            { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: false },
        ],
        studColumn:[
          {name:'studname',label: 'Name',align: 'left',sortable: false},
          {name:'age',label: 'Age',align: 'left',sortable: false},
          {name:'action',label: 'UnEnroll',align: 'left',sortable: false},
        ],
        studDetails:[],
        reloadList:true
    } 
  },
  methods:{
      async classStudDetails(datas){
        await this.$store.dispatch('getClassStudentList',datas.registeredStud).then(response =>{
          
          let data = this.studDetails;
          data[datas.id]=response;
          this.reloadList = false;
          this.$nextTick(()=>{
           this.studDetails = data;
           this.reloadList = true;
          
          })
        });       
      },
      removeStudent()
      {

      }
    },
  computed:{
    ...mapGetters(['childData']),
    user(){
      return this.$store.state.loginUser;
    },
    rows(){
        return this.$store.state.classes
    },
  },
}
</script>

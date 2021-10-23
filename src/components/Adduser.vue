<template>
    <div class="adduser">
        <div class="form">
            <FormulateForm @submit="addSuperUser">
            <FormulateInput
            v-model="usertype"
            :options="{first: 'Super User', second: 'Admin', third: 'Coach'}"
            type="select"
         
            placeholder="Select Role"
             />
                <FormulateInput type="email" name="email" placeholder="Email" Validation="required|email"    v-model="email"/>
                <FormulateInput type="password" name="role" placeholder="Password" Validation="required" v-model="password"/>
                <FormulateInput name="Password" placeholder="Confirm Password" Validation="required" v-model="confirm"/>
                <FormulateInput type="text" name="name" placeholder="First Name" Validation="required" v-model="first_name"/>
                <FormulateInput type="text" name="name" placeholder="Last Name" Validation="required" v-model="last_name"/>
                <FormulateInput type="text" name="phone" placeholder="Phone" Validation="required" v-model="phone"/>
                <FormulateInput
                 v-model="type"
                 :options="{first: 'FullTime', second: 'PartTime'}"
                 type="select"
                 placeholder="Select Type"
  
                 />

              <FormulateInput
              v-model="status"
              :options="{first: 'Active', second: 'Closed', third: 'Dormant'}"
              type="select"
              placeholder="Select Status"
  
              />
                 <FormulateInput
                 type="submit"
                name="Add User "
                />
            </FormulateForm>
          
        
        </div>
    </div>
</template>
<script>
export default{
    name: 'Adduser',
    data(){
        return{
               usertype: "",
               email: "",
               password: "",
               confirm: "",
               first_name: "",
               last_name: "",
               phone: "",
               type: "",
               status: "",
               program: ""
        
           }

    },
    methods:{
        addSuperUser(){
             const data ={
                   "usertype": this.usertype,
                   "email": this.email,
                   "password": this.password,
                   "confirm": this.confirm,
                   "first_name": this.first_name,
                   "last_name": this.last_name,
                   "phone": this.phone,
                   "type": this.type,
                   "status": this.status,
                   "program": this.program,
               }
               console.log(data)
                return this.$axios.post("https://3.7.128.140:9083/admin/api/addSuperUser", data )
               .then((resp)=>{
                   console.log("Response",resp)
               }).catch(error=>{
                   console.log("Error",error.resp)
               }).then(alert('User Added'))
        }


    }
};

</script>
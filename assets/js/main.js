const { createApp } = Vue

createApp({
data() {
    return {
        
        email:'',
        array:[]

    }
},
created(){
    for(let i=0;i<10;i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((mario)=>{
            console.log(mario)
            this.email=mario.data.response
            this.array.push(this.email)
        })
    }       
    
},
methods:{

    
    

}
}).mount('#app')
<template>
<ul>
  <li v-for="(item,index) in data" :key="index">
    {{item}}
  </li>
</ul>
  
</template>

<script>
export default {
  name:'ATNio',
  data(){
    return{
      firstName: 'John',
      lastName: 'Doe',
      firstName: 'John',
      lastName: 'Doe',
      firstName: 'John',
    }
  },
  
}
</script>

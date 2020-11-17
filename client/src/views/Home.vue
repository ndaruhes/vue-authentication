<template>
  <div>
    <template v-if="this.loader"> 
      Loading...
    </template>
    <TheNavigation/>
    <div class="container">
      Home Page
    </div>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
// import Loading from '@/components/Loading'
// import {mapActions} from 'vuex'
export default {
  name: 'home',
  data(){
    return{
      loader: true
    }
  },
  created(){
    this.loader = true
    console.log('true');
  },
  mounted(){
    this.loader = false
    console.log('false');
  },
  components: {TheNavigation},
}
</script>

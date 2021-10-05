<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <FlightCard></FlightCard>
  </div>
</template>

<script>
import FlightCard from '../../components/FlightCard'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    FlightCard,
    // HelloWorld
  }
}
</script>

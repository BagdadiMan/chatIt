<template>
  <div class="back">
    <v-app id="app">
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="css">
#app {
  background: none;
}
.back {
  background-image: url('../public/images/avocado_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

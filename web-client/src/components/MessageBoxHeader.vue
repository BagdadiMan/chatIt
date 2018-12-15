<template>
  <v-toolbar color="cyan" dark flat>
    <v-avatar>
      <img :src=this.currentChat.avatar>
    </v-avatar>
    <span class="headline ml-3" id="userName">
        {{ this.currentChat.name }}
    </span>
    <v-spacer></v-spacer>
    <v-btn icon>
        <v-icon>
            search
        </v-icon>
    </v-btn>
    <v-btn icon>
        <v-icon>
            attach_file
        </v-icon>
    </v-btn>
    <v-btn icon>
        <v-icon>
            more_vert
        </v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  // eslint-disable-next-line
  computed: mapState (['currentChat'])
}
</script>

<style lang="css">
</style>

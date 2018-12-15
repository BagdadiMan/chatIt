<template>
  <v-layout align-center justify-center row wrap>
    <v-flex xs3 mt-5>
      <Inbox />
    </v-flex>
    <v-flex xs7 mt-5>
      <MessageBox />
    </v-flex>
  </v-layout>
</template>

<script>
import Inbox from '../components/Inbox'
import MessageBox from '../components/MessageBox'
export default {
  components: {
    Inbox,
    MessageBox
  }
}
</script>

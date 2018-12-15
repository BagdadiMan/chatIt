<template>
  <v-toolbar color="grey lighten-3" flat>
    <v-icon id="emoticonIcon" medium color="grey" @click="showEmoticons">
      insert_emoticon
    </v-icon>
    <v-text-field
    id="messageField"
    placeholder="type a message"
    solo
    flat
    class="my-2"></v-text-field>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    showEmoticons () {}
  }
}
</script>

<style lang="css">
.v-input>.v-input__control>.v-input__slot {
  border-radius: 100px;
}
#emoticonIcon {
  margin: auto 10px auto auto;
}
</style>

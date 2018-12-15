<template>
  <div class="message" :class="{ cyan : Sender, white : !Sender, right: !Sender, left : Sender }">
    <span class="subheading messageText">
      {{ messageText }}
    </span>
    <span class="caption grey--text text--darken-2 messageHour">
      {{ messageHour }}
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    messageText: {
      required: true,
      type: String
    },
    messageHour: {
      required: true,
      type: String
    },
    Sender: Boolean
  },
  computed: {
    backgroundColor: function () {
      return (this.isSender ? 'cyan' : 'white')
    }
  }
}
</script>

<style lang="css">
.message {
  border-radius: 5px;
  display: flex;
  position: relative;
  max-width: 65%;
  clear: both;
  margin-bottom: 2px;
}
span.messageText {
  padding: 6px 8px 7px 6px;
}
span.messageHour {
  margin-top: auto;
  padding-right: 8px;
  padding-left: 5px;
}
.left ::selection {
  background: yellow;
}
</style>

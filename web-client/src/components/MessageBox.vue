<template>
  <v-card id="messageBox">
    <MessageBoxHeader />
      <v-container class="scroll-y" id="actualMessages">
        <Message
        :key="index"
        :Sender=message.Sender
        :messageText=message.messageText
        :messageHour=message.messageHour
        v-for="(message, index) in messages"></Message>
      </v-container>
    <MessageBoxFooter />
  </v-card>
</template>

<script>
import Message from '@/components/Message'
import MessageBoxHeader from '@/components/MessageBoxHeader'
import MessageBoxFooter from '@/components/MessageBoxFooter'
export default {
  data () {
    return {
      messages: [
        { Sender: true, messageText: 'Hi', messageHour: '11:29' },
        { Sender: false, messageText: 'Hi', messageHour: '11:29' },
        { Sender: true, messageText: 'How are you?', messageHour: '11:30' },
        { Sender: false, messageText: 'Getting better', messageHour: '11:31' },
        { Sender: false, messageText: 'How \'bout you?', messageHour: '11:31' },
        { Sender: true, messageText: 'Good', messageHour: '11:31' },
        { Sender: false, messageText: 'K', messageHour: '11:31' },
        { Sender: true, messageText: 'bye', messageHour: '11:32' },
        { Sender: false, messageText: 'bye', messageHour: '11:32' },
        { Sender: true, messageText: 'Hi', messageHour: '11:29' },
        { Sender: false, messageText: 'Hi', messageHour: '11:29' },
        { Sender: true, messageText: 'How are you?', messageHour: '11:30' },
        { Sender: false, messageText: 'Getting better', messageHour: '11:31' },
        { Sender: false, messageText: 'How \'bout you?', messageHour: '11:31' },
        { Sender: true, messageText: 'Good', messageHour: '11:31' },
        { Sender: false, messageText: 'K', messageHour: '11:31' },
        { Sender: true, messageText: 'bye', messageHour: '11:32' },
        { Sender: false, messageText: 'bye', messageHour: '11:32' },
        { Sender: false, messageText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam delectus officiis voluptate repudiandae reiciendis distinctio et incidunt, hic rem consectetur fuga, in deserunt itaque modi, magni pariatur molestias enim! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ullam, dolor rerum error voluptates iste cupiditate assumenda porro. Eveniet alias laborum atque dolorum sint dolore asperiores veniam enim officiis suscipit?', messageHour: '11:32' }
      ]
    }
  },
  components: {
    Message,
    MessageBoxHeader,
    MessageBoxFooter
  }
}
</script>

<style lang="css">
.indigo {
  height: 765px;
}
table {
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
  max-height: 700px;
}
#messageBox {
  height: 765px;
  background-image: url('../../public/images/chat_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
#actualMessages {
  height: 637px;
}
</style>

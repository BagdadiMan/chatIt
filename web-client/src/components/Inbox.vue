<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Inbox</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
      v-model="searchText"
      label="Search..."
      append-icon="search"></v-text-field>
    </v-toolbar>
    <v-container fluid class="scroll-y" id="inboxItemsList">
      <v-list two-line>
        <template v-for="(item, index) in filteredInBoxItems">
        <v-list-tile @click="swapChat(index)" :key="index">
          <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.name"></v-list-tile-title>
              <v-list-tile-sub-title>
                <span class="caption left" v-html="item.lastMessage"></span>
                <span class="caption right" v-html="item.lastMessageHour"></span>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="index+1*100"></v-divider>
        </template>
      </v-list>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      inboxItems: [
        { name: 'Galit Amsalem', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', lastMessage: 'Enjoy ♥♥♥', lastMessageHour: '17:05' },
        { name: 'Gili Avraham', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', lastMessage: 'I love you ♥', lastMessageHour: '16:22' },
        { name: 'Noam Dahan', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', lastMessage: 'I hate you ♥', lastMessageHour: '6:07' },
        { name: 'Romi Cohen', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', lastMessage: 'Talk to me', lastMessageHour: '3:01' },
        { name: 'Bro', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', lastMessage: 'Want some pizza?', lastMessageHour: '00:17' },
        { name: 'Galit Amsalem', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', lastMessage: 'Enjoy ♥♥♥', lastMessageHour: '17:05' },
        { name: 'Gili Avraham', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', lastMessage: 'I love you ♥', lastMessageHour: '16:22' },
        { name: 'Noam Dahan', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', lastMessage: 'I hate you ♥', lastMessageHour: '6:07' },
        { name: 'Romi Cohen', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', lastMessage: 'Talk to me', lastMessageHour: '3:01' },
        { name: 'Bro', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', lastMessage: 'Want some pizza?', lastMessageHour: '00:17' },
        { name: 'Galit Amsalem', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', lastMessage: 'Enjoy ♥♥♥', lastMessageHour: '17:05' },
        { name: 'Gili Avraham', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', lastMessage: 'I love you ♥', lastMessageHour: '16:22' },
        { name: 'Noam Dahan', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', lastMessage: 'I hate you ♥', lastMessageHour: '6:07' },
        { name: 'Romi Cohen', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', lastMessage: 'Talk to me', lastMessageHour: '3:01' },
        { name: 'Bro', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', lastMessage: 'Want some pizza?', lastMessageHour: '00:17' },
        { name: 'Galit Amsalem', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', lastMessage: 'Enjoy ♥♥♥', lastMessageHour: '17:05' },
        { name: 'Gili Avraham', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', lastMessage: 'I love you ♥', lastMessageHour: '16:22' },
        { name: 'Noam Dahan', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', lastMessage: 'I hate you ♥', lastMessageHour: '6:07' },
        { name: 'Romi Cohen', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', lastMessage: 'Talk to me', lastMessageHour: '3:01' },
        { name: 'Bro', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', lastMessage: 'Want some pizza?', lastMessageHour: '00:17' }
      ],
      searchText: ''
    }
  },
  computed: {
    filteredInBoxItems: function () {
      return this.inboxItems.filter(inboxItem => inboxItem.name.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  },
  methods: {
    swapChat (index) {
      this.$store.dispatch('swapChat', this.filteredInBoxItems[index])
    }
  }
}
</script>

<style lang="css">
#inboxItemsList {
  height: 700px;
  padding: 0;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="retrieveData(Othermessage)"/>
    <p>{{Othermessage}}</p>
<b-message title="Default" aria-close-label="Close message">
            {{Othermessage}}
        </b-message>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      Othermessage: "This is my other message"
    }
  },
  methods: {
    retrieveData: (myMessage)=> {
      const updateMessage = myMessage + ' and this is the additional part';
      return updateMessage;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input type="text" v-model="userData.firstname" placeholder="First name" />

    <br />
    <br />

    <input type="text" v-model="userData.lastname" placeholder="Last name" />

    <br />
    <br />

    <select v-model="selectedSize">
      <option v-for="option in options" v-bind:value="option.value">{{ option.text }}</option>
    </select>
    <br />
    <br />

    <button @click="startGame">Start Game</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      userData: {
        firstname: "",
        lastname: ""
      },
      selectedSize: "",
      options: [
        { text: "5X5", value: "5" },
        { text: "6X6", value: "6" },
        { text: "7X7", value: "7" },
        { text: "8X8", value: "8" }
      ]
    };
  },
  methods: {
    startGame() {
      this.$router.push({ name: "game", params: { userData: this.userData, size: this.selectedSize } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

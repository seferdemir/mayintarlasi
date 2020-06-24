<template>
  <div class="game">
    <h1>Oyuna basla</h1>

    <div :key="row.id" v-for="row in rows">
      <button
        :key="col.id"
        v-for="col in row"
        v-bind:style="col ? 'background: red' : 'background: green'"
        class="column"
        @click="handleClick(col)"
      ></button>
    </div>
  </div>
</template>

<script>
import { randomInt } from "../helper.js";

export default {
  created() {
    let size = parseInt(this.$route.params.size);
    this.firstName = this.$route.params.userData.firstname;
    this.lastName = this.$route.params.userData.lastname;

    console.log("size", size);

    const arr2d = Array(size)
      .fill(0)
      .map(() => Array(size).fill(false));

    for (var i = 0; i < size; i++) {
      let random = randomInt(i, size);
      arr2d[i][random] = true;
    }

    this.rows = { ...arr2d };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      rows: [[]],
      scores: [],
      score: 0
    };
  },
  methods: {
    handleClick(col) {
      if (col) {
        this.scores.push(this.score);
        alert(
          "Bomb \n" +
            this.$route.params.firstName +
            " " +
            this.$route.params.lastName +
            "/n" +
            "Your best score:" +
            this.scores.sort((a, b) => parseFloat(a) - parseFloat(b))[0]
        );
      } else this.score++;
    }
  },
  computed: {
    setBackground() {
      return {
        "bg-red": this.col,
        "bg-green": !this.col
      };
    }
  }
};
</script>

<style>
.bg-red {
  background: red;
}
.bg-orange {
  background: orange;
}
.bg-green {
  background: green;
}
.column {
  display: table-cell;
  padding: 25px;
}
</style>
<template>
<div class="hello">
    <p v-for="(item,index) in list.N" :key="index">
      <span v-for="(itm,idx) in list.M" :class="getRandomInt(2) == 1? 'red':'blue'" :key="idx"></span>
    </p>
</div>

</template>

<script>
// import data from '../mock/mock.js';

export default {
  name: 'HelloWorld',
  data () {
    return {
      list: {}
    }
  },
  created () {
    this.$http.get('http://test.cn').then((res) => {
      this.list = res.data.data
      console.log(this.list)
    })
  },
  methods: {
    getRandomInt (max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
  }
}
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}
span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 10px;
}
.red {
  background: red;
}
.blue {
  background: blue;
}
</style>

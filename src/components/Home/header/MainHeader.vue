<template>
  <header>
    <form autocomplete="off">
        <input v-model="getInput" @input="searchDirection" class="inputArea" @focus="focus = true" type="text" id="searchinput" placeholder="where to?">
        <label class="searchSymbole" for="searchSymbole">🔍</label>
        <div class="autoSearch" v-if="getInput && focus">
          <ul>
            <li v-for=" i in cityDirection" :key="i" @click="setCity(filteredCity)">{{i.city}}</li>
          </ul>
        </div>
    </form>
    <h1 class="title">Ouarzazate Tour</h1>
    <router-link :to="{ name: 'bookingLink'}"><button class="booking">Book Now!</button></router-link>
  </header>
</template>
<script scoped>
  import directions from './citiesArray'
  export default {
    data() {
      return {
        whereTo: directions,
        focus:false,
        getInput:'',
        cityDirection:[]
      }
    },
    methods: {
      searchDirection() {
        this.cityDirection = this.whereTo.filter(item=>{
          return item.city.toLowerCase().startsWith(this.getInput.toLowerCase());
        })
      },
      setCity(filteredCity){
        this.getInput = filteredCity
        this.focus = false
      }
    },
  }
</script>
<style scoped>
  Header{
    flex-wrap: wrap;
    background-image: url('@/assets/img/homePage/headerImg/cover.jpg');
    background-color: rgb(189, 189, 180);
    height: 30em;
    animation: imagesAnimation 35s linear infinite 0s;
  }
  @keyframes imagesAnimation {
    0% {
      background-image: url('@/assets/img/homePage/headerImg/cover.jpg');
    }
    10% {
      background-image: url('@/assets/img/homePage/headerImg/cover1.jpg');
    }
    20% {
      background-image: url('@/assets/img/homePage/headerImg/cover2.jpg');
    }
    30% {
      background-image: url('@/assets/img/homePage/headerImg/cover3.jpg');
    }
    40% {
      background-image: url('@/assets/img/homePage/headerImg/cover4.jpg');
    }
    50% {
      background-image: url('@/assets/img/homePage/headerImg/cover5.jpg');
    }
    60% {
      background-image: url('@/assets/img/homePage/headerImg/cover6.jpg');
    }
    70% {
      background-image: url('@/assets/img/homePage/headerImg/cover7.jpg');
    }
    80% {
      background-image: url('@/assets/img/homePage/headerImg/cover8.jpg');
    }
    90% {
      background-image: url('@/assets/img/homePage/headerImg/cover9.jpg');
    }
    100% {
      background-image: url('@/assets/img/homePage/headerImg/cover10.jpg');
    }
  }
  .inputArea{
    width: 30%;
    height: 40px;
    padding: 12px;
    border: solid 3px white;
    border-style: double;
    font-size: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    resize: vertical;
    margin: 5px 0px 0px 5px;
    background-color: transparent;
  }
  .inputArea:hover{
    background-color: white;
  }
  .searchSymbole{
    font-size: 20px;
    padding-left: 10px;
    background-color: transparent;
  }
  .autoSearch{
    width: 30%;
    box-sizing: border-box;
    resize: vertical;
    margin: 5px 0px 0px 5px;
    line-height: 1;
    font-size: 2em;
    font-family: booterfont;
  }
  .autoSearch ul{
    position: absolute;
    width: 29%;
    margin-top: 0px;
    background-color: white;
    list-style-type: none;
    padding-left: 15px;
  }
  li:hover{
    background-color: rgb(232, 226, 226);
  }
  .title{
    font-family: 'booterfont';
    color: white;
    font-size: 5em;
    text-align: center;
    font-weight: normal;
  }
  @media all and (max-width: 350px) {
    .title{
    font-size: 2em;
  }
  .inputArea{
  width: 5em;
    }
  }
  .booking{
    margin:0em 1px 20px 20% ;
    max-width: 12em;
    max-height: 3em;
    border-start-start-radius: 50px;
    border-end-end-radius: 50px;
    font-weight: bold;
    font-size: 15px;
    background: transparent;
    animation: movementTitle 8s infinite ;
  }
  @keyframes movementTitle{
    from {
      transform: translateY(8em);
    }
    to {
      transform: translateX(12em);
      color: white;
      background-color: rgb(201, 110, 110);
      border: none;
      transform: rotate(50deg);
    }
  }
  @media all and (max-width: 350px) {
    .booking{
      width: 8em;
      font-size: 6px;
    }
    @keyframes movementTitle{
      from {
        transform: translateY(20em);
      }
      to {
        transform: translateY(10em);
        color: white;
        background-color: rgb(17, 16, 16);
        border: none;
      }
    }
  }
  .booking:hover{
    background-color: aquamarine;
  }
</style>
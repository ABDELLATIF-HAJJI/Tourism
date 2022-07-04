<template>
    <header>
          <form>
              <label class="searchSymbole" for="searchSymbole">🔍</label>
              <input class="inputArea" type="text" id="searchinput" placeholder="where to?">
          </form>
      <h1 class="title">Ouarzazate</h1>
      <router-link :to="{ name: 'bookingLink'}"><button class="book">Book Now!</button></router-link>
    </header>


</template>

<style scoped>
Header{
  flex-wrap: wrap;
  background-image: url('@/assets/img/headerImg/headerCover.jpg');
  background-color: rgb(189, 189, 180);
  height: 25em;
}
.searchSymbole{
  font-size: 15px;
  padding-left: 10px;
  background-color: transparent;
}
.inputArea{
  margin-top: 2px;
  border-radius: 5px;
  padding-left: 10px;
  border: solid 0.1px;
  background-color: #d4d8dd;
}
.title{
  font-family: 'booterfont';
  color: white;
  font-size: 8em;
  text-align: center;
  font-weight: normal;
}
.book{
  border-style: ridge;
  margin:5px 1px 20px 20% ;
  width: 10em;
  max-height: 3em;
  border-radius: 5px;
  animation: movementTitle 5s infinite ;
}
@keyframes movementTitle{
  from {
    transform: translateX(1em);
  }
  to {
    transform: translateX(5);
  }
}
.book:hover{
  background-color: aquamarine;
  transform: skewX(20deg);
}
</style>
<script>
export default {
  
}
</script>
<template>
    <header>
          <form>
              <label class="searchSymbole" for="searchSymbole">🔍</label>
              <input class="inputArea" type="text" id="searchinput" placeholder="where to?">
          </form>
      <h1 class="title">Ouarzazate Tour</h1>
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
.book{
  border-style: ridge;
  margin:0em 1px 20px 20% ;
  width: 10em;
  max-height: 3em;
  border-radius: 5px;
  animation: movementTitle 8s infinite ;
}
@keyframes movementTitle{
  from {
    transform: translateY(10em);
  }
  to {
    transform: translateX(10em);
    color: white;
    background-color: rgb(17, 16, 16);
    border: none;
  }
}
@media all and (max-width: 350px) {
  .book{
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
.book:hover{
  background-color: aquamarine;
}
</style>
<script>
export default {
  
}
</script>
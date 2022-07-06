<template>
<div>
  <div class="topContainer"></div>
    <nav>
    <router-link to="/home">Home</router-link>
    <router-link to="/trips">Trips</router-link>
    <router-link to="/about">Contact us</router-link>
    <router-link to="/Login">Log in</router-link>
    </nav>
    <div class="background">
      <p class="subTitle">Discover New Places</p>
    </div>
  <router-view/>
</div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.topContainer{
  height: 15px;
background-color: rgb(128, 128, 47);
}
nav {
  background-color: rgb(232, 225, 225);
  text-align: end;
  height: 35px;
  padding-top: 12px;
  font-size: 13px;
}
nav a {
  flex-wrap: wrap;
  font-weight: bold;
  margin-right: 30px;
  color: black;
  text-decoration: none;
}
a:first-child {
  float: left;
  margin-left: 3em;
  font-family: booterfont;
  font-size: 2em;
}
a:last-child{
border-radius: 10px;
color: white;
background-color: black;
}
nav a.router-link-exact-active {
  color: #1d7a0d;
}
nav a:hover{
  background-color:rgb(17, 249, 241);
  max-height: 1em;
}
.subTitle{
  font-family: 'Lobster', cursive;
  padding-left: 18em;
  margin-top: auto;
  margin-bottom: 0px;
  height: 18px;
  animation: movementTitle 5s infinite ;
}
.background{
  background-color: rgb(128, 128, 47);
}          
@keyframes movementTitle{
  from {
    transform: translateX(50em);
  }
  to {
    transform: translateX(0);
  }
}
 @media all and (max-width: 350px) {
  nav {
  text-align: center;
  font-size: 12px;
}
nav a {
  margin-right: 8px;
  color: black;
  text-decoration: underline ;
}
a:first-child {
  font-size: 1.5em;
}
  }
</style>
<script>
export default {
  
 
}
</script>
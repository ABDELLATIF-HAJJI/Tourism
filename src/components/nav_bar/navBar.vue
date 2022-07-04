<template>
<div>
  <div class="topContainer"></div>
    <nav>
    <router-link to="/HomeNav">Home</router-link>
    <router-link to="/TripsNav">Trips</router-link>
    <router-link to="/aboutUs">Contact us</router-link>
    <router-link to="/LogInNav">Log in</router-link>
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
  background-color: rgb(89, 96, 92);
  text-align: end;
  height: 35px;
  padding-top: 12px;
  font-size: 13px;
}

nav a {
  flex-wrap: wrap;
  font-weight: bold;
  margin-right: 30px;
  color: rgb(220, 216, 216);
  text-decoration: none
}
a:first-child {
  float: left;
  margin-left: 3em;
  font-family: booterfont;
  font-size: 1.5em;
}
a:last-child{
border-radius: 10px;
color: white;
background-color: black;
}
nav a.router-link-exact-active {
  color: #11e083;
}
nav a:hover{
    background-color:rgba(242, 234, 231, 0.3);
    height: 1.5em;
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
</style>
<script>
export default {
  
 
}
</script>
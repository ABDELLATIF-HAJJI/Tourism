<template>
<div>
    <nav>
    <router-link to="/home">Home</router-link>
    <router-link to="/trips">Trips</router-link>
    <router-link to="/about">Contact us</router-link>
    <router-link to="/Login">Log in</router-link>
    </nav>
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
nav {
  margin-top: 20px;
  background-color: rgb(17, 15, 15);
  text-align: end;
  height: 60px;
  padding-top: 20px;
  font-size: 17px;
  border-top: solid white 5px;
  border-bottom: solid white;
  border-style: groove;
}
nav a {
  flex-wrap: wrap;
  margin-right: 40px;
  color: white;
  text-decoration: none;
  font-size: 1.3em;
}
a:first-child {
  font-family:"Metal Mania";
  font-weight: bold;
  float: left;
  margin-left: 3em;
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
  background-color: rgb(150, 143, 143);
}
.discoverTitle{
  text-align: center;
  font-family: 'Lobster', cursive;
  padding-left: 18em;
  margin: auto;
  height: 18px;
  animation: movementTitle 5s infinite;
}
.background{
  height: 10px;
  background-color: rgb(128, 128, 47);
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
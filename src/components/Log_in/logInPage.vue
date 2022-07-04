<template>
   <div class="main-container">
    <form>
      <h1>LOG IN</h1>
      <label for="fname">Your username</label><br>
      <input type="text" id="fname" name="fname" placeholder="Enter Username" required><br><br>
      <label for="password">Your password</label><br>
      <input type="password" id="password" name="password" placeholder="Enter Password" required><br><br>
      <input type="checkbox" id="remember" name="remember" value="remember">
      <label for="remember"> Remember me</label><br>
      <button class="bt logIn">Log in</button>
      <p>you don't have account!</p>
      <router-link :to="{ name: 'signUp' }"> <button class="bt signUp">Sign up</button>
</router-link>
     
    </form>
  </div>
</template>

<script>

</script>

<style scoped>
.main-container{
  margin: auto;
  margin-top: 30px;
  width: 50%;
  padding: 10px;
  border: solid 2px rgb(182, 201, 182);
  width: 20em;
  background-color: rgb(228, 224, 218);
  font-size: 12px;
  border-radius: 10px;
}
h1{
  font-family: 'Rampart One', cursive;
  font-weight: 1;
  text-decoration: underline;
  text-align: center;
}
.bt{
  
  background-color: #007bff;
  border-radius: 5px;
   width: 15em;
}
</style>

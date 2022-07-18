<template>
   <div class="main-container">
    <form>
      <h1>SIN UP</h1>
      <label for="fname">Your username</label><br>
      <input type="text" id="fname" name="fname" placeholder="Enter Username" required><br>
      <label for="fname">Your email</label><br>
      <input type="text" id="email" name="email" placeholder="Enter Email" required><br>
      <label for="password">Your password</label><br>
      <input type="password" id="password" name="password" placeholder="Enter Password" required><br>
      <label for="password">Confirm your password</label><br>
      <input type="password" id="passConfirmation" name="password" placeholder="Repeat Password" required><br><br>
     <input type="checkbox" id="remember" name="remember" value="remember">
      <label for="remember"> Remember me</label><br>
      <button class="bt logIn">Sign up</button>
      <p>you already have an account!</p>
      <router-link :to="{ name: 'login' }"><button class="bt signUp">Log in</button>
</router-link>
      
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .main-container{
  margin: auto;
  margin-top: 3em;
  margin-bottom: 3em;
  max-width: 50%;
  padding: 10px;
  border: solid 2px rgb(182, 201, 182);
  width: 60em;
  background-color: rgb(228, 224, 218);
  font-size: 20px;
  border-radius: 10px;
  }
  h1{
    font-family: 'Rampart One', cursive;
    font-weight: 1;
    text-decoration: underline;
    text-align: center;
  }
  input[type=text], [type=password]{
    width: 60%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  input::placeholder {
    font: 10px sans-serif;
  }
  .bt{
  background-color: rgb(5, 78, 115);
  color: white;
  font-weight: bold;
  padding: 5px 20px;
  border: none;
  border-radius: 4px;
  }
</style>
  
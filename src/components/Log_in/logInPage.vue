<template>
  <div class="main-container">
    <h1>LOG IN</h1>
    <form>
      <label for="fname">Your username</label><br>
      <input type="text" id="fname" name="fname" placeholder="Enter Username" required><br><br>
      <label for="password">Your password</label><br>
      <input type="password" id="password" name="password" placeholder="Enter Password" required><br><br>
      <input type="checkbox" id="remember" name="remember" value="remember">
      <label for="remember"> Remember me</label><br>
      <button class="bt logIn">Log in</button>
      <p>You don't have account!</p>
      <router-link :to="{ name: 'sign' }"> <button class="bt signUp">Sign up</button>
      </router-link>
    </form>
  </div>
</template>
<script>

</script>

<style scoped>
  .main-container{
    margin: auto;
    margin-top: 5em;
    margin-bottom: 5em;
    max-width: 50%;
    padding: 10px;
    border: solid 2px rgb(182, 201, 182);
    width: 60em;
    background-color: rgb(228, 224, 218);
    font-size: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 15px 10px rgb(189, 183, 183);
  }
  h1{
    font-family: 'Rampart One', cursive;
    font-weight: 1;
    text-decoration: underline;
    text-align: center;
  }
  form{
    margin: 5px 50px 5px 60px;
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
  form p{
    margin-bottom: 0px;
  }
</style>
  
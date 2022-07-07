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
  margin-top: 30px;
  max-width: 50%;
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
  width: 14em;
}
 @media all and (max-width: 385px) {
  .main-container{
    margin-top: 30px;
    padding: 15px;
    width: 20em;
    font-size: 12px;
  }
  h1{
    font-size: 1.5em;
  }
  .bt{
    max-width: 5em;
  }
  input{
    max-width: 10em;
    max-height: 12px;
  }
  }
  @media all and (max-width: 286px) {
    .main-container{
      padding: 7px;
      font-size: 10px;
      padding-left: 1px;
    }
    input{
      max-width: 8em;
      max-height: 10px;
    }
    .bt{
      max-width: 5em;
      height: 2em;
      font-size: 10px;
    }
  }
  @media all and (max-width: 242px) {
    input{
      width: 3em;
    }
      .bt{
      max-width: 3em;
      height: 3em;
    }
  }
</style>

<template>
  <div class="formContainer">
    <form>
      <div class="name">
        <label for="name">YOUR NAME</label><br>
        <input type="text" id="name" name="name" value="" placeholder=" write your name" required><br>
      </div>
      <div class="flexInput">
        <div>
          <label for="number">YOUR NUMBER</label><br>
          <input type="contact" id="contact" name="contact" value="" required placeholder="write your number"><br>
        </div>
        <div>
          <label for="email">EMAIL ADDRESS</label><br>
          <input type="email" id="email" name="email" value="" placeholder="write your email" required><br>
        </div>
        <div>
          <label for="text">YOUR DESTINATION</label><br>
          <input type="text" id="Destination" name="Destination" value="" placeholder="write your Destination" required><br>
        </div>
        <div class="date">
          <label for="date">YOUR TRAVEL DATE</label><br>
          <input class="inputDate" type="date" id="date" name="date" value="" placeholder="write your travel date" required><br>
        </div>
      </div>
      <div class="comment">
        <label class="textareaLabel" for="comment">YOUR COMMENT</label><br>
        <textarea name="comment" id="comment" cols="30" rows="3" placeholder="write your comment"></textarea><br>
      </div>
      <input class="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.formContainer{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 12px;
  max-width: 50em;
  height: 20em;
  border-radius: 20px;
  background-color: white;
}
.name{
  margin: 5px 17px 5px 15em;
  width: 16em;
}
input{
  width: 20em;
  height: 2em;
  background-color: rgba(245, 247, 244, 0.986);
  margin-bottom: 3px;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
}
label{
  font-size: 12px;
  margin: 40px 0px 0px 20px;
}
.flexInput{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
textarea{
  background-color: rgba(245, 247, 244, 0.986);
  border-radius: 5px;
  margin: 5px 17px 5px 22em;
  border-radius: 5px;
  width: 16em;
  height: 5em;
}
.textareaLabel{ 
  margin: 5px 17px 5px 25em;
}
.submit{
  width: 6em;
  margin: 4px 17px 5px 27em;
  background-color: blue;
}
.submit:hover{
  background-color: rgb(70, 137, 208);
}
</style>
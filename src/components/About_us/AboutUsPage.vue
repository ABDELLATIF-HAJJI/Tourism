<template>
  <div>
    <p class="aboutP">
      <strong><i>Ouarzazate tour</i></strong>! We are a family in Ouarzazate city. Thanks to the years we have experienced in tourism, we have created this web "Ouarzazate tour" to organize Morocco desert tours. Besides, we specialize in arranging day trips and desert excursions in the Merzouga desert and other cities. In addition to that, we offer special tours for groups, families, couples, and solo travelers. In general, we invite you to Morocco with various cultures and tourist attractions to visit. It is the country of unexpected landscapes, customs, history, and the hospitality of its inhabitants that will surprise you. Thus, our aim is to make you explore and experience the cultural side of Morocco.
    </p>
    <div class="imagesContainer">
      <div class="container" v-for="i in imagesContent" :key="i">
        <img :src="i" alt="ourImages"> 
      </div>
    </div>
    <div class="contactUs">
      <form autocomplete="off">
         <p><strong>feel free to say what in your mind!</strong></p>
        <ul>
          <li>
            <label for="name">Name:</label><br>
            <input v-model="name" type="text" id="name" name="user_name" placeholder="Entre your name" required />
          </li>
          <li>
            <label for="mail">E-mail:</label><br>
            <input v-model="email" type="email" id="mail" name="user_email" placeholder="Entre your email" required />
          </li>
          <li>
            <label for="msg">Message:</label>
            <textarea v-model="msg" id="msg" name="user_message" placeholder="Entre your message" required></textarea><br>
             <button class="sendBt" type="submit" @click="greeting">send</button>
          </li>
        </ul>
      </form>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name:'',
        email:'',
        msg:'',
        imagesContent:[
          require('@/assets/img/about_us/ouarzazate.jpg') ,
          require('@/assets/img/about_us/ouarzazate1.jpg'),
          require('@/assets/img/about_us/ouarzazate2.jpg'),
          require('@/assets/img/about_us/ouarzazate3.jpg'),
          require('@/assets/img/about_us/ouarzazate4.jpg'),
          require('@/assets/img/about_us/ouarzazate5.jpg'),
          require('@/assets/img/about_us/ouarzazate6.jpg'),
          require('@/assets/img/about_us/ouarzazate7.jpg'),
        ]
      }
    },
    methods: {
      greeting: function () {
        this.name && this.email && this.msg !== '' ? alert('thanks for your message'): ProgressEvent;
      }
    },
  }
</script>

<style scoped>
  .aboutP{
    margin: auto;
    border: solid 1px gray;
    border-radius: 8px;
    border-style: groove;
    max-width: 70em;
    font-size: 18px;
    flex-wrap: wrap;
    margin-bottom: 2em;
    margin-top: 5em;
    padding: 15px;
  }
  p{
    text-align: center;
    line-height: 1.6;
    color: rgb(132, 7, 7);
  }
  .imagesContainer{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    background-color: rgb(75, 58, 35);
    padding: 8px;
    border-top: 3px groove rgb(176, 170, 170);
    border-bottom: 3px groove rgb(176, 170, 170);
  }
  .container{
    width: 10em;
    height: 12em;
  }
  .container img{
    max-width: 20em;
    max-height: 10em;
    border-radius: 5px;
  }
  .container img:hover{
    transform: scale(1.1);
  }
  .contactUs{
    box-sizing: border-box;
    margin: auto;
    border: solid 1.2px;
    padding-right: 20px;
    max-width: 60em;
    border: none;
    border-radius:10px;
    background-color: rgb(243, 243, 237);
    box-shadow: 20px 10px rgb(198, 198, 185);
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: space-between;
  }
  input{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  textarea{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-style: groove;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  .sendBt{
    background-color: rgb(5, 78, 115);
    color: white;
    font-weight: bold;
    padding: 5px 20px;
    border: none;
    border-radius: 4px;
    float: right;
  }
  .sendBt:hover{
    color: black;
    background-color: rgb(217, 209, 209);
  }
</style>
  
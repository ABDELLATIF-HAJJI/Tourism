<template>
  <div class="homeSections">
    <h2>Tops directiones</h2>
    <section >
      <div class="directionContainer">
        <div class="directionsCard" v-for="(city, index) in cities" :key="index">
          <div>
            <img class="directionsImg" :src="city.images[0]" alt="city">
          </div>
          <h3>{{city.name}}</h3>
          <p class="directionsDescription">{{city.description}}</p>
          <span> If you want to know more about {{city.name}}<a :href="city.readMore"> <br> click here</a></span>
        </div>
      </div>
    </section>
    <h2>Trips Experiences over world</h2>
    <!--I have not completed it yet, it is an empty section-->
    <section>
      <div class="secondSection">
        <div class="container">
          <div class="imgContainer">
            <img src="" alt="">
          </div>
          <p class="content"></p>
        </div>
      </div>
    </section>
    <section>
      <div class="recommandationContainer">
          <div class="recommandationTraditional">
            <p class="subTitles recommandationTitle">What you should't miss through your trips in Morocco</p>
            <div class="recommandationCart" v-for="(city, index) in cities" :key="index">
                  <p>{{city.recommandation}} in {{city.name}}</p>
                <div class="recommandationImgCart" >
                  <img :src="city.images[1]" alt="country">
                  <img :src="city.images[2]" alt="country">
                </div>
            </div>
          </div>
          <div class="recommandationExperience">
            <p class="subTitles experienceTitle">What you need for having a nice trip in Morocco</p>
            <div>
              <p>{{tripExperience}} </p>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>
<script scoped>
  export default {
    data() {
      return {
        cities:[
          {
            name:'Ouarzazate',
            images: [require('@/assets/img/homePage/ouarzazate.jpg'), require('@/assets/img/homePage/zazat1.jpg'), require('@/assets/img/homePage/zazat2.jpg')],
            description:'Ouarzazate is a city in Morocco and the largest town in the Saharan Morocco. Ouarzazate is relatively small and for Morocco quiet town, which can be very refreshing coming from a city like Fez, Meknes or Marrakech. You will barely be hassled here and can walk freely and enjoy the streets. It is thus no wonder that its name comes from a Berber phrase meaning "without noise" or "without confusion".',
            readMore: 'https://www.marokko-info.nl/ouarzazate-city-morocco/',
            recommandation:'Enjoy cinema'
          },
          {
            name:'Marrakech',
            images:[require('@/assets/img/homePage/kech.jpg'), require('@/assets/img/homePage/kech1.jpg'), require('@/assets/img/homePage/kech2.jpg')],
            description:'If your  way to Morocco, don\'t skip Marrakech,, it\'s a place full of surprises! With its countless markets, gardens, palaces and mosques, you will be in for a treat. Marrakech, also called the red city, is the fourth largest city of the Kingdom after Casablanca, Fez and Tangiers with 928,850 inhabitants in 2014 and it remains the tourist capital of the country.',
            readMore: 'https://www.touropia.com/tourist-attractions-in-marrakech/',
            recommandation:'Shop in the medina'
          },
           {
            name:'Essaouira',
            images:[require('@/assets/img/homePage/essouira.jpg'), require('@/assets/img/homePage/essouira1.jpg'), require('@/assets/img/homePage/essaouira2.jpg')],
            description:'Essaouira is a tourist friendly town and is known to be a "cool" place.The impact of tourism, immigration by Europeans (mostly French) and the returning of Moroccan expats from Europe has made Essaouira today a cosmopolitan oasis with a high grade of tolerans between particular ethnic or cultural groups.',
            readMore: 'https://marocmama.com/everything-need-know-essaouira/',
            recommandation:'Horse ride'
          },
           {
            name:'Fez',
            images:[require('@/assets/img/homePage/fez.jpg'), require('@/assets/img/homePage/fez1.jpg'), require('@/assets/img/homePage/fez2.jpg')],
            description:'Fez has a special atmosphere. This 13th-century city is an imperial city of long-lasting multicultural history, that reserves unexpected surprises for its visitors. Cross the walls of the famous medina of Fez, recognized by UNESCO as an outstanding universal value. Stroll through the streets of the Fez-El-Bali district. The Bab Boujloud is the easiest way to enter the medina.',
            readMore: 'https://www.thecrazytourist.com/25-best-things-to-do-in-fez-morocco/',
            recommandation:'Explore the tanneries'
          },
          {
            name:'Merzouga',
            images:[require('@/assets/img/homePage/merzouga.jpg'), require('@/assets/img/homePage/merzouga1.jpg'), require('@/assets/img/homePage/merzouga2.jpg')],
            description:'Bask in glorious sunsets and channel your inner sheik while you ride a meandering camel across the windblown dunes of Erg Chebbi. Merzouga, a small village in southeast Morocco, gives visitors a taste of desert life, and treks to nearby villages will reward you with African revelry, including music and dance. Ask your hotel to arrange a guided tour.',
            readMore: 'https://www.desertmoroccoadventure.com/things-to-do/merzouga/',
            recommandation:'Night in the Sahara'
          },
        ],
        tripExperience:'Ah, Morocco. A place that was at the top of my bucket list for so long. I had a sense before visiting Morocco that it was a destination I would fall in love with, but after seeing it for myself, I was pleasantly surprised to find that there really is something in Morocco for everyone to enjoy. Architecture lovers will marvel at the intricate tile work and stunning madrasas. Obsessive shoppers will spend hours haggling competitively and trying to find the next best shop in the medina. Adventure seekers will want to book it out of the city and hop a camel straight into the Sahara. And foodies will bask in the potent aromas of tagine and spices almost as much as the actual taste of them. Photography nerds? Well, they’ll just geek out over the beauty of it all. And what about those that just want to recharge on their vacation? Don’t worry, there’s plenty for them to do (or rather, not do) too. Moroccan spas (also known as hammams are world-renowned and offer the ultimate experience in relaxation). Plus most of the riads in Morocco boast their own pool to be enjoyed. Honestly, if you do it right, anyone can have an incredible trip to this country.'
      }
    },
  }
</script>
<style scoped>
  h2{
     background-color: rgb(243, 240, 236);
    text-align: center;
    font-family: "Metal Mania";
    font-weight: normal;
    font-size: 2.5em;
    border-radius: 50px 50px 0px 0px;
  }
  @media all and (max-width: 350px) {
    h2{
      font-size: 1em;
    }
  }
  @media all and (max-width: 636px) {
    h2{
      font-size: 1.5em;
    }
  }
  .directionContainer{
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
  }
  .directionsCard{
    background-color: rgb(243, 240, 236);
    text-align: center;
    width: calc(100% / 5 - 20px);
    margin-left: 20px;
    margin-top: 20px;
    box-shadow: 1px 4px 5px 1px ;
    border-radius: 50px;
    transition: all 500ms;
  }
  .directionsCard:hover{
    transform: scale(1.1);
  }
  .directionsImg{
    max-width: 100%;
    height: auto;
    border-radius: 50px 50px 0px 0px;
  }
  @media all and (max-width: 902px) {
    .directionsCard{
      width: calc(100% / 3 - 20px);
    }
  }
  @media all and (max-width: 430px) {
    .directionsCard{
      width: calc(100% / 1);
    }
  }
  h3{
    font-family: "Metal Mania";
  }
  a{
    font-size: 12px;
  }
  a:hover{
    font-size: 14px;
  }
  .directionsDescription{
    margin-bottom: 0px;
  }
  .secondSection{
    /*I have not created it yet*/
    /* it is an empty section*/
    max-width: 100%;
    background-color: yellow;
  }
  .recommandationContainer{
    display: flex;
    justify-content: space-between;
    background-image: url('@/assets/img/homePage/background.jpg');
  }
  @media all and (max-width: 636px) {
    .recommandationContainer{
      flex-wrap: wrap;
    }
  }
  .subTitles{  
    text-align: center;
    color: rgb(235, 228, 227);
    font-size: 30px;
    font-weight: bold;
    font-family:"Metal Mania" ;
     animation: subTitle 3s infinite;
  }
  @keyframes subTitle{
  0%   {color: red;}
  25%  {color: yellow; transform: translateX(5);}
  50%  {color: blue;}
  100% {color: green; transform: translateX(1em)}
}
  @media all and (max-width: 754px) {
    .subTitles{
      max-width: 10em;
      font-weight: normal;
      font-size: 20px;
    }
  }
  .recommandationTraditional{
    max-width: 50em;
    margin: auto;
    text-align: center;
  }
  @media all and (max-width: 1222px) {
    .recommandationTraditional{
      min-width: 20em;
    }
  }
  @media all and (max-width: 352px) {
    .recommandationTraditional{
      max-width: 20em;
    }
  }
  .recommandationCart{
    max-width: 50em;
    border-start-start-radius: 80px;
    border-bottom-right-radius: 80px;
    flex-wrap: wrap;
    background-color: rgb(174, 169, 143);
    margin-top: 5px;
  }
  @media all and (max-width: 274px) {
    .recommandationCart{
      width: 8em;
    }
  }
  .recommandationCart p{
    font-family: BooterFont;
    font-size: 35px;
    margin-bottom: 5px;
  }
  .recommandationCart p:hover{
    font-weight: bold;
    color: rgb(180, 29, 29);
  }
  @media all and (max-width: 332px) {
    .recommandationCart p{
      font-size: 15px;
    }
  }
  .recommandationImgCart{
    max-width: 50em;
  }
  .recommandationImgCart img{
    max-width: 100%;
    height: auto;
    width: 15em;
    border-start-start-radius: 80px;
    border-bottom-right-radius: 80px;
    margin: 1px 10px;
  }
  .recommandationImgCart:hover{
    transform: skewX(10deg);
  }
  @media all and (max-width: 352px) {
    .recommandationImgCart{
      height: auto;
      max-width: 100%;
      width: 10em;
    }
  }
  .recommandationExperience{
    flex-wrap: wrap;
    max-width: 35em;
    text-align: start;
    margin: 10px 30px 0px 15px;
    font-family: 'Arima', cursive;
    font-size: 1.1em;
  }
  .recommandationExperience :last-child{
    line-height: 4;
    font-weight: bold;
    background-color: rgb(205, 208, 182);
    border-radius: 50px;
    padding: 5px;
  }
  .recommandationExperience :last-child:hover{
    background-color: rgb(178, 158, 158);
  }
</style>
  
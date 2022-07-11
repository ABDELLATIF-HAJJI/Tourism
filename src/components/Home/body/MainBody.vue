<template>
 <div class="homeSections">
   <h2>Tops directiones</h2>
  <section class="firstSection">
    <div class="container" v-for="(city, index) in cities" :key="index">
      <div>
        <img class="firstSectionImg" :src="city.images[0]" alt="city">
      </div>
      <h3>{{city.name}}</h3>
      <p class="description">{{city.description}}</p>
      <div> If you want to know more about {{city.name}}<a :href="city.readMore">  click here</a></div>
    </div>
  </section>
  <h2>Trips Experiences over world</h2>
  <section class="secondSection">
    <div class="container">
      <div class="imgContainer">
        <img src="" alt="">
      </div>
      <p class="content"></p>
    </div>
  </section>

  <section class="thirdSection">
    <div class="titleContainer">
    </div>
    <div class="towParts">
      <div class="firstPart">
        <p class="subTitles subTitle1">What you should't miss through your trips in Morocco</p>
        <div class="containerTradition" v-for="(city, index) in cities" :key="index">
            <p>{{city.recommandation}} in {{city.name}}</p>
            <img class="traditionalImg" :src="city.images[1]" alt="country">
            <img class="traditionalImg" :src="city.images[1]" alt="country">
        </div>
      </div>
      <div class="secondPart">
              <p class="subTitles subTitle2">What you need for having a nice trip in Morocco</p>
        <p>{{niceTrips}} </p>
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
          images: [require('@/assets/img/FirstSectionImg/ouarzazate.jpg'), require('@/assets/img/ThirdSectionImg/zazat1.jpg')],
          name:'Ouarzazate',
          description:'Ouarzazate is a city in Morocco and the largest town in the Saharan Morocco. Ouarzazate is relatively small and for Morocco quiet town, which can be very refreshing coming from a city like Fez, Meknes or Marrakech. You will barely be hassled here and can walk freely and enjoy the streets. It is thus no wonder that its name comes from a Berber phrase meaning "without noise" or "without confusion".',
          readMore: 'https://www.marokko-info.nl/ouarzazate-city-morocco/',
          recommandation:'enjoy cinema'
        },
        {
          images:[require('@/assets/img/FirstSectionImg/kech.jpg'), require('@/assets/img/ThirdSectionImg/kech1.jpg')],
          name:'Marrakech',
          description:'If your  way to Morocco, don\'t skip Marrakech,, it\'s a place full of surprises! With its countless markets, gardens, palaces and mosques, you will be in for a treat. Marrakech, also called the red city, is the fourth largest city of the Kingdom after Casablanca, Fez and Tangiers with 928,850 inhabitants in 2014 and it remains the tourist capital of the country.',
          readMore: 'https://www.touropia.com/tourist-attractions-in-marrakech/',
          recommandation:'Shop in the medina'
        },
         {
          images:[require('@/assets/img/FirstSectionImg/essouira.jpg'), require('@/assets/img/ThirdSectionImg/essouira1.jpeg')],
          name:'Essaouira',
          description:'Essaouira is a tourist friendly town and is known to be a "cool" place.The impact of tourism, immigration by Europeans (mostly French) and the returning of Moroccan expats from Europe has made Essaouira today a cosmopolitan oasis with a high grade of tolerans between particular ethnic or cultural groups.',
          readMore: 'https://marocmama.com/everything-need-know-essaouira/',
          recommandation:'Horse ride'
        },
         {
          images:[require('@/assets/img/FirstSectionImg/fez.jpg'), require('@/assets/img/ThirdSectionImg/fez1.jpg')],
          name:'Fez',
          description:'Fez has a special atmosphere. This 13th-century city is an imperial city of long-lasting multicultural history, that reserves unexpected surprises for its visitors. Cross the walls of the famous medina of Fez, recognized by UNESCO as an outstanding universal value. Stroll through the streets of the Fez-El-Bali district. The Bab Boujloud is the easiest way to enter the medina.',
          readMore: 'https://www.thecrazytourist.com/25-best-things-to-do-in-fez-morocco/',
          recommandation:'Explore the tanneries'
        },
        {
          images:[require('@/assets/img/FirstSectionImg/merzouga1.jpeg'), require('@/assets/img/ThirdSectionImg/merzouga2.jpeg')],
          name:'Merzouga',
          description:'Bask in glorious sunsets and channel your inner sheik while you ride a meandering camel across the windblown dunes of Erg Chebbi. Merzouga, a small village in southeast Morocco, gives visitors a taste of desert life, and treks to nearby villages will reward you with African revelry, including music and dance. Ask your hotel to arrange a guided tour.',
          readMore: 'https://www.desertmoroccoadventure.com/things-to-do/merzouga/',
          recommandation:'Night in the Sahara'
        },
      ],
      niceTrips:'Ah, Morocco. A place that was at the top of my bucket list for so long. I had a sense before visiting Morocco that it was a destination I would fall in love with, but after seeing it for myself, I was pleasantly surprised to find that there really is something in Morocco for everyone to enjoy. Architecture lovers will marvel at the intricate tile work and stunning madrasas. Obsessive shoppers will spend hours haggling competitively and trying to find the next best shop in the medina. Adventure seekers will want to book it out of the city and hop a camel straight into the Sahara. And foodies will bask in the potent aromas of tagine and spices almost as much as the actual taste of them. Photography nerds? Well, they’ll just geek out over the beauty of it all. And what about those that just want to recharge on their vacation? Don’t worry, there’s plenty for them to do (or rather, not do) too. Moroccan spas (also known as hammams are world-renowned and offer the ultimate experience in relaxation). Plus most of the riads in Morocco boast their own pool to be enjoyed. Honestly, if you do it right, anyone can have an incredible trip to this country.'
    }
  },
}
</script>

<style scoped>
  h2{
    text-align: center;
    font-family: "Metal Mania";
    font-weight: normal;
    color: white;
    text-align: center;
    font-size: 2.5em;
  }
  @media all and (max-width: 350px) {
    h2{
    font-size: 1em;
  }
  }
  .firstSection{
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    background-color: rgb(112, 128, 143);
  }
  .container{
    text-align: start;
    max-width: 11em;
    margin: 10px 12px 10px 14px;
  }
  .firstSectionImg{
    width: 11em;
    height: 8em;
    border-radius: 5px;
  }
  .firstSectionImg:hover{
    transform: scale(1.1);
  }
  h3{
    text-align: center;
    font-family: "Metal Mania";
  }
  .description{
    margin-bottom: 0px;
  }
  a{
    font-size: 12px;
  }
  a:hover{
    font-size: 14px;
  }
  @media all and (max-width: 350px) {
    .firstSectionImg{
      width: 7em;
      height: 4em;
      border-radius: 5px;
    }
  }
  .secondSection{
    max-width: 100%;
    background-color: yellow;
  }
  .thirdSection{
    flex-wrap: wrap;
    background-image: url('@/assets/img/ThirdSectionImg/background.jpg');
    margin-bottom: 0px;
    border-radius: 5em;
  }
  .titleContainer{
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .towParts{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 15px 1px 5px 1px;
  }
  .subTitles{  
    color: white;
    font-size: 15px;
    height: 20px;
    padding: 2px 2px 2px 2px;
    font-family:"Metal Mania" ;
    border-radius: 5px;
    background-color: rgb(14, 14, 13);
    animation: subTitle 3s infinite ;
  }
  @keyframes subTitle{
    from {
      transform: translateX(5);
    }
    to {
      transform: translateX(1em);
    }
  }
  .firstPart{
    max-width: 30em;
    margin-left: 30px;
  }
  .subTitle1{
    margin: 10px 2px 2px 4.2em;
  }
  .containerTradition{
    max-width: 30em;
    margin-top: 10px;
    background-color: rgb(9, 120, 161);
    border-radius: 1em;
  }
  .containerTradition p{
    margin: 5px 10px 5px 5px;
    font-family: BooterFont;
    font-size: 40px;
    text-align: center;
  }
  .traditionalImg{
    border-radius: 20%;
    max-width: 12em;
    border-style: dotted;
    margin: 1px 10px 5px 10px ;
  }
  .traditionalImg:hover{
    transform: skewX(10deg);
  }
  @media all and (max-width: 350px) {
    .firstPart{
      margin-left: 1px;
      text-align: center;
    }
    .containerTradition{
      max-width: 10em;
      max-width: 30em;
      margin-top: 10px;
    }
    .containerTradition p{
      margin: auto;
      font-size: 20px;
    }
    .traditionalImg{
      border-radius: 20%;
      width: 6em;
      margin: 2px 5px 2px 5px ;
    }
  }
  .secondPart{
    color: rgb(12, 6, 4);
    max-width: 30em;
    text-align: start;
    line-height: 2;
    margin-top: 10px;
    margin-right: 40px;
    font-family: 'Arima', cursive;
    font-size: 15px;
    font-weight: bold;
  }
  .secondPart:hover{
    color: white;
  }
  .subTitle2{
    margin: 0px 4.2em 2px 2em;
    font-weight: normal;
  }
  @media all and (max-width: 350px) {
    .secondPart{
      text-align: center;
    }
    .subTitles{
      margin: 10px 2px 2px 0em;
      height: 6em;
      font-size: 12px;
      width: 9em;
    }
  }
</style>
  
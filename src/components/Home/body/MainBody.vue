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
      <p class="expression">What you should't miss through your trips in Morocco</p>
      <p class="expression">What you need for having a nice trip in Morocco</p>
    </div>
    <div class="towParts">
      <div class="firstPart">
        <div class="containerTradition" v-for="(city, index) in cities" :key="index">
            <p>{{city.recommandation}} in {{city.name}}</p>
            <img class="traditionalImg" :src="city.images" alt="country">
            <img class="traditionalImg" :src="city.images" alt="country">
        </div>
      </div>
      <div class="secondPart">
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
          images: [require('@/assets/cover1.jpeg'), require('@/assets/cover1.jpeg')],
          name:'Ouarzazate',
          description:'Ouarzazate is a city in Morocco and the largest town in the Saharan Morocco. Ouarzazate is relatively small and for Morocco quiet town, which can be very refreshing coming from a city like Fez, Meknes or Marrakech. You will barely be hassled here and can walk freely and enjoy the streets. It is thus no wonder that its name comes from a Berber phrase meaning "without noise" or "without confusion".',
          readMore: 'https://www.marokko-info.nl/ouarzazate-city-morocco/',
          recommandation:'enjoy cinema'
        },
        {
          images:[require('@/assets/img/kech.jpg')],
          name:'Marrakech',
          description:'If your  way to Morocco, don\'t skip Marrakech,, it\'s a place full of surprises! With its countless markets, gardens, palaces and mosques, you will be in for a treat. Marrakech, also called the red city, is the fourth largest city of the Kingdom after Casablanca, Fez and Tangiers with 928,850 inhabitants in 2014 and it remains the tourist capital of the country.',
          readMore: 'https://www.touropia.com/tourist-attractions-in-marrakech/',
          recommandation:'Shop in the medina'
        },
         {
          images:[require('@/assets/img/essouira.jpg')],
          name:'Essaouira',
          description:'Essaouira is a tourist friendly town and is known to be a "cool" place.The impact of tourism, immigration by Europeans (mostly French) and the returning of Moroccan expats from Europe has made Essaouira today a cosmopolitan oasis with a high grade of tolerans between particular ethnic or cultural groups.',
          readMore: 'https://marocmama.com/everything-need-know-essaouira/',
          recommandation:'Horse ride'
        },
         {
          images:[require('@/assets/img/fez.jpg')],
          name:'Fez',
          description:'Fez has a special atmosphere. This 13th-century city is an imperial city of long-lasting multicultural history, that reserves unexpected surprises for its visitors. Cross the walls of the famous medina of Fez, recognized by UNESCO as an outstanding universal value. Stroll through the streets of the Fez-El-Bali district. The Bab Boujloud is the easiest way to enter the medina.',
          readMore: 'https://www.thecrazytourist.com/25-best-things-to-do-in-fez-morocco/',
          recommandation:'Explore the tanneries'
        },
        {
          images:[require('@/assets/img/merzouga1.jpeg')],
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
.firstSection{
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  background-color: blue;
}
.container{
  text-align: start;
  max-width: 11em;
  min-height: 12em;
  margin: 10px 12px 10px 14px;
}
.firstSectionImg{
width: 11em;
height: 8em;
}
.firstSectionImg:hover{
  transform: scale(1.1);
}
h2{
text-align: center;
  font-family: "Metal Mania";
  font-weight: normal;
  color: #333;
  text-align: center;
  font-size: 2.5em;
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
.secondSection{
  max-width: 100%;
  background-color: yellow;
}
.thirdSection{
  flex-wrap: wrap;
  background-color: rgb(96, 85, 72);
  margin-bottom: 0px;
}
.titleContainer{
  display: flex;
  text-align: center;
  border-style: inset;
  justify-content: space-between;
  background-color: rgb(14, 14, 13);
}
.expression{
  color: white;
  border-style: groove;
  font-size: 15px;
  margin: 2px 2px 2px 2px;
  padding: 2px 2px 2px 2px;
  font-family:"Metal Mania" ;
}
.towParts{
   background-images: url('@/assets/img/bodyImg/background.jpg');
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 15px 1px 5px 1px;
}
.firstPart{
 max-width: 30em;
}
.containerTradition{
  flex-wrap: wrap;
  max-width: 30em;
  margin: 10px;
  background-color: rgb(214, 175, 123);
}
.containerTradition p{
  margin-top: 0px;
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
</style>

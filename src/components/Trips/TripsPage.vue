<template>
    <div class="sections">
        <section class="categories">
            <div>
                <p class="subTitles">Categories</p>
                <div class="checkboxForm">
                    <form>
                        <input type="checkbox" v-model="checktrips" id="trips" name="trips" value="trips">
                        <label for="trips">trip</label><br>
                        <input type="checkbox" v-model="checkhotels" id="hotels" name="hotels" value="hotels">
                        <label for="hotels">hotel</label><br>
                    </form>
                </div>
            </div>
            <hr>
            <div>
                <p class="subTitles">prices</p>
                <form>
                    <div id="shape">
                        <p>{{filterPrice}}<span style="color: brown">€</span></p>
                    </div>
                    <input id="slider" type="range" v-model="filterPrice" max="300" min="0">
                </form>
            </div>
        </section>
        <section class="mainContent">
            <div v-show="checktrips" v-for="trip in trips" :key="trip">
                <div  class="card" v-if="trip.TripPrice <= filterPrice">
                    <img class="Img" :src="trip.Img" alt="trip">
                    <div class="Details">
                        <div>
                            <p class="tripname cardName">{{trip.TripName}}</p>
                            <p class="trip duration">{{trip.TripDuration}}</p>
                            <button class="tripprice price">{{trip.TripPrice}}<span style="color: brown">€</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="checkhotels" v-for="hotel in hotels" :key="hotel">
                <div class="card" v-if="hotel.Price <= filterPrice">
                    <div class="Details">
                        <img class="Img" :src="hotel.HotelImg" alt="hotel">
                        <p class="hotelname cardName"><a :href="hotel.url">{{hotel.HotelName}}</a></p>
                        <button class="price">{{hotel.Price}}<span style="color: brown">€</span></button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checktrips:true,
                checkhotels: true,
                filterPrice: 300,
                trips:[
                    {
                      Img: require('@/assets/img/trips/studio.jpg'),
                      TripName:'sahara Getaway',
                      TripDuration:'3 days / 2 night',
                      TripPrice: 100,
                    },
                    {
                      Img: require('@/assets/img/trips/merzoga.jpg'),
                      TripName:'from Marrakech to the desert',
                      TripDuration:'2 Days/ 1 Night',
                      TripPrice: 90,
                    },
                    {
                      Img: require('@/assets/img/trips/adventures.jpg'),
                      TripName:'south Morocco Advanture',
                      TripDuration:'3 days / 2 night',
                      TripPrice: 120,
                    },
                    {
                      Img: require('@/assets/img/trips/benhadou.jpg'),
                      TripName:'Ouarzazate to Marzouga',
                      TripDuration:'4 days / 3 night',
                      TripPrice: 200,
                    },
                    {
                      Img: require('@/assets/img/trips/kasbah.jpg'),
                      TripName:'kasabah tour',
                      TripDuration:'3 days / 2 night',
                      TripPrice: 190,
                    }
                ],
                hotels:[
                    {
                      HotelImg: require('@/assets/img/hotels/BerberPalace.jpg'),
                      HotelName:'Berber Palace',
                      Price: 264,
                      url:'https://www.tripadvisor.fr/Hotel_Review-g304018-d480998-Reviews-Le_Berbere_Palace-Ouarzazate_Draa_Tafilalet.html',
                    },
                    {
                      HotelImg: require('@/assets/img/hotels/OscarHotel.jpg'),
                      HotelName:' Oscar Hôtel',
                      Price: 98,
                      url:'https://www.tripadvisor.fr/Hotel_Review-g190378-d638121-Reviews-Oscar_Resort_Hotel-Kyrenia_Kyrenia_District.html',
                    },
                    {
                      HotelImg: require('@/assets/img/hotels/riadAmlal.jpg'),
                      HotelName:' Riad Amlal',
                      Price: 60,
                      url:'https://www.tripadvisor.fr/Hotel_Review-g304018-d1756309-Reviews-Hotel_Riad_Amlal-Ouarzazate_Draa_Tafilalet.html',
                    },
                    {
                      HotelImg: require('@/assets/img/hotels/darChamaa.jpg'),
                      HotelName:' Dar chamaa',
                      Price: 76,
                      url:'https://www.tripadvisor.fr/Hotel_Review-g304018-d1491727-Reviews-Dar_Chamaa-Ouarzazate_Draa_Tafilalet.html',
                    },
                    {
                      HotelImg: require('@/assets/img/hotels/hotelOuarzazate.jpg'),
                      HotelName:' Hotel Ouarzazate Le Tichka',
                      Price: 29,
                      url:'https://www.tripadvisor.fr/Hotel_Review-g304018-d505607-Reviews-Hotel_Ouarzazate_Le_Tichka-Ouarzazate_Draa_Tafilalet.html',
                    },
                ]
                
            }
        },
        methods: {
        }, 
    }
</script>
<style scoped>
    .sections{
        display: flex;
        background-color: white;
    }
    .categories{
        background-color: rgb(128, 128, 47);
        width: 9em;
        height: 20em;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
        position: fixed;
        transition: all 500ms;
    }
    .categories:hover {
        transform: scale(1.1);
    }
    @media all and (max-width:440px) {
        .categories{
            width: 8em;
            height: 17em;
            font-size: 15px;
        }
    }
    @media all and (max-width:296px) {
        .categories{
            flex-wrap: wrap;
            margin-right: 2px; 
        }
    }
    .subTitles{
        font-family: 'Lobster', cursive;
        font-size: 1.5em;
        color: rgb(238, 233, 233);
        margin-left: 5px;
    }
    .checkboxForm{
        margin: 15px;
    }
    #shape{
        max-width: 7em; 
        font-weight: bold;
        border: 1px solid black;
        border-radius: 5px;
        text-align: center;
        margin-left: 3px;
    }
    #shape p{
        margin: auto;
    }
    #slider{
        margin-left: 2px;
        width: 9em;
    }
    .mainContent{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 102em;
        min-height: 40em;
        text-align: center;
        margin: auto;
        margin-left: 10em;
        margin-right: 5px;
    }
    @media all and (max-width: 296px) {
        .mainContent{
            margin-left: 0em;
        }
    }
    @media all and (max-width: 296px) {
        .mainContent{
            width:16em;
        }
    }
    .card{
        max-width: 25em;
        background-color: rgb(238, 234, 232);
        border-radius: 3px;
        margin: 10px;
        margin-bottom: 15px;
        padding: 5px;
        transition: all 500ms;
    }
    .card:hover {
        transform: scale(1.1);
    }
    @media all and (max-width: 1130px) {
        .card{
            width: 14em;
            margin: 2px;
        }
    }
    @media all and (max-width: 914px) {
        .card{
            width: 11em;
        }
    }
    @media all and (max-width: 770px) {
        .card{
            width: 9em;
        }
    }
    @media all and (max-width: 516px) {
        .card{
            width: calc(100% / 1);
        }
    }
    .Img{
        max-width: 100%;
        height: auto;
        width: 17em;
        margin: 4px;
        border-radius: 5px;
    }
    .cardName{
        font-family: "Metal Mania";
        font-size: 20px;
    }
    .Details{
        margin: 5px;
    }
    .Details p{
        margin: 2px;
        flex-wrap: wrap;
        font-size: 1em;
    }
    .price{
        margin: auto;
        width: 5em;
        border: none;
        border-radius: 5px;
        background-color: rgb(169, 209, 206);
        margin-bottom: 5px;
        font-weight: bold;
    }
    @media all and (max-width:321px) {
        .price{
            width: 4em;
            font-size: 8px;
        }
    }
</style>
    
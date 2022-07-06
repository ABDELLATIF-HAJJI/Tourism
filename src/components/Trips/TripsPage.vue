<template>
<div class="sections">
 <section class="categories">
     <h3>Categories</h3>
        <div class="checkboxForm">
            <form>
                <input type="checkbox" id="trips" name="trips" value="trips">
                <label for="trips">trip</label><br>
                <input type="checkbox" id="hotels" name="hotels" value="hotel">
                <label for="hotels">hotel</label><br>
            </form>
        </div>
        <hr>
        <h3>prices</h3>
    <form>
    <div id="shape">
        <p>20€</p>
        </div>
        <input id="slider" type="range">
    </form>
 </section>
 <section class="contentSection">
    <div class="tripcontainer hotelcontainer" v-for="(trip, index) in trips" :key="index">
        <div class="tripDetails">
            <img class="hotelImg" :src="trip.tripImg" alt="hotel">
            <p class="tripname">{{trip.TripName}}</p>
            <p class="trip duration">{{trip.TripDuration}}</p>
            <p class="tripprice">{{trip.TripPrice}}€</p>
        </div>
    </div>
        <div class="hotelcontainer" v-for="(hotel, index) in hotels" :key="index">
        <img class="hotelImg" :src="hotel.hotelImg" alt="hotel">
        <div class="ContainerDetails">
            <p class="hotelname">{{hotel.HotelName}}</p>
            <p class="hotelprice">{{hotel.HotelPrice}}€</p>
        </div>
    </div>
 </section>
</div>
 
</template>

<script>


export default {
    data() {
        return {
        trips:[
            {
              TripImg: require('@/assets/img/ThirdSectionImg/fez1.jpg'),
              TripName:'visite studio of Ouarzazate',
              TripDuration:'3 days',
              TripPrice: 100,
            },
            {
              TripImg: require('@/assets/img/FirstSectionImg/ouarzazate.jpg'),
              TripName:'night in Merzouga',
              TripDuration:'2 days',
              TripPrice: 90,
            }
        ],
        hotels:[
            {
              HotelImg: require('@/assets/img/FirstSectionImg/ouarzazate.jpg'),
              HotelName:'Ouarzazate',
              HotelPrice: 10,
            },
            {
              HotelImg: require('@/assets/img/FirstSectionImg/ouarzazate.jpg'),
              HotelName:'Ouarzazate',
              HotelPrice: 5,
            }
        ]
        }
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
    max-width: 12em;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
h3{
    font-family: 'Lobster', cursive;
    color: black;
    margin-left: 5px;
}
.checkboxForm{
    margin: 20px;
}
#shape{
    max-width: 8em; 
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    margin-left: 20px;
}
#shape p{
margin: auto;
}
#slider{
    margin-left: 20px;
}
.contentSection{
max-width: 52.5em;
}
.tripcontainer{

}
.hotelImg{
    width: 20em;
    height: 12em;
    margin: 4px;
    border-radius: 5px;
}
.hotelcontainer{
    border: solid 2px;
    border-style: groove;
    margin: 10px;
    font-family: "Metal Mania";
    background-color: rgb(238, 234, 232);
    border-radius: 3px;
}
.hotelImg{
    width: 12em;
    height: 10em;
    margin: 2px;
    border-radius: 5px;
}
.ContainerDetails{
    margin: 5px;
}
.hotelprice{
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
}
</style>

<template>
<footer>
<div class="linkes">
    <ul >
        <li>
            <a href="https://www.youtube.com" target="_blank">
                <img src="@/assets/icons/YoutubeLogo.png">
            </a>
        </li>
        <li>
            <a href="https://www.spotify.com" target="_blank">
                <img src="@/assets/icons/SpotifyLogo.png">
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com" target="_blank">
                <img src="@/assets/icons/FacebookLogo.png">
            </a>
        </li>
    </ul>
    <div
        class="copyright"> © 2022 Copyright: 
        <a class="text-white" href="https://souakentours.com/">Ouarzazate Tours</a
      >
    </div>
</div>
</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
    background-color: rgb(19, 17, 17);
    height: 10em;
    margin-top: 0px;
}
.linkes ul{
    display: flex;
    justify-content: end;
}
li{
    max-width: 2em;
    margin-right: 3em;
    margin-top: 40px;
}
li:hover{
    background-color: rgb(217, 217, 199);
}
.copyright{
    text-align: center;
    color: white;
}
img{
    width: 30px;
}
</style>
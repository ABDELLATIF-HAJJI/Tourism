
const directions = [
    {
      city: "Afourar"
    },
    {
      city: "Agadir"
    },
    {
      city: "Agdz"
    },
    {
      city: "Aghbala"
    },
    {
      city: "Agni Izimmer"
    },
    {
      city: "Agourai"
    },
    {
      city: "Ahfir"
    },
    {
      city: "Ain El Aouda"
    },
    {
      city: "Ain Taoujdate"
    },
    {
      city: "Ait Daoud"
    },
    {
      city: "Ajdir‎"
    },
    {
      city: "Akchour"
    },
    {
      city: "Akka"
    },
    {
      city: "Aklim"
    },
    {
      city: "Aknoul‎"
    },
    {
      city: "Al Aroui"
    },
    {
      city: "Al Hoceïma‎"
    },
    {
      city: "Alnif"
    },
    {
      city: "Amalou Ighriben"
    },
    {
      city: "Amizmiz"
    },
    {
      city: "Anzi"
    },
    {
      city: "Aoufous"
    },
    {
      city: "Aoulouz"
    },
    {
      city: "Aourir"
    },
    {
      city: "Arazane"
    },
    {
      city: "Arbaoua"
    },
    {
      city: "Arfoud"
    },
    {
      city: "Assa"
    },
    {
      city: "Assahrij"
    },
    {
      city: "Assilah"
    },
    {
      city: "Awsard"
    },
    {
      city: "Azemmour"
    },
    {
      city: "Debdou"
    },
    {
      city: "Demnate"
    },
    {
      city: "Deroua"
    },
    {
      city: "Douar Kannine"
    },
    {
      city: "Dra'a"
    },
    {
      city: "Drargua"
    },
    {
      city: "Driouch"
    },
    {
      city: "Echemmaia"
    },
    {
      city: "El Aïou"
    },
    {
      city: "El Borouj"
    },
    {
      city: "El Gara"
    },
    {
      city: "El Guerdane"
    },
    {
      city: "El Hajeb"
    },
    {
      city: "El Hanchane"
    },
    {
      city: "El Kelaâ des Sraghna"
    },
    {
      city: "El Ksiba"
    },
    {
      city: "El Marsa‎"
    },
    {
      city: "El Menzel"
    },
    {
      city: "El Ouatia"
    },
    {
      city: "Elkbab"
    },
    {
      city: "Er-Rich"
    },
    {
      city: "Es-Semara"
    },
    {
      city: "Essaouira"
    },
    {
      city: "Fam El Hisn"
    },
    {
      city: "Farkhana"
    },
    {
      city: "Figuig"
    },
    {
      city: "Foum Jamaa"
    },
    {
      city: "Fquih Ben Salah"
    },
    {
      city: "Fraïta"
    },
    {
      city: "Fès"
    },
    {
      city: "Gardmit"
    },
    {
      city: "Ghafsai‎"
    },
    {
      city: "Ghmate"
    },
    {
      city: "Goulmima"
    },
    {
      city: "Gourrama"
    },
    {
      city: "Guelmim"
    },
    {
      city: "Guercif‎"
    },
    {
      city: "Gueznaia"
    },
    {
      city: "Guigou"
    },
    {
      city: "Guisser"
    },
    {
      city: "Had Bouhssoussen"
    },
    {
      city: "Had Kourt"
    },
    {
      city: "Haj Kaddour"
    },
    {
      city: "Harhoura"
    },
    {
      city: "Harte Lyamine"
    },
    {
      city: "Hattane"
    },
    {
      city: "Hrara"
    },
    {
      city: "Ifrane"
    },
    {
      city: "Ifri"
    },
    {
      city: "Igdamen"
    },
    {
      city: "Ighil n'Oumgoun"
    },
    {
      city: "Ighoud"
    },
    {
      city: "Ighounane"
    },
    {
      city: "Ihddaden"
    },
    {
      city: "Imassine"
    },
    {
      city: "Imintanoute"
    },
    {
      city: "Imouzzer Kandar"
    },
    {
      city: "Imouzzer Marmoucha"
    },
    {
      city: "Imzouren‎"
    },
    {
      city: "Inahnahen‎"
    },
    {
      city: "Inezgane"
    },
    {
      city: "Irherm"
    },
    {
      city: "Issaguen (Ketama)‎"
    },
    {
      city: "Itzer"
    },
    {
      city: "Jamâat Shaim"
    },
    {
      city: "Jaâdar"
    },
    {
      city: "Jebha"
    },
    {
      city: "Jerada"
    },
    {
      city: "Jorf"
    },
    {
      city: "Jorf El Melha"
    },
    {
      city: "Jorf Lasfar"
    },
    {
      city: "Karia"
    },
    {
      city: "Karia"
    },
    {
      city: "Kariat Arekmane"
    },
    {
      city: "Kasba Tadla"
    },
    {
      city: "Kassita"
    },
    {
      city: "Kattara"
    },
    {
      city: "Kehf Nsour"
    },
    {
      city: "Kelaat-M'Gouna"
    },
    {
      city: "Kerouna"
    },
    {
      city: "Kerrouchen"
    },
    {
      city: "Khemis Zemamra"
    },
    {
      city: "Khenichet"
    },
    {
      city: "Khouribga"
    },
    {
      city: "Khémis Sahel"
    },
    {
      city: "Khémisset"
    },
    {
      city: "Khénifra"
    },
    {
      city: "Ksar El Kébir"
    },
    {
      city: "Kénitra"
    },
    {
      city: "Laaounate"
    },
    {
      city: "Lakhsas"
    },
    {
      city: "Lakhsass"
    },
    {
      city: "Lalla Mimouna"
    },
    {
      city: "Lalla Takerkoust"
    },
    {
      city: "Larache"
    },
    {
      city: "Laâtamna"
    },
    {
      city: "Loudaya"
    },
    {
      city: "Loulad"
    },
    {
      city: "Lqliâa"
    },
    {
      city: "Lâattaouia"
    },
    {
      city: "M'diq"
    },
    {
      city: "M'haya"
    },
    {
      city: "M'rirt"
    },
    {
      city: "M'semrir"
    },
    {
      city: "Madagh"
    },
    {
      city: "Marrakech"
    },
    {
      city: "Martil"
    },
    {
      city: "Massa (Maroc)"
    },
    {
      city: "Mechra Bel Ksiri"
    },
    {
      city: "Megousse"
    },
    {
      city: "Mehdia"
    },
    {
      city: "Meknès‎"
    },
    {
      city: "Missour"
    },
    {
      city: "Mohammadia"
    },
    {
      city: "Moqrisset"
    },
    {
      city: "Moulay Abdallah"
    },
    {
      city: "Moulay Ali Cherif"
    },
    {
      city: "Moulay Bouazza"
    },
    {
      city: "Moulay Bousselham"
    },
    {
      city: "Moulay Brahim"
    },
    {
      city: "Mouloun"
    },
    {
      city: "Moulay Yaâcoub"
    },
    {
      city: "Moussaoua"
    },
    {
      city: "MyAliCherif"
    },
    {
      city: "Mzouda"
    },
    {
      city: "Médiouna"
    },
    {
      city: "N'Zalat Bni Amar"
    },
    {
      city: "Nador"
    },
    {
      city: "Naima"
    },
    {   city: "Ouaouizeght"
    },
    {
      city: "Ouaoumana"
    },
    {
      city: "Ouarzazate"
    },
    {
      city: "Ouazzane"
    },
    {
      city: "Oued Amlil‎"
    },
    {
      city: "Oued Heimer"
    },
    {
      city: "Oued Ifrane"
    },
    {
      city: "Oued Laou"
    },
    {
      city: "Oued Rmel"
    },
    {
      city: "Oued Zem"
    },
    {
      city: "Oued-Eddahab"
    },
    {
      city: "Oujda"
    },
    {
      city: "Oulad Abbou"
    },
    {
      city: "Oulad Amrane"
    },
    {
      city: "Oulad Ayad"
    },
    {
      city: "Oulad Berhil"
    },
    {
      city: "Oulad Frej"
    },
    {
      city: "Oulad Ghadbane"
    },
    {
      city: "Oulad H'Riz Sahel"
    },
    {
      city: "Oulad M'Barek"
    },
    {
      city: "Oulad M'rah"
    },
    {
      city: "Oulad Saïd"
    },
    {
      city: "Oulaud"
    },
    {
      city: "Oulad Teïma"
    },
    {
      city: "Oulad Yaich"
    },
    {
      city: "Oulad Zbair"
    },
    {
      city: "Ouled Tayeb"
    },
    {
      city: "Oulmès"
    },
    {
      city: "Ounagha"
    },
    {
      city: "Outat El Haj"
    },
    {
      city: "Point Cires"
    },
    {
      city: "Rabat"
    },
    {
      city: "Ras El Aïn"
    },
    {
      city: "Ras El Ma"
    },
    {
      city: "Ribate El Kheir"
    },
    {
      city: "Rissani"
    },
    {
      city: "Rommani"
    },
    {
      city: "Sabaa Aiyoun"
    },
    {
      city: "Safi"
    },
    {
      city: "Salé"
    },
    {
      city: "Sarghine"
    },
    {
      city: "Saïdia"
    },
    {
      city: "Sebt El Maârif"
    },
    {
      city: "Sebt Gzoula"
    },
    {
      city: "Sebt Jahjouh"
    },
    {
      city: "Selouane"
    },
    {
      city: "Settat"
    },
    {
      city: "Bahraoui"
    },
    {
      city:"Chataï"
    },
    {
      city: "Skhinate"
    },
    {
      city: "Skhirate"
    },
    {
      city: "Skhour Rehamna"
    },
    {
      city: "Skoura"
    },
    {
      city: "Smimou"
    },
    {
      city: "Soualem"
    },
    {
      city: "Souk El Arbaa"
    },
    {
      city: "Souk Sebt Oulad Nemma"
    },
    {
      city: "Stehat"
    },
    {
      city: "Séfrou"
    },
    {
      city: "Tabounte"
    },
    {
      city: "Tafajight"
    },
    {
      city: "Tafetachte"
    },
    {
      city: "Tafraout"
    },
    {
      city: "Taghjijt"
    },
    {
      city: "Taghzout"
    },
    {
      city: "Tagzen"
    },
    {
      city: "Tahannaout"
    },
    {
      city: "Tahla‎"
    },
    {
      city: "Tala Tazegwaght‎"
    },
    {
      city: "Taliouine"
    },
    {
      city: "Talmest"
    },
    {
      city: "Talsint"
    },
    {
      city: "Tamallalt"
    },
    {
      city: "Tamanar"
    },
    {
      city: "Tamansourt"
    },
    {
      city: "Tamassint‎"
    },
    {
      city: "Tamegroute"
    },
    {
      city: "Tameslouht"
    },
    {
      city: "Tamesna"
    },
    {
      city: "Tamraght"
    },
    {
      city: "Tan-Tan"
    },
    {
      city: "Tanalt"
    },
    {
      city: "Tanger‎"
    },
    {
      city: "Tanoumrite Nkob Zagora"
    },
    {
      city: "Taounate‎"
    },
    {
      city: "Taourirt"
    },
    {
      city: "Taourirt ait zaghar"
    },
    {
      city: "Tarfaya‎"
    },
    {
      city: "Targuist‎"
    },
    {
      city: "Taroudannt"
    },
    {
      city: "Tata"
    },
    {
      city: "Taza‎"
    },
    {
      city: "Taïnaste‎"
    },
    {
      city: "Temsia"
    },
    {
      city: "Tendrara"
    },
    {
      city: "Thar Es-Souk‎"
    },
    {
      city: "Tichoute"
    },
    {
      city: "Tiflet"
    },
    {
      city: "Tifnit"
    },
    {
      city: "Tighassaline"
    },
    {
      city: "Tighza"
    },
    {
      city: "Timahdite"
    },
    {
      city: "Tinejdad"
    },
    {
      city: "Tisgdal"
    },
    {
      city: "Tissa‎"
    },
    {
      city: "Tit Mellil"
    },
    {
      city: "Tizguite"
    },
    {
      city: "Tizi Ouasli‎"
    },
    {
      city: "Tiznit"
    },
    {
      city: "Tiztoutine"
    },
    {
      city: "Touarga"
    },
    {
      city: "Touima"
    },
    {
      city: "Touissit"
    },
    {
      city: "Toulal"
    },
    {
      city: "Toundoute"
    },
    {
      city: "Tounfite"
    },
    {
      city: "Témara"
    },
    {
      city: "Tétouan‎"
    },
    {
      city: "Youssoufia"
    },
    {
      city: "Zag"
    },
    {
      city: "Zagora"
    },
    {
      city: "Zaouia d'Ifrane"
    },
    {
      city: "Zaouïat Cheikh"
    },
    {
      city: "Zaïda"
    },
    {
      city: "Zaïo"
    },
    {
      city: "Zeghanghane"
    },
    {
      city: "Zeubelemok"
    },
    {
      city: "Zinat"
    }
  ];
  export default directions
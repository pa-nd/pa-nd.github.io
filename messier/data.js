// Maraton
var maratonVrstniRed = [
  76, 73, 32, 30,  31,  109, 51, 102, 75, 33, 44,  78, 41, 42, 77, 0,  34,  36,  35, 37,
  40, 92, 46, 45,  49,  47,  43, 66,  94, 95, 104, 64, 65, 80, 81, 96, 107, 108, 39, 105,
  93, 62, 50, 100, 101, 52,  63, 2,   97, 98, 99,  84, 83, 85, 86, 88, 89,  87,  90, 57,
  58, 59, 48, 60,  103, 67,  82, 4,   12, 91, 56,  55, 28, 38, 26, 70, 106, 9,   11, 13,
  8,  3,  79, 18,  61,  5,   6,  10,  25, 15, 16,  17, 23, 24, 22, 20, 19,  7,   27, 21,
  68, 69, 53, 54,  74,  14,  1,  71,  72, 29
];
// Specifikacije parametrov
var sp = {
	"iau":
	{
		"koda": "iau",
		"ime": "IAU",
		"title": "IAU kratica ozvezdja",
		"sirina": 4
	},
	"l_ozvezdje":
	{
		"koda": "l_ozvezdje",
		"ime": "L. ozvezdje",
		"title": "Latinsko ime ozvezdja",
		"sirina": 14
	},
	"ozvezdje":
	{
		"koda": "ozvezdje",
		"ime": "Ozvezdje",
		"title": "Slovensko ime ozvezdja",
		"sirina": 13
	},
	"nav_mag":
	{
		"koda": "nav_mag",
		"ime": "Nav. mag.",
		"title": "Navidezna magnituda",
		"sirina": 2
	},
	"tip":
	{
		"koda": "tip",
		"ime": "Tip",
		"title": "Vrsta objekta",
		"sirina": 13
	},
	"tezavnost":
	{
		"koda": "tezavnost",
		"ime": "Tež.",
		"title": "Težavnost opazovanja",
		"sirina": 2
	},
	"ngc":
	{
		"koda": "ngc",
		"ime": "NGC",
		"title": "NGC/IC številka",
		"sirina": 4
	}
};

// Podatki o objektih
var data = [
  {
    "iau": "Tau",
    "l_ozvezdje": "Taurus",
    "ozvezdje": "Bik",
    "nav_mag": "8,4",
    "tip": "Ost. supernove",
    "ngc": 1952,
    "tezavnost": 2
  },
  {
    "iau": "Aqr",
    "l_ozvezdje": "Aquarius",
    "ozvezdje": "Vodnar",
    "nav_mag": "6,5",
    "tip": "Krogl. kop.",
    "ngc": 7089,
    "tezavnost": 1
  },
  {
    "iau": "CVn",
    "l_ozvezdje": "Canes Venatici",
    "ozvezdje": "Lovska psa",
    "nav_mag": "6,2",
    "tip": "Krogl. kop.",
    "ngc": 5272,
    "tezavnost": 1
  },
  {
    "iau": "Sco",
    "l_ozvezdje": "Scorpius",
    "ozvezdje": "Škorpijon",
    "nav_mag": "5,6",
    "tip": "Krogl. kop.",
    "ngc": 6121,
    "tezavnost": 2
  },
  {
    "iau": "Ser",
    "l_ozvezdje": "Serpens",
    "ozvezdje": "Kača",
    "nav_mag": "5,6",
    "tip": "Krogl. kop.",
    "ngc": 5904,
    "tezavnost": 1
  },
  {
    "iau": "Sco",
    "l_ozvezdje": "Scorpius",
    "ozvezdje": "Škorpijon",
    "nav_mag": "4,2",
    "tip": "Razs. kop.",
    "ngc": 6405,
    "tezavnost": 1
  },
  {
    "iau": "Sco",
    "l_ozvezdje": "Scorpius",
    "ozvezdje": "Škorpijon",
    "nav_mag": "3,3",
    "tip": "Razs. kop.",
    "ngc": 6475,
    "tezavnost": 1
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "4,6",
    "tip": "Meglica",
    "ngc": 6523,
    "tezavnost": 2
  },
  {
    "iau": "Oph",
    "l_ozvezdje": "Ophiuchus",
    "ozvezdje": "Kačenosec",
    "nav_mag": "7,7",
    "tip": "Krogl. kop.",
    "ngc": 6333,
    "tezavnost": 2
  },
  {
    "iau": "Oph",
    "l_ozvezdje": "Ophiuchus",
    "ozvezdje": "Kačenosec",
    "nav_mag": "6,6",
    "tip": "Krogl. kop.",
    "ngc": 6254,
    "tezavnost": 2
  },
  {
    "iau": "Sct",
    "l_ozvezdje": "Scutum",
    "ozvezdje": "Ščit",
    "nav_mag": "5,8",
    "tip": "Razs. kop.",
    "ngc": 6705,
    "tezavnost": 1
  },
  {
    "iau": "Oph",
    "l_ozvezdje": "Ophiuchus",
    "ozvezdje": "Kačenosec",
    "nav_mag": "6,7",
    "tip": "Krogl. kop.",
    "ngc": 6218,
    "tezavnost": 2
  },
  {
    "iau": "Her",
    "l_ozvezdje": "Hercules",
    "ozvezdje": "Herkul",
    "nav_mag": "5,8",
    "tip": "Krogl. kop.",
    "ngc": 6205,
    "tezavnost": 1
  },
  {
    "iau": "Oph",
    "l_ozvezdje": "Ophiuchus",
    "ozvezdje": "Kačenosec",
    "nav_mag": "7,6",
    "tip": "Krogl. kop.",
    "ngc": 6402,
    "tezavnost": 2
  },
  {
    "iau": "Peg",
    "l_ozvezdje": "Pegasus",
    "ozvezdje": "Pegaz",
    "nav_mag": "6,2",
    "tip": "Krogl. kop.",
    "ngc": 7078,
    "tezavnost": 1
  },
  {
    "iau": "Ser",
    "l_ozvezdje": "Serpens",
    "ozvezdje": "Kača",
    "nav_mag": "6,4",
    "tip": "Meglica",
    "ngc": 6611,
    "tezavnost": 1
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "6,0",
    "tip": "Meglica",
    "ngc": 6618,
    "tezavnost": 2
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "7,5",
    "tip": "Razs. kop.",
    "ngc": 6613,
    "tezavnost": 1
  },
  {
    "iau": "Oph",
    "l_ozvezdje": "Ophiuchus",
    "ozvezdje": "Kačenosec",
    "nav_mag": "6,8",
    "tip": "Krogl. kop.",
    "ngc": 6273,
    "tezavnost": 1
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "6,3",
    "tip": "Meglica",
    "ngc": 6514,
    "tezavnost": 2
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "6,5",
    "tip": "Razs. kop.",
    "ngc": 6531,
    "tezavnost": 1
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "5,1",
    "tip": "Krogl. kop.",
    "ngc": 6656,
    "tezavnost": 1
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "5,5",
    "tip": "Razs. kop.",
    "ngc": 6494,
    "tezavnost": 1
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "2,5",
    "tip": "Zv. Oblak",
    "ngc": "IC 4715",
    "tezavnost": 1
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "4,6",
    "tip": "Razs. kop.",
    "ngc": "IC 4725",
    "tezavnost": 1
  },
  {
    "iau": "Sct",
    "l_ozvezdje": "Scutum",
    "ozvezdje": "Ščit",
    "nav_mag": "8,0",
    "tip": "Razs. kop.",
    "ngc": 6694,
    "tezavnost": 1
  },
  {
    "iau": "Vul",
    "l_ozvezdje": "Vulpecula",
    "ozvezdje": "Lisička",
    "nav_mag": "7,4",
    "tip": "Pl. meglica",
    "ngc": 6853,
    "tezavnost": 2
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "6,8",
    "tip": "Krogl. kop.",
    "ngc": 6626,
    "tezavnost": 2
  },
  {
    "iau": "Cyg",
    "l_ozvezdje": "Cygnus",
    "ozvezdje": "Labod",
    "nav_mag": "7,1",
    "tip": "Razs. kop.",
    "ngc": 6913,
    "tezavnost": 1
  },
  {
    "iau": "Cap",
    "l_ozvezdje": "Capricornus",
    "ozvezdje": "Kozorog",
    "nav_mag": "7,2",
    "tip": "Krogl. kop.",
    "ngc": 7099,
    "tezavnost": 2
  },
  {
    "iau": "And",
    "l_ozvezdje": "Andromeda",
    "ozvezdje": "Andromeda",
    "nav_mag": "3,4",
    "tip": "Galaksija",
    "ngc": 224,
    "tezavnost": 1
  },
  {
    "iau": "And",
    "l_ozvezdje": "Andromeda",
    "ozvezdje": "Andromeda",
    "nav_mag": "8,1",
    "tip": "Galaksija",
    "ngc": 221,
    "tezavnost": 2
  },
  {
    "iau": "Tri",
    "l_ozvezdje": "Triangulum",
    "ozvezdje": "Trikotnik",
    "nav_mag": "5,7",
    "tip": "Razs. kop.",
    "ngc": 598,
    "tezavnost": 3
  },
  {
    "iau": "Per",
    "l_ozvezdje": "Perseus",
    "ozvezdje": "Perzej",
    "nav_mag": "5,5",
    "tip": "Razs. kop.",
    "ngc": 1039,
    "tezavnost": 1
  },
  {
    "iau": "Gem",
    "l_ozvezdje": "Gemini",
    "ozvezdje": "Dvojčka",
    "nav_mag": "5,3",
    "tip": "Razs. kop.",
    "ngc": 2168,
    "tezavnost": 1
  },
  {
    "iau": "Aur",
    "l_ozvezdje": "Auriga",
    "ozvezdje": "Voznik",
    "nav_mag": "6,3",
    "tip": "Razs. kop.",
    "ngc": 1960,
    "tezavnost": 1
  },
  {
    "iau": "Aur",
    "l_ozvezdje": "Auriga",
    "ozvezdje": "Voznik",
    "nav_mag": "6,2",
    "tip": "Razs. kop.",
    "ngc": 2099,
    "tezavnost": 1
  },
  {
    "iau": "Aur",
    "l_ozvezdje": "Auriga",
    "ozvezdje": "Voznik",
    "nav_mag": "7,4",
    "tip": "Razs. kop.",
    "ngc": 1912,
    "tezavnost": 1
  },
  {
    "iau": "Cyg",
    "l_ozvezdje": "Cygnus",
    "ozvezdje": "Labod",
    "nav_mag": "4,6",
    "tip": "Razs. kop.",
    "ngc": 7092,
    "tezavnost": 1
  },
  {
    "iau": "UMa",
    "l_ozvezdje": "Ursa Major",
    "ozvezdje": "Veliki medved",
    "nav_mag": "8,4",
    "tip": "Dv. zvezda",
    "ngc": "/",
    "tezavnost": 1
  },
  {
    "iau": "CMa",
    "l_ozvezdje": "Canis Major",
    "ozvezdje": "Veliki pes",
    "nav_mag": "4,5",
    "tip": "Razs. kop.",
    "ngc": 2287,
    "tezavnost": 1
  },
  {
    "iau": "Ori",
    "l_ozvezdje": "Orion",
    "ozvezdje": "Orion",
    "nav_mag": "4,0",
    "tip": "Meglica",
    "ngc": 1976,
    "tezavnost": 1
  },
  {
    "iau": "Ori",
    "l_ozvezdje": "Orion",
    "ozvezdje": "Orion",
    "nav_mag": "9,0",
    "tip": "Meglica",
    "ngc": 1982,
    "tezavnost": 2
  },
  {
    "iau": "Cnc",
    "l_ozvezdje": "Cancer",
    "ozvezdje": "Rak",
    "nav_mag": "3,7",
    "tip": "Razs. kop.",
    "ngc": 2632,
    "tezavnost": 1
  },
  {
    "iau": "Tau",
    "l_ozvezdje": "Taurus",
    "ozvezdje": "Bik",
    "nav_mag": "1,6",
    "tip": "Razs. kop.",
    "ngc": "/",
    "tezavnost": 1
  },
  {
    "iau": "Pup",
    "l_ozvezdje": "Puppis",
    "ozvezdje": "Krma",
    "nav_mag": "6,0",
    "tip": "Razs. kop.",
    "ngc": 2437,
    "tezavnost": 2
  },
  {
    "iau": "Pup",
    "l_ozvezdje": "Puppis",
    "ozvezdje": "Krma",
    "nav_mag": "4,4",
    "tip": "Razs. kop.",
    "ngc": 2422,
    "tezavnost": 1
  },
  {
    "iau": "Hya",
    "l_ozvezdje": "Hydra",
    "ozvezdje": "Vodna kača",
    "nav_mag": "5,5",
    "tip": "Razs. kop.",
    "ngc": 2548,
    "tezavnost": 2
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "8,4",
    "tip": "Galaksija",
    "ngc": 4472,
    "tezavnost": 3
  },
  {
    "iau": "Mon",
    "l_ozvezdje": "Monoceros",
    "ozvezdje": "Samorog",
    "nav_mag": "5,9",
    "tip": "Razs. kop.",
    "ngc": 2323,
    "tezavnost": 1
  },
  {
    "iau": "CVn",
    "l_ozvezdje": "Canes Venatici",
    "ozvezdje": "Lovska psa",
    "nav_mag": "8,4",
    "tip": "Galaksija",
    "ngc": "5194 & 5195",
    "tezavnost": 2
  },
  {
    "iau": "Cas",
    "l_ozvezdje": "Cassiopeia",
    "ozvezdje": "Kasiopeja",
    "nav_mag": "7,3",
    "tip": "Razs. kop.",
    "ngc": 7654,
    "tezavnost": 2
  },
  {
    "iau": "Com",
    "l_ozvezdje": "Coma Berenices",
    "ozvezdje": "Berenikini kodri",
    "nav_mag": "7,6",
    "tip": "Krogl. kop.",
    "ngc": 5024,
    "tezavnost": 2
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "7,6",
    "tip": "Krogl. kop.",
    "ngc": 6715,
    "tezavnost": 2
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "6,3",
    "tip": "Krogl. kop.",
    "ngc": 6809,
    "tezavnost": 2
  },
  {
    "iau": "Lyr",
    "l_ozvezdje": "Lyra",
    "ozvezdje": "Lira",
    "nav_mag": "8,3",
    "tip": "Krogl. kop.",
    "ngc": 6779,
    "tezavnost": 2
  },
  {
    "iau": "Lyr",
    "l_ozvezdje": "Lyra",
    "ozvezdje": "Lira",
    "nav_mag": "8,8",
    "tip": "Pl. meglica",
    "ngc": 6720,
    "tezavnost": 1
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "9,7",
    "tip": "Galaksija",
    "ngc": 4579,
    "tezavnost": 3
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "9,6",
    "tip": "Galaksija",
    "ngc": 4621,
    "tezavnost": 3
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "8,8",
    "tip": "Galaksija",
    "ngc": 4649,
    "tezavnost": 2
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "9,7",
    "tip": "Galaksija",
    "ngc": 4303,
    "tezavnost": 3
  },
  {
    "iau": "Oph",
    "l_ozvezdje": "Ophiuchus",
    "ozvezdje": "Kačenosec",
    "nav_mag": "6,5",
    "tip": "Krogl. kop.",
    "ngc": 6266,
    "tezavnost": 2
  },
  {
    "iau": "CVn",
    "l_ozvezdje": "Canes Venatici",
    "ozvezdje": "Lovska psa",
    "nav_mag": "8,6",
    "tip": "Galaksija",
    "ngc": 5055,
    "tezavnost": 3
  },
  {
    "iau": "Com",
    "l_ozvezdje": "Coma Berenices",
    "ozvezdje": "Berenikini kodri",
    "nav_mag": "8,5",
    "tip": "Galaksija",
    "ngc": 4826,
    "tezavnost": 2
  },
  {
    "iau": "Leo",
    "l_ozvezdje": "Leo",
    "ozvezdje": "Lev",
    "nav_mag": "9,3",
    "tip": "Galaksija",
    "ngc": 3623,
    "tezavnost": 2
  },
  {
    "iau": "Leo",
    "l_ozvezdje": "Leo",
    "ozvezdje": "Lev",
    "nav_mag": "8,9",
    "tip": "Galaksija",
    "ngc": 3627,
    "tezavnost": 2
  },
  {
    "iau": "Cnc",
    "l_ozvezdje": "Cancer",
    "ozvezdje": "Rak",
    "nav_mag": "6,1",
    "tip": "Razs. kop.",
    "ngc": 2682,
    "tezavnost": 2
  },
  {
    "iau": "Hya",
    "l_ozvezdje": "Hydra",
    "ozvezdje": "Vodna kača",
    "nav_mag": "7,8",
    "tip": "Krogl. kop.",
    "ngc": 4590,
    "tezavnost": 3
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "7,6",
    "tip": "Krogl. kop.",
    "ngc": 6637,
    "tezavnost": 2
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "7,9",
    "tip": "Krogl. kop.",
    "ngc": 6681,
    "tezavnost": 2
  },
  {
    "iau": "Sge",
    "l_ozvezdje": "Sagitta",
    "ozvezdje": "Puščica",
    "nav_mag": "8,2",
    "tip": "Krogl. kop.",
    "ngc": 6838,
    "tezavnost": 3
  },
  {
    "iau": "Aqr",
    "l_ozvezdje": "Aquarius",
    "ozvezdje": "Vodnar",
    "nav_mag": "9,3",
    "tip": "Krogl. kop.",
    "ngc": 6981,
    "tezavnost": 3
  },
  {
    "iau": "Aqr",
    "l_ozvezdje": "Aquarius",
    "ozvezdje": "Vodnar",
    "nav_mag": "9,0",
    "tip": "Asterizem",
    "ngc": 6994,
    "tezavnost": 1
  },
  {
    "iau": "Psc",
    "l_ozvezdje": "Pisces",
    "ozvezdje": "Ribi",
    "nav_mag": "9,4",
    "tip": "Galaksija",
    "ngc": 628,
    "tezavnost": 3
  },
  {
    "iau": "Sgr",
    "l_ozvezdje": "Sagittarius",
    "ozvezdje": "Strelec",
    "nav_mag": "8,5",
    "tip": "Krogl. kop.",
    "ngc": 6864,
    "tezavnost": 2
  },
  {
    "iau": "Per",
    "l_ozvezdje": "Perseus",
    "ozvezdje": "Perzej",
    "nav_mag": "10,1",
    "tip": "Pl. meglica",
    "ngc": "650 & 651",
    "tezavnost": 2
  },
  {
    "iau": "Cet",
    "l_ozvezdje": "Cetus",
    "ozvezdje": "Kit",
    "nav_mag": "8,9",
    "tip": "Galaksija",
    "ngc": 1068,
    "tezavnost": 3
  },
  {
    "iau": "Ori",
    "l_ozvezdje": "Orion",
    "ozvezdje": "Orion",
    "nav_mag": "8,3",
    "tip": "Meglica",
    "ngc": 2068,
    "tezavnost": 2
  },
  {
    "iau": "Lep",
    "l_ozvezdje": "Lepus",
    "ozvezdje": "Zajec",
    "nav_mag": "7,7",
    "tip": "Krogl. kop.",
    "ngc": 1904,
    "tezavnost": 2
  },
  {
    "iau": "Sco",
    "l_ozvezdje": "Scorpius",
    "ozvezdje": "Škorpijon",
    "nav_mag": "7,3",
    "tip": "Krogl. kop.",
    "ngc": 6093,
    "tezavnost": 2
  },
  {
    "iau": "UMa",
    "l_ozvezdje": "Ursa Major",
    "ozvezdje": "Veliki medved",
    "nav_mag": "6,9",
    "tip": "Galaksija",
    "ngc": 3031,
    "tezavnost": 2
  },
  {
    "iau": "UMa",
    "l_ozvezdje": "Ursa Major",
    "ozvezdje": "Veliki medved",
    "nav_mag": "8,4",
    "tip": "Galaksija",
    "ngc": 3034,
    "tezavnost": 2
  },
  {
    "iau": "Hya",
    "l_ozvezdje": "Hydra",
    "ozvezdje": "Vodna kača",
    "nav_mag": "7,6",
    "tip": "Galaksija",
    "ngc": 5236,
    "tezavnost": 2
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "9,1",
    "tip": "Galaksija",
    "ngc": 4374,
    "tezavnost": 3
  },
  {
    "iau": "Com",
    "l_ozvezdje": "Coma Berenices",
    "ozvezdje": "Berenikini kodri",
    "nav_mag": "9,1",
    "tip": "Galaksija",
    "ngc": 4382,
    "tezavnost": 3
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "8,9",
    "tip": "Galaksija",
    "ngc": 4406,
    "tezavnost": 3
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "8,6",
    "tip": "Galaksija",
    "ngc": 4486,
    "tezavnost": 3
  },
  {
    "iau": "Com",
    "l_ozvezdje": "Coma Berenices",
    "ozvezdje": "Berenikini kodri",
    "nav_mag": "9,6",
    "tip": "Galaksija",
    "ngc": 4501,
    "tezavnost": 3
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "9,8",
    "tip": "Galaksija",
    "ngc": 4552,
    "tezavnost": 3
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "9,5",
    "tip": "Galaksija",
    "ngc": 4569,
    "tezavnost": 3
  },
  {
    "iau": "Com",
    "l_ozvezdje": "Coma Berenices",
    "ozvezdje": "Berenikini kodri",
    "nav_mag": "10,2",
    "tip": "Galaksija",
    "ngc": 4548,
    "tezavnost": 3
  },
  {
    "iau": "Her",
    "l_ozvezdje": "Hercules",
    "ozvezdje": "Herkul",
    "nav_mag": "6,4",
    "tip": "Krogl. kop.",
    "ngc": 6341,
    "tezavnost": 1
  },
  {
    "iau": "Pup",
    "l_ozvezdje": "Puppis",
    "ozvezdje": "Krma",
    "nav_mag": "6,0",
    "tip": "Razs. kop.",
    "ngc": 2447,
    "tezavnost": 2
  },
  {
    "iau": "CVn",
    "l_ozvezdje": "Canes Venatici",
    "ozvezdje": "Lovska psa",
    "nav_mag": "8,2",
    "tip": "Galaksija",
    "ngc": 4736,
    "tezavnost": 2
  },
  {
    "iau": "Leo",
    "l_ozvezdje": "Leo",
    "ozvezdje": "Lev",
    "nav_mag": "9,7",
    "tip": "Galaksija",
    "ngc": 3351,
    "tezavnost": 3
  },
  {
    "iau": "Leo",
    "l_ozvezdje": "Leo",
    "ozvezdje": "Lev",
    "nav_mag": "9,2",
    "tip": "Galaksija",
    "ngc": 3368,
    "tezavnost": 3
  },
  {
    "iau": "UMa",
    "l_ozvezdje": "Ursa Major",
    "ozvezdje": "Veliki medved",
    "nav_mag": "9,9",
    "tip": "Pl. meglica",
    "ngc": 3587,
    "tezavnost": 2
  },
  {
    "iau": "Com",
    "l_ozvezdje": "Coma Berenices",
    "ozvezdje": "Berenikini kodri",
    "nav_mag": "10,1",
    "tip": "Galaksija",
    "ngc": 4192,
    "tezavnost": 3
  },
  {
    "iau": "Com",
    "l_ozvezdje": "Coma Berenices",
    "ozvezdje": "Berenikini kodri",
    "nav_mag": "9,9",
    "tip": "Galaksija",
    "ngc": 4254,
    "tezavnost": 3
  },
  {
    "iau": "Com",
    "l_ozvezdje": "Coma Berenices",
    "ozvezdje": "Berenikini kodri",
    "nav_mag": "9,3",
    "tip": "Galaksija",
    "ngc": 4321,
    "tezavnost": 3
  },
  {
    "iau": "UMa",
    "l_ozvezdje": "Ursa Major",
    "ozvezdje": "Veliki medved",
    "nav_mag": "7,9",
    "tip": "Galaksija",
    "ngc": 5457,
    "tezavnost": 3
  },
  {
    "iau": "Dra",
    "l_ozvezdje": "Draco",
    "ozvezdje": "Zmaj",
    "nav_mag": "9,9",
    "tip": "Galaksija",
    "ngc": 5866,
    "tezavnost": 2
  },
  {
    "iau": "Cas",
    "l_ozvezdje": "Cassiopeia",
    "ozvezdje": "Kasiopeja",
    "nav_mag": "7,4",
    "tip": "Razs. kop.",
    "ngc": 581,
    "tezavnost": 1
  },
  {
    "iau": "Vir",
    "l_ozvezdje": "Virgo",
    "ozvezdje": "Devica",
    "nav_mag": "8,0",
    "tip": "Galaksija",
    "ngc": 4594,
    "tezavnost": 2
  },
  {
    "iau": "Leo",
    "l_ozvezdje": "Leo",
    "ozvezdje": "Lev",
    "nav_mag": "9,3",
    "tip": "Galaksija",
    "ngc": 3379,
    "tezavnost": 3
  },
  {
    "iau": "CVn",
    "l_ozvezdje": "Canes Venatici",
    "ozvezdje": "Lovska psa",
    "nav_mag": "8,4",
    "tip": "Galaksija",
    "ngc": 4258,
    "tezavnost": 3
  },
  {
    "iau": "Oph",
    "l_ozvezdje": "Ophiuchus",
    "ozvezdje": "Kačenosec",
    "nav_mag": "7,9",
    "tip": "Krogl. kop.",
    "ngc": 6171,
    "tezavnost": 2
  },
  {
    "iau": "UMa",
    "l_ozvezdje": "Ursa Major",
    "ozvezdje": "Veliki medved",
    "nav_mag": "10,0",
    "tip": "Galaksija",
    "ngc": 3556,
    "tezavnost": 3
  },
  {
    "iau": "UMa",
    "l_ozvezdje": "Ursa Major",
    "ozvezdje": "Veliki medved",
    "nav_mag": "9,8",
    "tip": "Galaksija",
    "ngc": 3992,
    "tezavnost": 3
  },
  {
    "iau": "And",
    "l_ozvezdje": "Andromeda",
    "ozvezdje": "Andromeda",
    "nav_mag": "8,5",
    "tip": "Galaksija",
    "ngc": 205,
    "tezavnost": 3
  }
]

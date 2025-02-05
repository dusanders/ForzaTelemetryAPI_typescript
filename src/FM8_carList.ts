export interface FM8Car {
  name: string;
  category: string;
  ordinal: number;
}
export class FM8_CarLookup {
  private static carData: { [key: number]: { name: string, category: string } } = {
    "247": {
      "name": "1969 Toyota 2000GT",
      "category": "Sport Coupe Icons"
    },
    "249": {
      "name": "1962 Ferrari 250 GTO",
      "category": "Vintage Le Mans Sportscars"
    },
    "251": {
      "name": "1954 Mercedes-Benz 300 SL Coupé",
      "category": "Sport Coupe Icons"
    },
    "253": {
      "name": "1994 Ferrari F355 Berlinetta",
      "category": "Sport GT Icons"
    },
    "255": {
      "name": "1992 Ferrari 512 TR",
      "category": "Exotic GT Classics"
    },
    "257": {
      "name": "2002 Ferrari 575M Maranello",
      "category": "Exotic GT Classics"
    },
    "260": {
      "name": "1973 Porsche 911 Carrera RS",
      "category": "Vintage Sport Compact"
    },
    "261": {
      "name": "1995 Porsche 911 GT2",
      "category": "Sport GT Icons"
    },
    "262": {
      "name": "2004 Porsche 911 GT3",
      "category": "Sport GT Icons"
    },
    "263": {
      "name": "2007 Porsche 911 GT3",
      "category": "Sport GT Icons"
    },
    "265": {
      "name": "1982 Porsche 911 Turbo 3.3",
      "category": "Sport GT Icons"
    },
    "266": {
      "name": "1970 Porsche 914/6",
      "category": "Vintage Sport Compact"
    },
    "268": {
      "name": "1989 Porsche 944 Turbo",
      "category": "Sport Touring Classics"
    },
    "269": {
      "name": "1987 Porsche 959",
      "category": "Exotic GT Classics"
    },
    "278": {
      "name": "2006 Vauxhall Astra VXR",
      "category": "Modern Hot Hatch"
    },
    "286": {
      "name": "2004 Mercedes-Benz C 32 AMG",
      "category": "Sport Touring Classics"
    },
    "287": {
      "name": "2002 Chevrolet Camaro 35th Anniversary Super Sport",
      "category": "Sport Touring Classics"
    },
    "289": {
      "name": "1969 Chevrolet Camaro Super Sport Coupe",
      "category": "Vintage Muscle"
    },
    "291": {
      "name": "1990 Vauxhall Lotus Carlton",
      "category": "Sport Touring Classics"
    },
    "292": {
      "name": "2003 Porsche Carrera GT",
      "category": "Exotic GT Classics"
    },
    "295": {
      "name": "2003 Toyota Celica Sport Specialty II",
      "category": "Early Sport Compact"
    },
    "297": {
      "name": "2003 Ferrari 360 Challenge Stradale",
      "category": "Sport GT Icons"
    },
    "299": {
      "name": "1970 Chevrolet Chevelle Super Sport 454",
      "category": "Street Drag Racers"
    },
    "302": {
      "name": "2004 Honda Civic Type R",
      "category": "Modern Hot Hatch"
    },
    "306": {
      "name": "1965 Shelby Cobra 427 S/C",
      "category": "Vintage Le Mans Sportscars"
    },
    "309": {
      "name": "1995 Volkswagen Corrado VR6",
      "category": "Hot Hatch Icons"
    },
    "312": {
      "name": "1967 Chevrolet Corvette Stingray 427",
      "category": "Vintage Muscle"
    },
    "314": {
      "name": "2002 Chevrolet Corvette Z06",
      "category": "Sport GT Icons"
    },
    "315": {
      "name": "1970 Chevrolet Corvette ZR-1",
      "category": "Vintage Muscle"
    },
    "316": {
      "name": "1988 Lamborghini Countach LP5000 QV",
      "category": "Exotic GT Classics"
    },
    "320": {
      "name": "1991 Honda CR-X SiR",
      "category": "Hot Hatch Icons"
    },
    "323": {
      "name": "1992 Lancia Delta HF Integrale EVO",
      "category": "Hot Hatch Icons"
    },
    "324": {
      "name": "1999 Lamborghini Diablo GTR",
      "category": "Early Factory Racecars"
    },
    "325": {
      "name": "1997 Lamborghini Diablo SV",
      "category": "Exotic GT Classics"
    },
    "326": {
      "name": "1969 Ferrari Dino 246 GT",
      "category": "Vintage Exotic GT"
    },
    "327": {
      "name": "1995 Mitsubishi Eclipse GSX",
      "category": "Early Sport Compact"
    },
    "330": {
      "name": "1971 Lotus Elan Sprint",
      "category": "Vintage Sport Compact"
    },
    "333": {
      "name": "2002 Ferrari Enzo Ferrari",
      "category": "Exotic GT Classics"
    },
    "335": {
      "name": "2002 Lotus Esprit V8",
      "category": "Sport GT Icons"
    },
    "336": {
      "name": "1961 Jaguar E-type",
      "category": "Vintage Le Mans Sportscars"
    },
    "338": {
      "name": "1997 McLaren F1 GT",
      "category": "Early Factory Racecars"
    },
    "340": {
      "name": "1987 Ferrari F40",
      "category": "Exotic GT Classics"
    },
    "342": {
      "name": "1995 Ferrari F50",
      "category": "Exotic GT Classics"
    },
    "343": {
      "name": "1969 Nissan Fairlady Z 432",
      "category": "Vintage Sport Compact"
    },
    "344": {
      "name": "2003 Nissan Fairlady Z",
      "category": "Early Sport Compact"
    },
    "345": {
      "name": "1994 Nissan Fairlady Z Version S Twin Turbo",
      "category": "Sport GT Icons"
    },
    "348": {
      "name": "2005 Ford Ford GT",
      "category": "Modern Sport GT"
    },
    "349": {
      "name": "1998 Mitsubishi FTO GP Version R",
      "category": "Early Sport Compact"
    },
    "350": {
      "name": "2003 Infiniti G35 Coupe",
      "category": "Sport Touring Classics"
    },
    "353": {
      "name": "1992 Volkswagen Golf Gti 16v Mk2",
      "category": "Hot Hatch Icons"
    },
    "354": {
      "name": "2003 Volkswagen Golf R32",
      "category": "Modern Hot Hatch"
    },
    "357": {
      "name": "1997 Mitsubishi GTO",
      "category": "Early Sport Compact"
    },
    "358": {
      "name": "1984 Ferrari 288 GTO",
      "category": "Sport GT Icons"
    },
    "363": {
      "name": "1998 SUBARU Impreza 22B-STi Version",
      "category": "Early Sport Compact"
    },
    "364": {
      "name": "2004 SUBARU IMPREZA WRX STI",
      "category": "Early Sport Compact"
    },
    "365": {
      "name": "2005 SUBARU IMPREZA WRX STI",
      "category": "Modern Sport Compact"
    },
    "368": {
      "name": "2001 Acura Integra Type R",
      "category": "Early Sport Compact"
    },
    "374": {
      "name": "2006 Mitsubishi Lancer Evolution IX MR",
      "category": "Modern Sport Compact"
    },
    "375": {
      "name": "1999 Mitsubishi Lancer Evolution VI GSR",
      "category": "Early Sport Compact"
    },
    "378": {
      "name": "2004 Mitsubishi Lancer Evolution VIII MR",
      "category": "Early Sport Compact"
    },
    "382": {
      "name": "1997 BMW M3",
      "category": "Sport Touring Classics"
    },
    "383": {
      "name": "2005 BMW M3",
      "category": "Sport Touring Classics"
    },
    "391": {
      "name": "2004 Maserati MC12",
      "category": "Exotic GT Classics"
    },
    "398": {
      "name": "1995 Toyota MR2 GT",
      "category": "Early Sport Compact"
    },
    "405": {
      "name": "2000 Ford SVT Cobra R",
      "category": "Sport Touring Classics"
    },
    "411": {
      "name": "2005 Honda NSX-R",
      "category": "Sport GT Icons"
    },
    "412": {
      "name": "1992 Honda NSX-R",
      "category": "Sport GT Icons"
    },
    "417": {
      "name": "1970 Buick GSX",
      "category": "Street Drag Racers"
    },
    "419": {
      "name": "2006 Audi RS 4",
      "category": "Sport Touring Classics"
    },
    "420": {
      "name": "2003 Audi RS 6",
      "category": "Sport Touring Classics"
    },
    "423": {
      "name": "1990 Mazda Savanna RX-7",
      "category": "Early Sport Compact"
    },
    "424": {
      "name": "1997 Mazda RX-7",
      "category": "Early Sport Compact"
    },
    "425": {
      "name": "2002 Mazda RX-7 Spirit R Type-A",
      "category": "Early Sport Compact"
    },
    "428": {
      "name": "2004 Audi S4",
      "category": "Sport Touring Classics"
    },
    "432": {
      "name": "2004 Saleen S7",
      "category": "Exotic GT Classics"
    },
    "439": {
      "name": "1992 Nissan Silvia CLUB K’s",
      "category": "Early Sport Compact"
    },
    "440": {
      "name": "1994 Nissan Silvia K’s",
      "category": "Early Sport Compact"
    },
    "441": {
      "name": "2000 Nissan Silvia Spec-R",
      "category": "Early Sport Compact"
    },
    "444": {
      "name": "1993 Nissan Skyline GT-R V-Spec",
      "category": "Sport GT Icons"
    },
    "445": {
      "name": "2002 Nissan Skyline GT-R V-Spec II",
      "category": "Sport GT Icons"
    },
    "453": {
      "name": "2003 Renault Sport Clio V6",
      "category": "Modern Hot Hatch"
    },
    "455": {
      "name": "1985 Toyota Sprinter Trueno GT Apex",
      "category": "Hot Hatch Icons"
    },
    "457": {
      "name": "1996 Dodge Stealth R/T Turbo",
      "category": "Early Sport Compact"
    },
    "460": {
      "name": "1992 Toyota Supra 2.0 GT",
      "category": "Early Sport Compact"
    },
    "461": {
      "name": "1998 Toyota Supra RZ",
      "category": "Sport GT Icons"
    },
    "462": {
      "name": "1998 Eagle Talon TSi Turbo",
      "category": "Early Sport Compact"
    },
    "479": {
      "name": "2001 Aston Martin V12 Vanquish",
      "category": "Exotic GT Classics"
    },
    "483": {
      "name": "1999 Dodge Viper GTS ACR",
      "category": "Sport GT Icons"
    },
    "489": {
      "name": "1993 Jaguar XJ220",
      "category": "Exotic GT Classics"
    },
    "498": {
      "name": "2003 Bentley #7 Team Bentley Speed 8",
      "category": "Early LMP"
    },
    "505": {
      "name": "1999 BMW #15 BMW Motorsport V12 LMR",
      "category": "Early LMP"
    },
    "513": {
      "name": "1969 Dodge Charger R/T",
      "category": "Vintage Muscle"
    },
    "524": {
      "name": "1998 Ferrari #12 Risi Competizione F333 SP",
      "category": "Early LMP"
    },
    "540": {
      "name": "1987 Porsche #17 Porsche AG 962c",
      "category": "GTP/C"
    },
    "550": {
      "name": "1993 Peugeot #3 Peugeot Talbot Sport 905 EVO 1C",
      "category": "GTP/C"
    },
    "555": {
      "name": "1999 Toyota #3 Toyota Motorsports GT-ONE TS020",
      "category": "Early LMP"
    },
    "565": {
      "name": "2002 BMW M3-GTR",
      "category": "Sport Touring Classics"
    },
    "567": {
      "name": "1998 Nissan R390 (GT1)",
      "category": "Exotic GT Classics"
    },
    "568": {
      "name": "1998 Mercedes-Benz AMG CLK GTR",
      "category": "Early Factory Racecars"
    },
    "633": {
      "name": "1984 Audi Sport quattro",
      "category": "Sport Touring Classics"
    },
    "634": {
      "name": "1980 Renault 5 Turbo",
      "category": "Hot Hatch Icons"
    },
    "637": {
      "name": "1967 Lamborghini Miura P400",
      "category": "Vintage Exotic GT"
    },
    "639": {
      "name": "1970 Dodge Challenger R/T",
      "category": "Street Drag Racers"
    },
    "641": {
      "name": "1997 Porsche 911 GT1 Strassenversion",
      "category": "Early Factory Racecars"
    },
    "642": {
      "name": "1991 BMW M3",
      "category": "Sport Touring Classics"
    },
    "1005": {
      "name": "1973 Pontiac Firebird Trans Am SD-455",
      "category": "Vintage Muscle"
    },
    "1009": {
      "name": "2008 Mitsubishi Lancer Evolution X GSR",
      "category": "Modern Sport Compact"
    },
    "1020": {
      "name": "1996 Ferrari F50 GT",
      "category": "Early Factory Racecars"
    },
    "1022": {
      "name": "2007 Ferrari 430 Scuderia",
      "category": "Modern Sport GT"
    },
    "1023": {
      "name": "1989 Ferrari F40 Competizione",
      "category": "Early Factory Racecars"
    },
    "1033": {
      "name": "1990 Chevrolet Camaro IROC-Z",
      "category": "Sport Touring Classics"
    },
    "1034": {
      "name": "1994 Toyota Celica GT-Four ST205",
      "category": "Early Sport Compact"
    },
    "1040": {
      "name": "1981 BMW M1",
      "category": "Sport GT Icons"
    },
    "1041": {
      "name": "1993 Ford SVT Cobra R",
      "category": "Sport Touring Classics"
    },
    "1042": {
      "name": "1971 Nissan Skyline 2000GT-R",
      "category": "Vintage Sport Compact"
    },
    "1043": {
      "name": "1997 Nissan Skyline GT-R V-Spec",
      "category": "Sport GT Icons"
    },
    "1045": {
      "name": "1987 Pontiac Firebird Trans Am GTA",
      "category": "Sport Touring Classics"
    },
    "1046": {
      "name": "2008 Dodge Viper SRT10 ACR",
      "category": "Modern Sport GT"
    },
    "1060": {
      "name": "2008 SUBARU IMPREZA WRX STI",
      "category": "Modern Sport Compact"
    },
    "1063": {
      "name": "1969 Dodge Charger Daytona HEMI",
      "category": "Vintage Muscle"
    },
    "1065": {
      "name": "2002 Pontiac Firebird Trans Am Ram Air",
      "category": "Sport Touring Classics"
    },
    "1069": {
      "name": "2009 Chevrolet Corvette ZR1",
      "category": "Modern Sport GT"
    },
    "1081": {
      "name": "2008 Aston Martin DBS",
      "category": "Modern Sport GT"
    },
    "1086": {
      "name": "2009 Ford Focus RS",
      "category": "Modern Hot Hatch"
    },
    "1090": {
      "name": "2009 Mercedes-Benz SL 65 AMG Black Series",
      "category": "Modern Sport GT"
    },
    "1104": {
      "name": "1970 Datsun 510",
      "category": "Vintage Sport Compact"
    },
    "1105": {
      "name": "1964 Aston Martin DB5",
      "category": "Sport Coupe Icons"
    },
    "1110": {
      "name": "1994 Mazda MX-5 Miata",
      "category": "Early Sport Compact"
    },
    "1125": {
      "name": "2008 Lamborghini Revénton",
      "category": "Modern Exotic GT"
    },
    "1131": {
      "name": "2009 Ferrari 458 Italia",
      "category": "Modern Sport GT"
    },
    "1150": {
      "name": "1965 Alfa Romeo Giulia Sprint GTA Stradale",
      "category": "Vintage Sport Compact"
    },
    "1154": {
      "name": "1957 Ferrari 250 Testa Rossa",
      "category": "Vintage Le Mans Sportscars"
    },
    "1155": {
      "name": "1965 Shelby Cobra Daytona Coupe",
      "category": "Vintage Le Mans Sportscars"
    },
    "1171": {
      "name": "2010 Ferrari 599XX",
      "category": "Modern Factory Racecars"
    },
    "1173": {
      "name": "2010 Lamborghini Murciélago LP 670-4 SV",
      "category": "Modern Exotic GT"
    },
    "1202": {
      "name": "2011 Mercedes-Benz SLS AMG",
      "category": "Modern Sport GT"
    },
    "1216": {
      "name": "2011 Audi RS 3 Sportback",
      "category": "Modern Hot Hatch"
    },
    "1219": {
      "name": "1992 Bugatti EB110 Super Sport",
      "category": "Exotic GT Classics"
    },
    "1260": {
      "name": "2010 Lexus LFA",
      "category": "Modern Sport GT"
    },
    "1267": {
      "name": "1971 AMC Javelin AMX",
      "category": "Vintage Muscle"
    },
    "1268": {
      "name": "2002 BMW Z3 M Coupé",
      "category": "Early Sport Compact"
    },
    "1269": {
      "name": "1973 BMW 2002 Turbo",
      "category": "Vintage Sport Compact"
    },
    "1272": {
      "name": "1992 Ford Escort RS Cosworth",
      "category": "Hot Hatch Icons"
    },
    "1273": {
      "name": "1997 Honda Civic Type R",
      "category": "Hot Hatch Icons"
    },
    "1277": {
      "name": "1971 Plymouth Cuda 426 HEMI",
      "category": "Vintage Muscle"
    },
    "1278": {
      "name": "1973 Ford XB Falcon GT",
      "category": "Vintage Muscle"
    },
    "1280": {
      "name": "1970 Mercury Cougar Eliminator",
      "category": "Vintage Muscle"
    },
    "1281": {
      "name": "1955 Porsche 550 Spyder",
      "category": "Sport Coupe Icons"
    },
    "1282": {
      "name": "1993 Nissan 240SX SE",
      "category": "Early Sport Compact"
    },
    "1292": {
      "name": "1986 Dodge Shelby Omni GLHS",
      "category": "Hot Hatch Icons"
    },
    "1293": {
      "name": "1987 Ford Sierra Cosworth RS500",
      "category": "Sport Touring Classics"
    },
    "1296": {
      "name": "1990 Mercedes-Benz 190E 2.5-16 Evolution II",
      "category": "Sport Touring Classics"
    },
    "1301": {
      "name": "1956 Jaguar D-Type",
      "category": "Vintage Le Mans Sportscars"
    },
    "1302": {
      "name": "1977 Ford Escort RS1800",
      "category": "Vintage Sport Compact"
    },
    "1306": {
      "name": "2005 Dodge SRT-4 ACR",
      "category": "Early Sport Compact"
    },
    "1309": {
      "name": "1969 Pontiac GTO Judge",
      "category": "Street Drag Racers"
    },
    "1314": {
      "name": "1993 McLaren F1",
      "category": "Exotic GT Classics"
    },
    "1317": {
      "name": "2010 Chevrolet #55 Level 5 Motorsports Oreca FLM09",
      "category": "Forza P2"
    },
    "1322": {
      "name": "2011 Lamborghini Gallardo LP 570-4 Superleggera",
      "category": "Modern Sport GT"
    },
    "1323": {
      "name": "2011 SUBARU WRX STI",
      "category": "Modern Sport Compact"
    },
    "1325": {
      "name": "2011 Alfa Romeo Giulietta Quadrifoglio Verde",
      "category": "Modern Hot Hatch"
    },
    "1328": {
      "name": "2011 Bugatti Veyron Super Sport",
      "category": "Modern Hypercars"
    },
    "1329": {
      "name": "1987 Buick Regal GNX",
      "category": "Sport Touring Classics"
    },
    "1330": {
      "name": "1970 Chevrolet Camaro Z28",
      "category": "Vintage Muscle"
    },
    "1331": {
      "name": "1971 Plymouth GTX 426 HEMI",
      "category": "Street Drag Racers"
    },
    "1335": {
      "name": "1991 Mazda #55 Mazda 787B",
      "category": "GTP/C"
    },
    "1336": {
      "name": "1969 Oldsmobile Hurst/Olds 442",
      "category": "Street Drag Racers"
    },
    "1337": {
      "name": "1969 Pontiac Firebird Trans Am",
      "category": "Vintage Muscle"
    },
    "1348": {
      "name": "2011 Peugeot 308 GTI",
      "category": "Modern Hot Hatch"
    },
    "1352": {
      "name": "1970 Dodge Coronet Super Bee",
      "category": "Street Drag Racers"
    },
    "1355": {
      "name": "1965 Ford Mustang GT Coupe",
      "category": "Vintage Muscle"
    },
    "1368": {
      "name": "1988 BMW M5",
      "category": "Sport Touring Classics"
    },
    "1369": {
      "name": "2009 Pagani Zonda Cinque Roadster",
      "category": "Modern Hypercars"
    },
    "1370": {
      "name": "1995 Audi Avant RS 2",
      "category": "Sport Touring Classics"
    },
    "1380": {
      "name": "1981 Volkswagen Scirocco S",
      "category": "Hot Hatch Icons"
    },
    "1381": {
      "name": "1992 Mitsubishi Galant VR-4",
      "category": "Early Sport Compact"
    },
    "1382": {
      "name": "1990 SUBARU LEGACY RS",
      "category": "Early Sport Compact"
    },
    "1383": {
      "name": "1998 Volkswagen Gti VR6 Mk3",
      "category": "Hot Hatch Icons"
    },
    "1385": {
      "name": "2011 BMW 1 Series M Coupé",
      "category": "Modern Sport Coupe"
    },
    "1386": {
      "name": "1958 Aston Martin DBR1",
      "category": "Vintage Le Mans Sportscars"
    },
    "1387": {
      "name": "1997 Volvo 850 R",
      "category": "Sport Touring Classics"
    },
    "1388": {
      "name": "2012 BMW M5",
      "category": "Modern Sport Touring"
    },
    "1392": {
      "name": "2011 Lamborghini Sesto Elemento",
      "category": "Modern Sport GT"
    },
    "1395": {
      "name": "1989 Toyota MR2 SC",
      "category": "Early Sport Compact"
    },
    "1426": {
      "name": "2011 Mazda RX-8 R3",
      "category": "Modern Sport Compact"
    },
    "1429": {
      "name": "1969 Chevrolet Nova Super Sport 396",
      "category": "Street Drag Racers"
    },
    "1440": {
      "name": "2011 Ferrari #62 Risi Competizione F458 Italia GTC",
      "category": "Forza GT"
    },
    "1457": {
      "name": "1969 McLaren #4 McLaren Cars M8B",
      "category": "Prototype Group Racing"
    },
    "1462": {
      "name": "1957 Maserati 300 S",
      "category": "Vintage Le Mans Sportscars"
    },
    "1480": {
      "name": "1985 Mazda RX-7 GSL-SE",
      "category": "Early Sport Compact"
    },
    "1481": {
      "name": "1965 Austin-Healey 3000 MkIII",
      "category": "Sport Coupe Icons"
    },
    "1486": {
      "name": "1966 Ford Lotus Cortina",
      "category": "Vintage Sport Compact"
    },
    "1487": {
      "name": "1958 MG MGA Twin-Cam",
      "category": "Sport Coupe Icons"
    },
    "1490": {
      "name": "2012 Vauxhall Astra VXR",
      "category": "Modern Hot Hatch"
    },
    "1493": {
      "name": "1995 BMW 850CSi",
      "category": "Sport GT Icons"
    },
    "1500": {
      "name": "2012 Mercedes-Benz C 63 AMG Coupé Black Series",
      "category": "Modern Sport Touring"
    },
    "1511": {
      "name": "1968 Holden Monaro GTS 327",
      "category": "Street Drag Racers"
    },
    "1513": {
      "name": "1997 Maserati Ghibli Cup",
      "category": "Sport Touring Classics"
    },
    "1514": {
      "name": "1973 Mazda RX-3",
      "category": "Vintage Sport Compact"
    },
    "1517": {
      "name": "1992 Toyota Celica GT-Four RC ST185",
      "category": "Early Sport Compact"
    },
    "1519": {
      "name": "1998 Aston Martin V8 Vantage V600",
      "category": "Sport GT Icons"
    },
    "1524": {
      "name": "1961 Maserati Tipo 61 Birdcage",
      "category": "Vintage Le Mans Sportscars"
    },
    "1525": {
      "name": "2012 Mercedes-Benz SLK 55 AMG",
      "category": "Modern Sport Coupe"
    },
    "1533": {
      "name": "1977 Holden Torana A9X",
      "category": "Vintage Sport Compact"
    },
    "1535": {
      "name": "2013 Lexus GS350 F Sport",
      "category": "Sport Luxury"
    },
    "1537": {
      "name": "1974 Toyota Corolla SR5",
      "category": "Vintage Sport Compact"
    },
    "1539": {
      "name": "2012 Porsche 911 GT2 RS",
      "category": "Modern Sport GT"
    },
    "1550": {
      "name": "1960 Aston Martin DB4 GT Zagato",
      "category": "Vintage Le Mans Sportscars"
    },
    "1551": {
      "name": "1989 Aston Martin #18 Aston Martin AMR1",
      "category": "GTP/C"
    },
    "1553": {
      "name": "1966 Chaparral #66 Chaparral Cars 2E",
      "category": "Prototype Group Racing"
    },
    "1559": {
      "name": "1955 Mercedes-Benz 300 SLR",
      "category": "Vintage Le Mans Sportscars"
    },
    "1560": {
      "name": "1989 Mercedes-Benz #63 Sauber-Mercedes C 9",
      "category": "GTP/C"
    },
    "1562": {
      "name": "2013 SRT Viper GTS",
      "category": "Modern Sport GT"
    },
    "1572": {
      "name": "1970 AMC Rebel The Machine",
      "category": "Street Drag Racers"
    },
    "1573": {
      "name": "1989 Audi #4 Audi 90 quattro IMSA GTO",
      "category": "GTX Sportscars"
    },
    "1575": {
      "name": "1988 Chevrolet Monte Carlo Super Sport",
      "category": "Sport Touring Classics"
    },
    "1578": {
      "name": "1962 Ferrari 250 GT Berlinetta Lusso",
      "category": "Sport Coupe Icons"
    },
    "1580": {
      "name": "1973 Ford Escort RS1600",
      "category": "Vintage Sport Compact"
    },
    "1583": {
      "name": "2012 Lamborghini Aventador J",
      "category": "Modern Exotic GT"
    },
    "1587": {
      "name": "1972 Mazda Cosmo 110S Series II",
      "category": "Sport Coupe Icons"
    },
    "1589": {
      "name": "1966 MG MGB GT",
      "category": "Vintage Sport Compact"
    },
    "1591": {
      "name": "1984 Peugeot 205 Turbo 16",
      "category": "Hot Hatch Icons"
    },
    "1592": {
      "name": "1974 Toyota Celica GT",
      "category": "Vintage Sport Compact"
    },
    "1598": {
      "name": "2010 BMW M3 GTS",
      "category": "Modern Sport Touring"
    },
    "1599": {
      "name": "2012 Ferrari 599XX Evolution",
      "category": "Modern Factory Racecars"
    },
    "1607": {
      "name": "2013 Audi RS 4 Avant",
      "category": "Modern Sport Touring"
    },
    "1612": {
      "name": "1988 Volkswagen Scirocco 16v",
      "category": "Hot Hatch Icons"
    },
    "1620": {
      "name": "2012 Dodge Challenger SRT8",
      "category": "Modern Sport Touring"
    },
    "1651": {
      "name": "2013 Ariel Atom 500 V8",
      "category": "Track Toys"
    },
    "1652": {
      "name": "2013 Caterham Superlight R500",
      "category": "Track Toys"
    },
    "1653": {
      "name": "2013 KTM X-Bow R",
      "category": "Track Toys"
    },
    "1655": {
      "name": "2013 SUBARU BRZ",
      "category": "Modern Sport Compact"
    },
    "1658": {
      "name": "2013 Mercedes-Benz A 45 AMG",
      "category": "Modern Hot Hatch"
    },
    "1662": {
      "name": "1965 MINI Cooper S",
      "category": "Vintage Sport Compact"
    },
    "1663": {
      "name": "2012 Infiniti IPL G Coupe",
      "category": "Modern Sport Touring"
    },
    "1665": {
      "name": "2011 Citroen DS 3 Racing",
      "category": "Modern Hot Hatch"
    },
    "1667": {
      "name": "2013 McLaren P1",
      "category": "Modern Exotic GT"
    },
    "1668": {
      "name": "1969 Ford Mustang Boss 302",
      "category": "Vintage Muscle"
    },
    "1670": {
      "name": "1988 McLaren #12 Honda McLaren MP4/4",
      "category": "Grand Prix Rivals"
    },
    "1671": {
      "name": "1966 McLaren M2B",
      "category": "Formula 60s"
    },
    "1672": {
      "name": "1976 McLaren #11 Team McLaren M23",
      "category": "Formula 70s"
    },
    "2003": {
      "name": "2012 MINI John Cooper Works GP",
      "category": "Modern Hot Hatch"
    },
    "2004": {
      "name": "2013 Mazda MX-5",
      "category": "Modern Sport Compact"
    },
    "2005": {
      "name": "2009 Honda S2000 CR",
      "category": "Modern Sport Compact"
    },
    "2006": {
      "name": "1995 Chevrolet Corvette ZR-1",
      "category": "Sport GT Icons"
    },
    "2009": {
      "name": "2013 Audi RS 7 Sportback",
      "category": "Sport Luxury"
    },
    "2010": {
      "name": "2013 Audi R8 Coupé V10 plus 5.2 FSI quattro",
      "category": "Modern Sport GT"
    },
    "2015": {
      "name": "1976 Ferrari #1 Scuderia Ferrari 312 T2",
      "category": "Formula 70s"
    },
    "2018": {
      "name": "2013 BMW M6 Coupé",
      "category": "Sport Luxury"
    },
    "2019": {
      "name": "2003 Ford Focus RS",
      "category": "Modern Hot Hatch"
    },
    "2024": {
      "name": "1967 Lotus Type 49",
      "category": "Formula 60s"
    },
    "2033": {
      "name": "1967 Brabham BT24",
      "category": "Formula 60s"
    },
    "2034": {
      "name": "2013 Ferrari LaFerrari",
      "category": "Modern Exotic GT"
    },
    "2038": {
      "name": "2014 Alfa Romeo 4C",
      "category": "Modern Sport Coupe"
    },
    "2040": {
      "name": "2014 BAC Mono",
      "category": "Track Toys"
    },
    "2042": {
      "name": "2013 Lamborghini Veneno",
      "category": "Modern Hypercars"
    },
    "2051": {
      "name": "2014 Maserati Ghibli S Q4",
      "category": "Sport Luxury"
    },
    "2066": {
      "name": "1926 Bugatti Type 35 C",
      "category": "The Birth of Grand Prix"
    },
    "2068": {
      "name": "1939 Maserati 8CTF",
      "category": "The Birth of Grand Prix"
    },
    "2069": {
      "name": "1939 Mercedes-Benz W154",
      "category": "The Birth of Grand Prix"
    },
    "2083": {
      "name": "2015 Mazda Formula Mazda",
      "category": "Formula Mazda Spec"
    },
    "2096": {
      "name": "1939 Auto Union Type D",
      "category": "The Birth of Grand Prix"
    },
    "2097": {
      "name": "2014 Lexus IS 350 F Sport",
      "category": "Modern Sport Touring"
    },
    "2103": {
      "name": "1979 BMW #6 BMW Motorsport M1 Procar",
      "category": "GTX Sportscars"
    },
    "2104": {
      "name": "2013 Dodge Dart GT",
      "category": "Modern Sport Compact"
    },
    "2105": {
      "name": "2013 Donkervoort D8 GTO",
      "category": "Track Toys"
    },
    "2112": {
      "name": "1975 BMW #25 BMW Motorsport 3.0 CSL",
      "category": "GTX Sportscars"
    },
    "2125": {
      "name": "1981 Ford #2 Zakspeed Racing Capri Turbo",
      "category": "GTX Sportscars"
    },
    "2126": {
      "name": "1990 Ferrari #1 Scuderia Ferrari 641",
      "category": "Grand Prix Rivals"
    },
    "2131": {
      "name": "2014 HSV GEN-F GTS",
      "category": "Modern Sport Touring"
    },
    "2133": {
      "name": "2015 BMW i8",
      "category": "Sport Luxury"
    },
    "2142": {
      "name": "2014 Volkswagen Golf R",
      "category": "Modern Hot Hatch"
    },
    "2149": {
      "name": "1993 Renault Clio Williams",
      "category": "Hot Hatch Icons"
    },
    "2158": {
      "name": "1981 Ford Fiesta XR2",
      "category": "Hot Hatch Icons"
    },
    "2160": {
      "name": "1979 Opel Kadett C GT/E",
      "category": "Vintage Sport Compact"
    },
    "2162": {
      "name": "2015 Jaguar F-TYPE R Coupé",
      "category": "Modern Sport Coupe"
    },
    "2164": {
      "name": "2014 Lamborghini Huracán LP 610-4",
      "category": "Modern Sport GT"
    },
    "2165": {
      "name": "2011 Lotus Evora S",
      "category": "Modern Sport Coupe"
    },
    "2166": {
      "name": "2014 Infiniti Q50 Eau Rouge",
      "category": "Sport Luxury"
    },
    "2168": {
      "name": "2015 SUBARU WRX STI",
      "category": "Modern Sport Compact"
    },
    "2175": {
      "name": "2015 Lexus RC F",
      "category": "Modern Sport Coupe"
    },
    "2177": {
      "name": "2015 Chevrolet Corvette Z06",
      "category": "Modern Sport GT"
    },
    "2178": {
      "name": "2001 Audi RS 4 Avant",
      "category": "Sport Touring Classics"
    },
    "2179": {
      "name": "2015 Audi S1",
      "category": "Modern Hot Hatch"
    },
    "2180": {
      "name": "2015 Audi RS 6 Avant",
      "category": "Sport Luxury"
    },
    "2181": {
      "name": "2013 Aston Martin V12 Vantage S",
      "category": "Modern Sport GT"
    },
    "2184": {
      "name": "2013 Ferrari 458 Speciale",
      "category": "Modern Sport GT"
    },
    "2185": {
      "name": "2015 Jaguar XFR-S",
      "category": "Sport Luxury"
    },
    "2186": {
      "name": "1953 Ferrari 500 Mondial",
      "category": "Vintage Le Mans Sportscars"
    },
    "2189": {
      "name": "2015 McLaren 650S Coupe",
      "category": "Modern Sport GT"
    },
    "2193": {
      "name": "2000 BMW 323ti Sport",
      "category": "Early Sport Compact"
    },
    "2194": {
      "name": "2014 Ferrari California T",
      "category": "Modern Sport GT"
    },
    "2203": {
      "name": "1988 Holden VL Commodore Group A SV",
      "category": "Sport Touring Classics"
    },
    "2205": {
      "name": "1970 Honda S800",
      "category": "Sport Coupe Icons"
    },
    "2207": {
      "name": "1972 Lamborghini Jarama S",
      "category": "Vintage Exotic GT"
    },
    "2209": {
      "name": "1992 Mazda 323 GT-R",
      "category": "Hot Hatch Icons"
    },
    "2226": {
      "name": "2014 Chevrolet #3 Corvette Racing Corvette C7.R",
      "category": "Forza GT"
    },
    "2229": {
      "name": "2014 Dodge #93 SRT Motorsports Viper GTS-R",
      "category": "Forza GT"
    },
    "2235": {
      "name": "2015 Jaguar XKR-S GT",
      "category": "Modern Sport Touring"
    },
    "2240": {
      "name": "2014 Mazda #70 SpeedSource Lola B12/80",
      "category": "Forza P2"
    },
    "2255": {
      "name": "1990 Mazda MX-5 Miata",
      "category": "Early Sport Compact"
    },
    "2262": {
      "name": "2016 Cadillac ATS-V",
      "category": "Modern Sport Touring"
    },
    "2265": {
      "name": "1967 Honda RA300",
      "category": "Formula 60s"
    },
    "2266": {
      "name": "1976 Lotus #5 Team Lotus 77",
      "category": "Formula 70s"
    },
    "2267": {
      "name": "2016 Mazda MX-5",
      "category": "Modern Sport Compact"
    },
    "2268": {
      "name": "1963 Ferrari 250LM",
      "category": "Vintage Le Mans Sportscars"
    },
    "2269": {
      "name": "1969 Nissan #21 Nissan Racing R382",
      "category": "Prototype Group Racing"
    },
    "2270": {
      "name": "1973 Nissan Skyline H/T 2000GT-R",
      "category": "Vintage Sport Compact"
    },
    "2271": {
      "name": "2014 Audi #2 Audi Team Joest R18 e-tron quattro",
      "category": "Forza P1"
    },
    "2272": {
      "name": "1969 Datsun 2000 Roadster",
      "category": "Sport Coupe Icons"
    },
    "2275": {
      "name": "1967 Eagle-Weslake T1G",
      "category": "Formula 60s"
    },
    "2289": {
      "name": "2014 Porsche 911 Turbo S",
      "category": "Modern Sport GT"
    },
    "2290": {
      "name": "2014 Porsche 918 Spyder",
      "category": "Modern Exotic GT"
    },
    "2293": {
      "name": "2015 Porsche Cayman GTS",
      "category": "Modern Sport Coupe"
    },
    "2299": {
      "name": "1957 Porsche 356A Speedster",
      "category": "Sport Coupe Icons"
    },
    "2302": {
      "name": "2014 Toyota #8 Toyota Racing TS040 HYBRID",
      "category": "Forza P1"
    },
    "2312": {
      "name": "1969 Lola #10 Simoniz Special T163",
      "category": "Prototype Group Racing"
    },
    "2314": {
      "name": "2014 Ford #17 AMD Tuning Focus ST BTCC",
      "category": "Forza Touring Cars"
    },
    "2315": {
      "name": "1982 Ferrari #72 N.A.R.T. 512 BB/LM",
      "category": "GTX Sportscars"
    },
    "2333": {
      "name": "1990 Mercury #15 Whistler Radar Cougar XR-7",
      "category": "GTX Sportscars"
    },
    "2334": {
      "name": "1991 Mazda #62 Mazda Motorsport RX-7",
      "category": "GTX Sportscars"
    },
    "2352": {
      "name": "2017 Acura NSX",
      "category": "Modern Sport GT"
    },
    "2357": {
      "name": "2017 Ford Focus RS",
      "category": "Modern Hot Hatch"
    },
    "2363": {
      "name": "2017 Ford GT",
      "category": "Modern Sport GT"
    },
    "2368": {
      "name": "2015 Nissan #23 GT-R LM NISMO",
      "category": "Forza P1"
    },
    "2371": {
      "name": "2014 Ferrari FXX K",
      "category": "Modern Factory Racecars"
    },
    "2379": {
      "name": "2015 Lamborghini #63 Squadra Corse Huracan LP620-2 Super Trofeo",
      "category": "Forza GT"
    },
    "2400": {
      "name": "2016 Ford Shelby GT350R",
      "category": "Modern Sport Touring"
    },
    "2401": {
      "name": "1964 Ferrari F-158 F1",
      "category": "Formula 60s"
    },
    "2403": {
      "name": "2014 Bentley #17 M-Sport Bentley Continental GT3",
      "category": "Forza GT"
    },
    "2409": {
      "name": "2015 Ford #02 Chip Ganassi Racing Riley Mk XXVI Daytona Prototype",
      "category": "Forza P2"
    },
    "2417": {
      "name": "1973 Holden HQ Monaro GTS 350",
      "category": "Vintage Muscle"
    },
    "2421": {
      "name": "2016 Cadillac CTS-V Sedan",
      "category": "Sport Luxury"
    },
    "2423": {
      "name": "1969 Lola #6 Sunoco T70 MkIIIB",
      "category": "Prototype Group Racing"
    },
    "2426": {
      "name": "1990 Alpine GTA Le Mans",
      "category": "Sport Touring Classics"
    },
    "2427": {
      "name": "2016 Vauxhall Corsa VXR",
      "category": "Modern Hot Hatch"
    },
    "2434": {
      "name": "1992 Toyota #99 All American Racers Toyota Eagle MkIII",
      "category": "GTP/C"
    },
    "2467": {
      "name": "2015 Ferrari 488 GTB",
      "category": "Modern Sport GT"
    },
    "2468": {
      "name": "2015 Dodge Charger SRT Hellcat",
      "category": "Modern Sport Touring"
    },
    "2470": {
      "name": "2016 Aston Martin Vulcan",
      "category": "Modern Factory Racecars"
    },
    "2471": {
      "name": "2016 Mercedes-AMG C 63 S Coupé",
      "category": "Modern Sport Touring"
    },
    "2473": {
      "name": "2016 Audi R8 V10 plus",
      "category": "Modern Sport GT"
    },
    "2475": {
      "name": "2016 Spania GTA GTA Spano",
      "category": "Modern Exotic GT"
    },
    "2479": {
      "name": "2016 Lamborghini Aventador Superveloce",
      "category": "Modern Exotic GT"
    },
    "2481": {
      "name": "2015 McLaren P1 GTR",
      "category": "Modern Factory Racecars"
    },
    "2482": {
      "name": "1984 Nissan #20 Bluebird Super Silhouette",
      "category": "GTX Sportscars"
    },
    "2483": {
      "name": "1991 Nissan #23 Nissan R91CP",
      "category": "GTP/C"
    },
    "2485": {
      "name": "2015 Chevrolet #10 Konica Minolta Corvette Daytona Prototype",
      "category": "Forza P2"
    },
    "2486": {
      "name": "2015 Radical RXC Turbo",
      "category": "Track Toys"
    },
    "2488": {
      "name": "1979 Datsun #33 280ZX Turbo",
      "category": "GTX Sportscars"
    },
    "2493": {
      "name": "2015 Aston Martin Vantage GT12",
      "category": "Modern Sport GT"
    },
    "2506": {
      "name": "1953 Maserati A6GCS/53 PininFarina Berlinetta",
      "category": "Vintage Le Mans Sportscars"
    },
    "2512": {
      "name": "1987 Nissan Skyline GTS-R (HR31)",
      "category": "Sport Touring Classics"
    },
    "2514": {
      "name": "1992 Ford Falcon GT",
      "category": "Sport Touring Classics"
    },
    "2523": {
      "name": "2016 Chevrolet Camaro Super Sport",
      "category": "Modern Sport Touring"
    },
    "2528": {
      "name": "2016 Porsche 911 GT3 RS",
      "category": "Modern Sport GT"
    },
    "2532": {
      "name": "1980 Porsche 924 Carrera GTS",
      "category": "Sport Touring Classics"
    },
    "2534": {
      "name": "1993 Porsche 968 Turbo S",
      "category": "Sport Touring Classics"
    },
    "2535": {
      "name": "1993 Porsche 928 GTS",
      "category": "Sport Touring Classics"
    },
    "2537": {
      "name": "1960 Porsche 718 RS 60",
      "category": "Vintage Le Mans Sportscars"
    },
    "2538": {
      "name": "2015 Porsche #91 Porsche Team Manthey 991 RSR",
      "category": "Forza GT"
    },
    "2541": {
      "name": "2016 Lotus 3-Eleven",
      "category": "Track Toys"
    },
    "2542": {
      "name": "2017 Alfa Romeo Giulia Quadrifoglio",
      "category": "Modern Sport Touring"
    },
    "2543": {
      "name": "2016 Ford #66 Ford Racing GT Le Mans",
      "category": "Forza GT"
    },
    "2544": {
      "name": "2016 Dodge Viper ACR",
      "category": "Modern Sport GT"
    },
    "2549": {
      "name": "1970 Porsche #3 917 LH",
      "category": "Vintage Le Mans Prototypes"
    },
    "2559": {
      "name": "1959 Jaguar Mk II 3.8",
      "category": "Sport Coupe Icons"
    },
    "2569": {
      "name": "2015 Ultima Evolution Coupe 1020",
      "category": "Track Toys"
    },
    "2577": {
      "name": "2015 Ferrari F12tdf",
      "category": "Modern Exotic GT"
    },
    "2580": {
      "name": "2015 Ford Falcon GT F 351",
      "category": "Modern Sport Touring"
    },
    "2581": {
      "name": "1972 Chrysler VH Valiant Charger R/T E49",
      "category": "Street Drag Racers"
    },
    "2582": {
      "name": "1996 HSV GTSR",
      "category": "Sport Touring Classics"
    },
    "2614": {
      "name": "1968 Ford Mustang GT 2+2 Fastback",
      "category": "Vintage Muscle"
    },
    "2616": {
      "name": "2016 Lamborghini Centenario LP 770-4",
      "category": "Modern Exotic GT"
    },
    "2618": {
      "name": "2017 Nissan GT-R (R35)",
      "category": "Modern Sport GT"
    },
    "2624": {
      "name": "2018 Bugatti Chiron",
      "category": "Modern Hypercars"
    },
    "2628": {
      "name": "2016 BMW M4 GTS",
      "category": "Modern Sport Touring"
    },
    "2647": {
      "name": "2016 Pagani Huayra BC",
      "category": "Modern Hypercars"
    },
    "2654": {
      "name": "2017 Mercedes-AMG GT R",
      "category": "Modern Sport GT"
    },
    "2659": {
      "name": "1998 Nissan Silvia K’s Aero",
      "category": "Early Sport Compact"
    },
    "2665": {
      "name": "2017 Bentley Continental Supersports",
      "category": "Sport Luxury"
    },
    "2739": {
      "name": "2017 Chevrolet Camaro ZL1",
      "category": "Modern Sport Touring"
    },
    "2740": {
      "name": "2017 Abarth 124 Spider",
      "category": "Modern Sport Compact"
    },
    "2741": {
      "name": "2017 Porsche Panamera Turbo",
      "category": "Sport Luxury"
    },
    "2755": {
      "name": "2018 Porsche 911 GT2 RS",
      "category": "Modern Sport GT"
    },
    "2760": {
      "name": "2017 Ford #17 Shell V-Power Racing Team Falcon FG X",
      "category": "Forza GT"
    },
    "2774": {
      "name": "2017 Porsche #2 Porsche Team 919 Hybrid",
      "category": "Forza P1"
    },
    "2775": {
      "name": "2017 Porsche #92 Porsche GT Team 911 RSR",
      "category": "Forza GT"
    },
    "2776": {
      "name": "1976 Chevrolet #76 Greenwood Corvette",
      "category": "GTX Sportscars"
    },
    "2792": {
      "name": "1966 Ford #2 GT40 MkII Le Mans",
      "category": "Vintage Le Mans Prototypes"
    },
    "2793": {
      "name": "1967 Ferrari #24 Ferrari Spa 330 P4",
      "category": "Vintage Le Mans Prototypes"
    },
    "2794": {
      "name": "1993 Porsche 911 Turbo S Leichtbau",
      "category": "Sport GT Icons"
    },
    "2796": {
      "name": "2017 Holden #22 Walkinshaw Performance VF Commodore",
      "category": "Forza GT"
    },
    "2797": {
      "name": "2017 Nissan Altima Racecar",
      "category": "Forza GT"
    },
    "2800": {
      "name": "1983 Jaguar #44 Group 44 XJR-5",
      "category": "GTP/C"
    },
    "2801": {
      "name": "1984 Nissan #11 Tomica Skyline Turbo Super Silhouette",
      "category": "GTX Sportscars"
    },
    "2817": {
      "name": "2000 Honda Prelude Type SH",
      "category": "Early Sport Compact"
    },
    "2823": {
      "name": "1967 Nissan R380 II",
      "category": "Vintage Le Mans Sportscars"
    },
    "2824": {
      "name": "2017 BMW #24 BMW Team RLL M6 GTLM",
      "category": "Forza GT"
    },
    "2826": {
      "name": "1988 Jaguar #1 Jaguar Racing XJR-9",
      "category": "GTP/C"
    },
    "2840": {
      "name": "1988 Nissan #33 Bob Sharp Racing 300ZX",
      "category": "GTX Sportscars"
    },
    "2844": {
      "name": "2017 VUHL 05RR",
      "category": "Track Toys"
    },
    "2846": {
      "name": "2018 McLaren 720S Coupe",
      "category": "Modern Sport GT"
    },
    "2852": {
      "name": "2018 Audi #1 Audi Sport RS 3 LMS",
      "category": "Forza Touring Cars"
    },
    "2859": {
      "name": "2016 Audi #17 Rotek Racing TT RS",
      "category": "Forza GT"
    },
    "2860": {
      "name": "2017 Aston Martin #7 Aston Martin Racing V12 Vantage GT3",
      "category": "Forza GT"
    },
    "2866": {
      "name": "2018 Exomotive Exocet Sport V8 XP-5",
      "category": "Track Toys"
    },
    "2868": {
      "name": "1982 Ford #6 Zakspeed Roush Mustang IMSA GT",
      "category": "GTX Sportscars"
    },
    "2870": {
      "name": "2018 Honda Civic Type R",
      "category": "Modern Hot Hatch"
    },
    "2872": {
      "name": "2019 Hyundai Veloster N",
      "category": "Modern Hot Hatch"
    },
    "2874": {
      "name": "2018 Nissan Sentra NISMO",
      "category": "Modern Sport Compact"
    },
    "2875": {
      "name": "2017 Mercedes-Benz #33 Mac Tools Ciceley Motorsports A-Class (A45)",
      "category": "Forza Touring Cars"
    },
    "2909": {
      "name": "2018 Dodge Challenger SRT Demon",
      "category": "Modern Sport Touring"
    },
    "2910": {
      "name": "2017 Koenigsegg Agera RS",
      "category": "Modern Hypercars"
    },
    "2967": {
      "name": "2017 Oreca #38 Jackie Chan DC Racing Oreca 07",
      "category": "Forza P2"
    },
    "2968": {
      "name": "2023 Aston Martin Valkyrie",
      "category": "Modern Hypercars"
    },
    "2972": {
      "name": "2019 Ferrari #62 Risi Competizione 488 GTE",
      "category": "Forza GT"
    },
    "2973": {
      "name": "2017 Alpine A110",
      "category": "Modern Sport Coupe"
    },
    "2974": {
      "name": "2017 Ferrari 812 Superfast",
      "category": "Modern Exotic GT"
    },
    "2980": {
      "name": "1964 Ford GT40 Mk I",
      "category": "Vintage Le Mans Prototypes"
    },
    "2981": {
      "name": "1986 Ford Escort RS Turbo",
      "category": "Hot Hatch Icons"
    },
    "2988": {
      "name": "2018 McLaren Senna",
      "category": "Modern Hypercars"
    },
    "2993": {
      "name": "2018 TVR Griffith",
      "category": "Modern Sport GT"
    },
    "2995": {
      "name": "1983 Volkswagen Golf GTI",
      "category": "Hot Hatch Icons"
    },
    "3018": {
      "name": "1985 Nissan #83 GTP ZX-Turbo",
      "category": "GTP/C"
    },
    "3019": {
      "name": "1948 Ferrari 166 Inter Sport",
      "category": "The Birth of Grand Prix"
    },
    "3023": {
      "name": "1983 Porsche #11 John Fitzpatrick Racing 956",
      "category": "GTP/C"
    },
    "3024": {
      "name": "1967 Aston Martin DBS",
      "category": "Vintage Exotic GT"
    },
    "3028": {
      "name": "1986 Merkur #11 MAC Tools XR4Ti",
      "category": "GTX Sportscars"
    },
    "3035": {
      "name": "2018 KTM X-Bow GT4",
      "category": "Forza GT"
    },
    "3046": {
      "name": "2018 Ford Mustang GT",
      "category": "Modern Sport Touring"
    },
    "3062": {
      "name": "1970 Ferrari 512 S",
      "category": "Vintage Le Mans Prototypes"
    },
    "3064": {
      "name": "2018 Mercedes-AMG GT 4-Door Coupé",
      "category": "Sport Luxury"
    },
    "3071": {
      "name": "2018 BMW M5",
      "category": "Sport Luxury"
    },
    "3072": {
      "name": "2019 Porsche 911 GT3 RS",
      "category": "Modern Sport GT"
    },
    "3073": {
      "name": "2018 BMW #1 BMW M Motorsport M8 GTE",
      "category": "Forza GT"
    },
    "3079": {
      "name": "1963 Shelby Monaco King Cobra",
      "category": "Vintage Le Mans Prototypes"
    },
    "3080": {
      "name": "1970 Matra-Simca #146 Equipe Matra-Simca MS650 Tour de France",
      "category": "Vintage Le Mans Prototypes"
    },
    "3091": {
      "name": "2019 Aston Martin Vantage",
      "category": "Modern Sport GT"
    },
    "3112": {
      "name": "2017 Ferrari #25 Corse Clienti 488 Challenge",
      "category": "Forza GT"
    },
    "3117": {
      "name": "2018 Porsche 718 Cayman GTS",
      "category": "Modern Sport Coupe"
    },
    "3118": {
      "name": "2019 Chevrolet Corvette ZR1",
      "category": "Modern Sport GT"
    },
    "3123": {
      "name": "2019 Porsche 911 Carrera S",
      "category": "Modern Sport GT"
    },
    "3125": {
      "name": "2017 Aston Martin Vanquish Zagato Coupe",
      "category": "Modern Exotic GT"
    },
    "3129": {
      "name": "2008 Renault Mégane R26.R",
      "category": "Modern Hot Hatch"
    },
    "3134": {
      "name": "2018 Renault Megane R.S.",
      "category": "Modern Hot Hatch"
    },
    "3140": {
      "name": "2019 Rimac Concept Two",
      "category": "Modern Hypercars"
    },
    "3141": {
      "name": "2018 Apollo Intensa Emozione",
      "category": "Modern Hypercars"
    },
    "3149": {
      "name": "2018 Chevrolet Camaro ZL1 1LE",
      "category": "Modern Sport Touring"
    },
    "3153": {
      "name": "2018 McLaren 600LT Coupé",
      "category": "Modern Sport GT"
    },
    "3154": {
      "name": "2019 McLaren 720S Spider",
      "category": "Modern Sport GT"
    },
    "3155": {
      "name": "2019 McLaren Senna GTR",
      "category": "Modern Factory Racecars"
    },
    "3157": {
      "name": "2019 McLaren #03 720S GT3",
      "category": "Forza GT"
    },
    "3158": {
      "name": "1991 Ford #15 Roush Racing Whistler Mustang",
      "category": "GTX Sportscars"
    },
    "3161": {
      "name": "2018 Volkswagen #22 Experion Racing Golf GTI",
      "category": "Forza Touring Cars"
    },
    "3168": {
      "name": "2019 Bugatti Divo",
      "category": "Modern Hypercars"
    },
    "3173": {
      "name": "2019 BMW Z4 Roadster",
      "category": "Modern Sport Coupe"
    },
    "3181": {
      "name": "1986 Ford Mustang SVO",
      "category": "Sport Touring Classics"
    },
    "3182": {
      "name": "2016 Renault Clio R.S. 16 Concept",
      "category": "Modern Hot Hatch"
    },
    "3185": {
      "name": "2019 Aston Martin DBS Superleggera",
      "category": "Modern Exotic GT"
    },
    "3191": {
      "name": "1973 Lamborghini Espada 400 GT",
      "category": "Vintage Exotic GT"
    },
    "3196": {
      "name": "2019 RAESR Tachyon Speed",
      "category": "Modern Hypercars"
    },
    "3197": {
      "name": "2018 Mercedes-AMG GT3",
      "category": "Forza GT"
    },
    "3211": {
      "name": "2017 Aston Martin Vulcan AMR Pro",
      "category": "Modern Factory Racecars"
    },
    "3212": {
      "name": "2019 Zenvo TSR-S",
      "category": "Modern Hypercars"
    },
    "3214": {
      "name": "2019 Porsche #70 Porsche Motorsport 935",
      "category": "Forza GT"
    },
    "3215": {
      "name": "2019 Porsche 911 Speedster",
      "category": "Modern Sport GT"
    },
    "3217": {
      "name": "2018 Lamborghini Huracán Performante",
      "category": "Modern Sport GT"
    },
    "3218": {
      "name": "2018 Porsche #73 Park Place Motorsports 911 GT3 R",
      "category": "Forza GT"
    },
    "3225": {
      "name": "2018 Ferrari Portofino",
      "category": "Modern Exotic GT"
    },
    "3226": {
      "name": "2017 Ferrari J50",
      "category": "Modern Exotic GT"
    },
    "3227": {
      "name": "2019 Ferrari 488 Pista",
      "category": "Modern Sport GT"
    },
    "3228": {
      "name": "1999 Ford Racing Puma",
      "category": "Early Sport Compact"
    },
    "3229": {
      "name": "2018 Audi #44 R8 LMS GT3",
      "category": "Forza GT"
    },
    "3231": {
      "name": "2017 Vauxhall #66 Power Maxed TAG Racing Astra",
      "category": "Forza Touring Cars"
    },
    "3239": {
      "name": "2018 Lamborghini #63 Squadra Corse Huracán Super Trofeo Evo",
      "category": "Forza GT"
    },
    "3240": {
      "name": "2018 Acura #36 NSX GT3",
      "category": "Forza GT"
    },
    "3243": {
      "name": "2018 Peugeot #7 DG Sport Compétition 308",
      "category": "Forza Touring Cars"
    },
    "3250": {
      "name": "2018 Mercedes-AMG E 63 S",
      "category": "Sport Luxury"
    },
    "3251": {
      "name": "2018 Ford #98 Breathless Pro Racing TA Mustang",
      "category": "Forza GT"
    },
    "3256": {
      "name": "2018 Chevrolet #23 Ruman Racing TA Corvette",
      "category": "Forza GT"
    },
    "3257": {
      "name": "1990 Nissan Pulsar GTi-R",
      "category": "Early Sport Compact"
    },
    "3264": {
      "name": "2018 Audi RS 5 Coupe",
      "category": "Modern Sport Touring"
    },
    "3266": {
      "name": "1974 BRM #14 Team Motul P201",
      "category": "Formula 70s"
    },
    "3268": {
      "name": "1965 Lotus Team Lotus type 35",
      "category": "Formula 60s"
    },
    "3270": {
      "name": "1966 McLaren #4 Bruce McLaren Motor Racing M1B",
      "category": "Prototype Group Racing"
    },
    "3272": {
      "name": "2018 SUBARU #1 Adrian Flux SUBARU Racing Levorg GT",
      "category": "Forza Touring Cars"
    },
    "3276": {
      "name": "2018 Saleen S1",
      "category": "Modern Sport GT"
    },
    "3277": {
      "name": "2020 Ford Mustang Shelby GT500",
      "category": "Modern Sport Touring"
    },
    "3281": {
      "name": "2015 Cadillac #3 Cadillac Racing ATS-V.R",
      "category": "Forza GT"
    },
    "3283": {
      "name": "2018 Cadillac #57 TA CTS-V",
      "category": "Forza GT"
    },
    "3285": {
      "name": "2019 Brabham BT62",
      "category": "Modern Factory Racecars"
    },
    "3286": {
      "name": "2018 Audi TT RS",
      "category": "Modern Sport Coupe"
    },
    "3287": {
      "name": "1991 Jaguar Sport XJR-15",
      "category": "Exotic GT Classics"
    },
    "3289": {
      "name": "2018 Lamborghini Aventador SVJ",
      "category": "Modern Exotic GT"
    },
    "3292": {
      "name": "2019 Dodge #9 American V8 Road Racing TA Challenger",
      "category": "Forza GT"
    },
    "3293": {
      "name": "1993 Jaguar XJ220S TWR",
      "category": "Exotic GT Classics"
    },
    "3301": {
      "name": "1986 Lotus #12 Team Lotus 98T",
      "category": "Grand Prix Rivals"
    },
    "3307": {
      "name": "2019 Nissan 370Z Nismo",
      "category": "Modern Sport Coupe"
    },
    "3309": {
      "name": "1965 Lotus #1 Team Lotus Type 40",
      "category": "Vintage Le Mans Prototypes"
    },
    "3310": {
      "name": "1990 Oldsmobile #75 Cutlass Supreme Trans Am",
      "category": "GTX Sportscars"
    },
    "3311": {
      "name": "2018 Ferrari FXX-K Evo",
      "category": "Modern Factory Racecars"
    },
    "3312": {
      "name": "2019 Ferrari Monza SP2",
      "category": "Modern Exotic GT"
    },
    "3315": {
      "name": "2020 Koenigsegg Jesko",
      "category": "Modern Hypercars"
    },
    "3316": {
      "name": "1985 Buick #6 Performance Motorsports Somerset Regal Trans-Am",
      "category": "GTX Sportscars"
    },
    "3318": {
      "name": "2018 Audi RS 4 Avant",
      "category": "Modern Sport Touring"
    },
    "3334": {
      "name": "2019 Elemental RP1",
      "category": "Track Toys"
    },
    "3338": {
      "name": "1988 Nissan #24 Nissan Motorsports International R88C",
      "category": "GTP/C"
    },
    "3359": {
      "name": "2021 Audi RS e-tron GT",
      "category": "Sport Luxury"
    },
    "3360": {
      "name": "2020 Automobili Pininfarina Battista",
      "category": "Modern Hypercars"
    },
    "3362": {
      "name": "1983 Nissan #23 Nissan Motorsports Silvia Super Silhouette",
      "category": "GTX Sportscars"
    },
    "3363": {
      "name": "1998 Nissan #23 Pennzoil NISMO Skyline GT-R",
      "category": "GTX Sportscars"
    },
    "3364": {
      "name": "2019 Aston Martin Valhalla Concept Car",
      "category": "Modern Hypercars"
    },
    "3365": {
      "name": "2016 Ligier #11 Euro International JS P3",
      "category": "Forza P3"
    },
    "3366": {
      "name": "2016 NIO EP9",
      "category": "Modern Hypercars"
    },
    "3367": {
      "name": "2019 Ferrari F8 Tributo",
      "category": "Modern Exotic GT"
    },
    "3369": {
      "name": "2020 Chevrolet Corvette Stingray Coupe",
      "category": "Modern Sport GT"
    },
    "3371": {
      "name": "2020 Lamborghini Huracán EVO",
      "category": "Modern Sport GT"
    },
    "3395": {
      "name": "1967 Renault 8 Gordini",
      "category": "Vintage Sport Compact"
    },
    "3402": {
      "name": "2020 Toyota GR Supra",
      "category": "Modern Sport Coupe"
    },
    "3403": {
      "name": "1977 Renault #15 Equipe Renault Elf R.S. 01",
      "category": "Formula 70s"
    },
    "3412": {
      "name": "2019 SUBARU STI S209",
      "category": "Modern Sport Compact"
    },
    "3413": {
      "name": "2021 Volkswagen Golf R",
      "category": "Modern Hot Hatch"
    },
    "3418": {
      "name": "2019 Toyota 86 TRD SE",
      "category": "Modern Sport Compact"
    },
    "3420": {
      "name": "2020 Acura #6 ARX-05 DPi",
      "category": "Forza Proto-H"
    },
    "3427": {
      "name": "2019 Ginetta G55 GT4",
      "category": "Forza GT"
    },
    "3429": {
      "name": "2019 Ginetta G40 Junior",
      "category": "Forza Touring Cars"
    },
    "3434": {
      "name": "2020 BMW M2 Competition Coupé",
      "category": "Modern Sport Coupe"
    },
    "3437": {
      "name": "2020 McLaren GT",
      "category": "Modern Exotic GT"
    },
    "3445": {
      "name": "2020 Porsche Taycan Turbo S",
      "category": "Sport Luxury"
    },
    "3449": {
      "name": "2020 Lotus Evija",
      "category": "Modern Exotic GT"
    },
    "3453": {
      "name": "2020 Audi TT RS Coupe",
      "category": "Modern Sport Coupe"
    },
    "3454": {
      "name": "2020 Audi RS 3 Sedan",
      "category": "Modern Sport Coupe"
    },
    "3457": {
      "name": "2020 Lexus #14 VASSER SULLIVAN RC F GT3",
      "category": "Forza GT"
    },
    "3460": {
      "name": "2019 Ginetta #6 Team LNT Ginetta G60-LT-P1",
      "category": "Forza P1"
    },
    "3482": {
      "name": "2021 McLaren 765LT Coupe",
      "category": "Modern Sport GT"
    },
    "3490": {
      "name": "2020 Chevrolet #3 Corvette Racing C8.R",
      "category": "Forza GT"
    },
    "3492": {
      "name": "2020 KTM X-Bow GT2",
      "category": "Forza GT"
    },
    "3497": {
      "name": "1999 Nissan #23 NISMO Clarion R391",
      "category": "Early LMP"
    },
    "3498": {
      "name": "2017 Saleen S7 LM",
      "category": "Modern Exotic GT"
    },
    "3506": {
      "name": "1974 Porsche #1 911 RSR",
      "category": "GTX Sportscars"
    },
    "3517": {
      "name": "1964 Brabham BT8",
      "category": "Vintage Le Mans Sportscars"
    },
    "3518": {
      "name": "2020 BMW M8 Competition Coupé",
      "category": "Sport Luxury"
    },
    "3520": {
      "name": "2021 Lexus LC 500",
      "category": "Sport Luxury"
    },
    "3532": {
      "name": "2020 Hyundai #98 Bryan Herta Autosport Veloster N",
      "category": "Forza Touring Cars"
    },
    "3533": {
      "name": "2022 Volkswagen Golf R",
      "category": "Modern Hot Hatch"
    },
    "3534": {
      "name": "2021 MINI John Cooper Works GP",
      "category": "Modern Hot Hatch"
    },
    "3537": {
      "name": "2020 MG #20 MG6 XPower",
      "category": "Forza Touring Cars"
    },
    "3541": {
      "name": "1970 Chevron B16",
      "category": "Vintage Le Mans Prototypes"
    },
    "3543": {
      "name": "2022 Pagani Huayra R",
      "category": "Modern Hypercars"
    },
    "3545": {
      "name": "2020 Honda #73 LA Honda World Racing Civic",
      "category": "Forza Touring Cars"
    },
    "3546": {
      "name": "2020 Lexus RC F Track Edition",
      "category": "Modern Sport Coupe"
    },
    "3547": {
      "name": "2020 Xpeng P7",
      "category": "Modern Sport Touring"
    },
    "3552": {
      "name": "2020 Lynk & Co #62 Cyan Racing 03",
      "category": "Forza Touring Cars"
    },
    "3583": {
      "name": "2021 Audi RS 6 Avant",
      "category": "Sport Luxury"
    },
    "3584": {
      "name": "2021 Audi RS 7 Sportback",
      "category": "Sport Luxury"
    },
    "3594": {
      "name": "2020 Ferrari Roma",
      "category": "Modern Exotic GT"
    },
    "3595": {
      "name": "2020 Ferrari SF90 Stradale",
      "category": "Modern Exotic GT"
    },
    "3599": {
      "name": "2022 Gordon Murray Automotive T.50",
      "category": "Modern Exotic GT"
    },
    "3606": {
      "name": "2020 Lamborghini Essenza SCV12",
      "category": "Forza GT"
    },
    "3616": {
      "name": "2020 Mercedes-AMG GT Black Series",
      "category": "Modern Sport GT"
    },
    "3620": {
      "name": "2023 Nissan Z",
      "category": "Modern Sport Coupe"
    },
    "3622": {
      "name": "2020 Nissan GT-R NISMO (R35)",
      "category": "Modern Sport GT"
    },
    "3625": {
      "name": "2021 Rimac Nevera",
      "category": "Modern Hypercars"
    },
    "3631": {
      "name": "2022 Aston Martin Valkyrie AMR Pro",
      "category": "Modern Factory Racecars"
    },
    "3633": {
      "name": "2019 Lamborghini Sián FKP 37",
      "category": "Modern Hypercars"
    },
    "3644": {
      "name": "2021 BMW M3 Competition Sedan",
      "category": "Modern Sport Touring"
    },
    "3645": {
      "name": "2021 BMW M4 Competition Coupé",
      "category": "Modern Sport Touring"
    },
    "3650": {
      "name": "2021 Mercedes-AMG Mercedes-AMG ONE",
      "category": "Modern Hypercars"
    },
    "3655": {
      "name": "2021 McLaren 620R",
      "category": "Modern Sport GT"
    },
    "3667": {
      "name": "2021 Porsche 911 GT3",
      "category": "Modern Sport GT"
    },
    "3669": {
      "name": "2021 Cadillac #31 Whelen Racing DPi-V.R",
      "category": "Forza Proto-H"
    },
    "3672": {
      "name": "2020 Lamborghini Huracán STO",
      "category": "Modern Sport GT"
    },
    "3677": {
      "name": "2021 Lynk & Co 03+",
      "category": "Modern Sport Compact"
    },
    "3689": {
      "name": "2021 MG MG6 XPower",
      "category": "Modern Sport Touring"
    },
    "3698": {
      "name": "2021 Porsche Mission R",
      "category": "Mission R Spec"
    },
    "3700": {
      "name": "2021 McLaren Sabre",
      "category": "Modern Hypercars"
    },
    "3716": {
      "name": "2023 Lotus Emira",
      "category": "Modern Sport GT"
    },
    "3719": {
      "name": "2022 Cadillac CT4-V Blackwing",
      "category": "Modern Sport Touring"
    },
    "3720": {
      "name": "2022 Cadillac CT5-V Blackwing",
      "category": "Modern Sport Touring"
    },
    "3724": {
      "name": "2022 Ferrari 296 GTB",
      "category": "Modern Sport GT"
    },
    "3735": {
      "name": "2022 SUBARU BRZ",
      "category": "Modern Sport Compact"
    },
    "3745": {
      "name": "2020 Audi R8 V10 performance",
      "category": "Modern Sport GT"
    },
    "3760": {
      "name": "2022 Porsche 718 Cayman GT4 RS",
      "category": "Modern Sport Coupe"
    },
    "3762": {
      "name": "2018 Aston Martin #97 AMR Vantage GTE",
      "category": "Forza GT"
    },
    "3763": {
      "name": "2023 BMW M2",
      "category": "Modern Sport Coupe"
    },
    "3766": {
      "name": "2023 Chevrolet Corvette Z06",
      "category": "Modern Sport GT"
    },
    "3771": {
      "name": "2024 Chevrolet Corvette E-Ray",
      "category": "Modern Sport GT"
    },
    "3792": {
      "name": "2023 Cadillac #31 Whelen Engineering Cadillac Racing V-Series.R",
      "category": "Forza Proto-H"
    },
    "3798": {
      "name": "2017 Mazda MX-5 Cup",
      "category": "Forza Specials"
    },
    "3800": {
      "name": "2020 Chevrolet Corvette Stingray Coupe Forza Edition",
      "category": "Modern Sport GT"
    },
    "3801": {
      "name": "2018 Chevrolet Camaro ZL1 1LE Forza Edition",
      "category": "Modern Sport Touring"
    },
    "3802": {
      "name": "2019 Hyundai Veloster N Forza Edition",
      "category": "Modern Hot Hatch"
    },
    "3803": {
      "name": "2016 Mercedes-AMG C 63 S Coupé Forza Edition",
      "category": "Modern Sport Touring"
    },
    "3804": {
      "name": "2019 SUBARU STI S209 Forza Edition",
      "category": "Modern Sport Compact"
    },
    "3807": {
      "name": "2018 Porsche 911 GT2 RS Forza Edition",
      "category": "Modern Sport GT"
    },
    "3866": {
      "name": "2023 Cadillac #01 Cadillac Racing V-Series.R",
      "category": "Forza Proto-H"
    },
    "3867": {
      "name": "2023 Cadillac #2 Cadillac Racing V-Series.R",
      "category": "Forza Proto-H"
    },
    "3876": {
      "name": "2024 Porsche #5 Porsche Penske Motorsport 963",
      "category": "Forza Proto-H"
    },
    "3886": {
      "name": "1995 Mitsubishi Lancer Evolution III GSR",
      "category": "Early Sport Compact"
    }
  };

  static getCarInfo(id: number): FM8Car | undefined {
    const car = FM8_CarLookup.carData[id];
    if (!car) return undefined;
    return {
      name: car.name,
      category: car.category,
      ordinal: id
    };
  }
}
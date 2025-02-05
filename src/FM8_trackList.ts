export interface FM8_TrackInfo {
  trackOrdinal: number;
  circuit: string;
  location: string;
  iocCode: string;
  track: string;
  lengthInKm: number;
}
export class FM8_trackList {
  private static trackMap: { 
    [key: string]: { 
      TrackOrdinal: number;
      Circuit: string;
      Location: string;
      IOC_Code: string;
      Track: string;
      Length_in_km: number;
    } 
  } = {
    "0": {
      "TrackOrdinal": 0,
      "Circuit": "WeatherTech Raceway Laguna Seca",
      "Location": "California",
      "IOC_Code": "usa",
      "Track": "Full Circuit",
      "Length_in_km": 3.6
    },
    "1": {
      "TrackOrdinal": 1,
      "Circuit": "WeatherTech Raceway Laguna Seca",
      "Location": "California",
      "IOC_Code": "usa",
      "Track": "Short Circuit",
      "Length_in_km": 2.96
    },
    "100": {
      "TrackOrdinal": 100,
      "Circuit": "Le Mans - Circuit International de la Sarthe",
      "Location": "Le Mans",
      "IOC_Code": "fra",
      "Track": "Full Circuit",
      "Length_in_km": 13.63
    },
    "101": {
      "TrackOrdinal": 101,
      "Circuit": "Le Mans - Circuit International de la Sarthe",
      "Location": "Le Mans",
      "IOC_Code": "fra",
      "Track": "Old Mulsanne Circuit",
      "Length_in_km": 13.54
    },
    "110": {
      "TrackOrdinal": 110,
      "Circuit": "Circuit de Barcelona-Catalunya",
      "Location": "Barcelona",
      "IOC_Code": "esp",
      "Track": "Grand Prix Circuit",
      "Length_in_km": 4.66
    },
    "111": {
      "TrackOrdinal": 111,
      "Circuit": "Circuit de Barcelona-Catalunya",
      "Location": "Barcelona",
      "IOC_Code": "esp",
      "Track": "National Circuit",
      "Length_in_km": 3.07
    },
    "1110": {
      "TrackOrdinal": 1110,
      "Circuit": "Homestead-Miami Speedway",
      "Location": "Florida",
      "IOC_Code": "usa",
      "Track": "Speedway Circuit",
      "Length_in_km": 2.41
    },
    "1111": {
      "TrackOrdinal": 1111,
      "Circuit": "Homestead-Miami Speedway",
      "Location": "Florida",
      "IOC_Code": "usa",
      "Track": "Road Circuit",
      "Length_in_km": 3.56
    },
    "113": {
      "TrackOrdinal": 113,
      "Circuit": "Circuit de Barcelona-Catalunya",
      "Location": "Barcelona",
      "IOC_Code": "esp",
      "Track": "National Circuit Alt",
      "Length_in_km": 3
    },
    "1450": {
      "TrackOrdinal": 1450,
      "Circuit": "Mid-Ohio Sports Car Course",
      "Location": "Ohio",
      "IOC_Code": "usa",
      "Track": "Full Circuit",
      "Length_in_km": 3.62
    },
    "1452": {
      "TrackOrdinal": 1452,
      "Circuit": "Mid-Ohio Sports Car Course",
      "Location": "Ohio",
      "IOC_Code": "usa",
      "Track": "Short Circuit",
      "Length_in_km": 2.82
    },
    "1590": {
      "TrackOrdinal": 1590,
      "Circuit": "Kyalami Grand Prix Circuit",
      "Location": "Midrand",
      "IOC_Code": "rsa",
      "Track": "Grand Prix Circuit",
      "Length_in_km": 4.53
    },
    "16": {
      "TrackOrdinal": 16,
      "Circuit": "Road Atlanta",
      "Location": "Georgia",
      "IOC_Code": "usa",
      "Track": "Full",
      "Length_in_km": 4.1
    },
    "1620": {
      "TrackOrdinal": 1620,
      "Circuit": "Sunset Peninsula Raceway",
      "Location": "Florida",
      "IOC_Code": "usa",
      "Track": "Full",
      "Length_in_km": 4.47
    },
    "1621": {
      "TrackOrdinal": 1621,
      "Circuit": "Sunset Peninsula Raceway",
      "Location": "Florida",
      "IOC_Code": "usa",
      "Track": "Club",
      "Length_in_km": 3.12
    },
    "1622": {
      "TrackOrdinal": 1622,
      "Circuit": "Sunset Peninsula Raceway",
      "Location": "Florida",
      "IOC_Code": "usa",
      "Track": "Full Reverse",
      "Length_in_km": 4.47
    },
    "1623": {
      "TrackOrdinal": 1623,
      "Circuit": "Sunset Peninsula Raceway",
      "Location": "Florida",
      "IOC_Code": "usa",
      "Track": "Club Reverse",
      "Length_in_km": 3.12
    },
    "1624": {
      "TrackOrdinal": 1624,
      "Circuit": "Sunset Peninsula Raceway",
      "Location": "Florida",
      "IOC_Code": "usa",
      "Track": "Speedway",
      "Length_in_km": 3.93
    },
    "1630": {
      "TrackOrdinal": 1630,
      "Circuit": "Grand Oak Raceway",
      "Location": "New Hampshire",
      "IOC_Code": "usa",
      "Track": "National Circuit",
      "Length_in_km": 3.73
    },
    "1631": {
      "TrackOrdinal": 1631,
      "Circuit": "Grand Oak Raceway",
      "Location": "New Hampshire",
      "IOC_Code": "usa",
      "Track": "Club Circuit",
      "Length_in_km": 2.62
    },
    "1632": {
      "TrackOrdinal": 1632,
      "Circuit": "Grand Oak Raceway",
      "Location": "New Hampshire",
      "IOC_Code": "usa",
      "Track": "National Circuit Reverse",
      "Length_in_km": 3.73
    },
    "1640": {
      "TrackOrdinal": 1640,
      "Circuit": "Hakone",
      "Location": "Hakone",
      "IOC_Code": "jpn",
      "Track": "Grand Prix Circuit",
      "Length_in_km": 4.28
    },
    "1641": {
      "TrackOrdinal": 1641,
      "Circuit": "Hakone",
      "Location": "Hakone",
      "IOC_Code": "jpn",
      "Track": "Club Circuit",
      "Length_in_km": 3.32
    },
    "1643": {
      "TrackOrdinal": 1643,
      "Circuit": "Hakone",
      "Location": "Hakone",
      "IOC_Code": "jpn",
      "Track": "Club Circuit Reverse",
      "Length_in_km": 3.32
    },
    "1660": {
      "TrackOrdinal": 1660,
      "Circuit": "Eaglerock Speedway",
      "Location": "Iowa",
      "IOC_Code": "usa",
      "Track": "Oval Circuit",
      "Length_in_km": 1.64
    },
    "1661": {
      "TrackOrdinal": 1661,
      "Circuit": "Eaglerock Speedway",
      "Location": "Iowa",
      "IOC_Code": "usa",
      "Track": "Club Circuit",
      "Length_in_km": 1.72
    },
    "1663": {
      "TrackOrdinal": 1663,
      "Circuit": "Eaglerock Speedway",
      "Location": "Iowa",
      "IOC_Code": "usa",
      "Track": "Club Circuit Reverse",
      "Length_in_km": 1.72
    },
    "17": {
      "TrackOrdinal": 17,
      "Circuit": "Road Atlanta",
      "Location": "Georgia",
      "IOC_Code": "usa",
      "Track": "Club",
      "Length_in_km": 2.85
    },
    "21": {
      "TrackOrdinal": 21,
      "Circuit": "Silverstone Racing Circuit",
      "Location": "Silverston",
      "IOC_Code": "gbr",
      "Track": "Grand Prix Circuit",
      "Length_in_km": 5.89
    },
    "22": {
      "TrackOrdinal": 22,
      "Circuit": "Silverstone Racing Circuit",
      "Location": "Silverston",
      "IOC_Code": "gbr",
      "Track": "National Circuit",
      "Length_in_km": 2.64
    },
    "23": {
      "TrackOrdinal": 23,
      "Circuit": "Silverstone Racing Circuit",
      "Location": "Silverston",
      "IOC_Code": "gbr",
      "Track": "International Circuit",
      "Length_in_km": 2.98
    },
    "231": {
      "TrackOrdinal": 231,
      "Circuit": "Indianapolis Motor Speedway",
      "Location": "Indianapolis",
      "IOC_Code": "usa",
      "Track": "The Brickyard Speedway",
      "Length_in_km": 4.02
    },
    "232": {
      "TrackOrdinal": 232,
      "Circuit": "Indianapolis Motor Speedway",
      "Location": "Indianapolis",
      "IOC_Code": "usa",
      "Track": "Grand Prix Circuit",
      "Length_in_km": 3.93
    },
    "250": {
      "TrackOrdinal": 250,
      "Circuit": "Hockenheimring",
      "Location": "Hockenheim",
      "IOC_Code": "ger",
      "Track": "Full Circuit",
      "Length_in_km": 4.57
    },
    "251": {
      "TrackOrdinal": 251,
      "Circuit": "Hockenheimring",
      "Location": "Hockenheim",
      "IOC_Code": "ger",
      "Track": "National Circuit",
      "Length_in_km": 3.69
    },
    "252": {
      "TrackOrdinal": 252,
      "Circuit": "Hockenheimring",
      "Location": "Hockenheim",
      "IOC_Code": "ger",
      "Track": "Short Circuit",
      "Length_in_km": 2.64
    },
    "3": {
      "TrackOrdinal": 3,
      "Circuit": "Road America",
      "Location": "Wisconsin",
      "IOC_Code": "usa",
      "Track": "Full Circuit",
      "Length_in_km": 6.52
    },
    "31": {
      "TrackOrdinal": 31,
      "Circuit": "Nürburgring",
      "Location": "Nürburg",
      "IOC_Code": "ger",
      "Track": "Full Circuit",
      "Length_in_km": 25.38
    },
    "32": {
      "TrackOrdinal": 32,
      "Circuit": "Nürburgring",
      "Location": "Nürburg",
      "IOC_Code": "ger",
      "Track": "Nordschleife",
      "Length_in_km": 20.83
    },
    "33": {
      "TrackOrdinal": 33,
      "Circuit": "Nürburgring",
      "Location": "Nürburg",
      "IOC_Code": "ger",
      "Track": "GP Circuit",
      "Length_in_km": 5.15
    },
    "34": {
      "TrackOrdinal": 34,
      "Circuit": "Nürburgring",
      "Location": "Nürburg",
      "IOC_Code": "ger",
      "Track": "Sprint Circuit",
      "Length_in_km": 3.63
    },
    "35": {
      "TrackOrdinal": 35,
      "Circuit": "Mugello Circuit",
      "Location": "Tuscany",
      "IOC_Code": "ita",
      "Track": "Full Circuit",
      "Length_in_km": 5.25
    },
    "36": {
      "TrackOrdinal": 36,
      "Circuit": "Mugello Circuit",
      "Location": "Tuscany",
      "IOC_Code": "ita",
      "Track": "Club Circuit",
      "Length_in_km": 2.58
    },
    "37": {
      "TrackOrdinal": 37,
      "Circuit": "Suzuka Circuit",
      "Location": "Suzuka",
      "IOC_Code": "jpn",
      "Track": "Full Circuit",
      "Length_in_km": 5.81
    },
    "38": {
      "TrackOrdinal": 38,
      "Circuit": "Suzuka Circuit",
      "Location": "Suzuka",
      "IOC_Code": "jpn",
      "Track": "East Circuit",
      "Length_in_km": 2.25
    },
    "40": {
      "TrackOrdinal": 40,
      "Circuit": "Sebring International",
      "Location": "Sebring",
      "IOC_Code": "usa",
      "Track": "Full",
      "Length_in_km": 6.02
    },
    "42": {
      "TrackOrdinal": 42,
      "Circuit": "Sebring International",
      "Location": "Sebring",
      "IOC_Code": "usa",
      "Track": "Short",
      "Length_in_km": 3.54
    },
    "5": {
      "TrackOrdinal": 5,
      "Circuit": "Road America",
      "Location": "Wisconsin",
      "IOC_Code": "usa",
      "Track": "East Route",
      "Length_in_km": 3.52
    },
    "510": {
      "TrackOrdinal": 510,
      "Circuit": "Yas Marina Circuit",
      "Location": "Abu Dhabi",
      "IOC_Code": "uae",
      "Track": "Full Circuit",
      "Length_in_km": 5.28
    },
    "511": {
      "TrackOrdinal": 511,
      "Circuit": "Yas Marina Circuit",
      "Location": "Abu Dhabi",
      "IOC_Code": "uae",
      "Track": "North Circuit",
      "Length_in_km": 3
    },
    "512": {
      "TrackOrdinal": 512,
      "Circuit": "Yas Marina Circuit",
      "Location": "Abu Dhabi",
      "IOC_Code": "uae",
      "Track": "South Circuit",
      "Length_in_km": 2.19
    },
    "513": {
      "TrackOrdinal": 513,
      "Circuit": "Yas Marina Circuit",
      "Location": "Abu Dhabi",
      "IOC_Code": "uae",
      "Track": "North Corkscrew",
      "Length_in_km": 2.29
    },
    "530": {
      "TrackOrdinal": 530,
      "Circuit": "Circuit de Spa-Francorchamps",
      "Location": "Spa",
      "IOC_Code": "bel",
      "Track": "Full Circuit",
      "Length_in_km": 7
    },
    "540": {
      "TrackOrdinal": 540,
      "Circuit": "Mount Panorama",
      "Location": "Australia",
      "IOC_Code": "au",
      "Track": "Circuit",
      "Length_in_km": 6.21
    },
    "67": {
      "TrackOrdinal": 67,
      "Circuit": "Maple Valley",
      "Location": "Vermont",
      "IOC_Code": "usa",
      "Track": "Full Circuit",
      "Length_in_km": 4.81
    },
    "68": {
      "TrackOrdinal": 68,
      "Circuit": "Maple Valley",
      "Location": "Vermont",
      "IOC_Code": "usa",
      "Track": "Short Circuit",
      "Length_in_km": 1.85
    },
    "70": {
      "TrackOrdinal": 70,
      "Circuit": "Maple Valley",
      "Location": "Vermont",
      "IOC_Code": "usa",
      "Track": "Short Circuit Reverse",
      "Length_in_km": 1.85
    },
    "840": {
      "TrackOrdinal": 840,
      "Circuit": "Daytona Intl Speedway",
      "Location": "Daytona",
      "IOC_Code": "usa",
      "Track": "Sports Car Circuit",
      "Length_in_km": 5.78
    },
    "841": {
      "TrackOrdinal": 841,
      "Circuit": "Daytona Intl Speedway",
      "Location": "Daytona",
      "IOC_Code": "usa",
      "Track": "Tri-Oval Circuit",
      "Length_in_km": 4.02
    },
    "860": {
      "TrackOrdinal": 860,
      "Circuit": "Brand Hatch",
      "Location": "West Kingsdown",
      "IOC_Code": "uk",
      "Track": "Tor Grand Prix",
      "Length_in_km": 3.7
    },
    "861": {
      "TrackOrdinal": 861,
      "Circuit": "Brand Hatch",
      "Location": "West Kingsdown",
      "IOC_Code": "uk",
      "Track": "Tor Indy",
      "Length_in_km": 1.93
    },
    "870": {
      "TrackOrdinal": 870,
      "Circuit": "Watkins Glen International Speedway",
      "Location": "New York",
      "IOC_Code": "usa",
      "Track": "Full Circuit",
      "Length_in_km": 5.55
    },
    "873": {
      "TrackOrdinal": 873,
      "Circuit": "Watkins Glen International Speedway",
      "Location": "New York",
      "IOC_Code": "usa",
      "Track": "Short Circuit",
      "Length_in_km": 3.94
    },
    "880": {
      "TrackOrdinal": 880,
      "Circuit": "Lime Rock Park",
      "Location": "Connecticut",
      "IOC_Code": "usa",
      "Track": "Full Circuit",
      "Length_in_km": 2.41
    },
    "882": {
      "TrackOrdinal": 882,
      "Circuit": "Lime Rock Park",
      "Location": "Connecticut",
      "IOC_Code": "usa",
      "Track": "South Chicane",
      "Length_in_km": 2.37
    },
    "883": {
      "TrackOrdinal": 883,
      "Circuit": "Lime Rock Park",
      "Location": "Connecticut",
      "IOC_Code": "usa",
      "Track": "Full Circuit Alt",
      "Length_in_km": 2.41
    },
    "990": {
      "TrackOrdinal": 990,
      "Circuit": "Virginia International Raceway",
      "Location": "Virginia",
      "IOC_Code": "usa",
      "Track": "Full",
      "Length_in_km": 5.26
    },
    "991": {
      "TrackOrdinal": 991,
      "Circuit": "Virginia International Raceway",
      "Location": "Virginia",
      "IOC_Code": "usa",
      "Track": "North",
      "Length_in_km": 3.62
    },
    "992": {
      "TrackOrdinal": 992,
      "Circuit": "Virginia International Raceway",
      "Location": "Virginia",
      "IOC_Code": "usa",
      "Track": "South",
      "Length_in_km": 2.66
    },
    "995": {
      "TrackOrdinal": 995,
      "Circuit": "Virginia International Raceway",
      "Location": "Virginia",
      "IOC_Code": "usa",
      "Track": "Grand West",
      "Length_in_km": 6.6
    },
    "996": {
      "TrackOrdinal": 996,
      "Circuit": "Virginia International Raceway",
      "Location": "Virginia",
      "IOC_Code": "usa",
      "Track": "Grand East",
      "Length_in_km": 6.76
    }
  }
  static getTrackInfo(trackId: number): FM8_TrackInfo | undefined {
    const track = this.trackMap[trackId];
    if(!track) return undefined;
    return {
      trackOrdinal: track.TrackOrdinal,
      circuit: track.Circuit,
      location: track.Location,
      iocCode: track.IOC_Code,
      track: track.Track,
      lengthInKm: track.Length_in_km
    };
  }
}
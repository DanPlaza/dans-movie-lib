export interface MovieInfo {
  "id": number
  "url": string
  "name": string
  "type": string
  "language": string
  "genres": string[]
  "status": string
  "runtime": number
  "averageRuntime": number
  "premiered": string
  "ended": string
  "officialSite": string
  "schedule": {
    "time": string
    "days": Array<string>
  },
  "rating": {
    "average": null | number
  },
  "weight": number
  "network": null | {
    "id": number
    "name": string
    "country": {
      "name": string
      "code": string
      "timezone": string
    },
    "officialSite": null | string
  },
  "webChannel": null | {
    "id": number
    "name": string
    "country": {
      "name": string
      "code": string
      "timezone": string
    },
    "officialSite": null | string
  },
  "dvdCountry": null | string
  "externals": {
    "tvrage": number
    "thetvdb": number
    "imdb": string
  },
  "image": {
    "medium": string
    "original": string
  },
  "summary": string
  "updated": number
  "_links": {
    "self": {
      "href": string
    },
    "previousepisode": {
      "href": string
    }
  }
}

const a:MovieInfo = {
  "id": 250,
  "url": "https://www.tvmaze.com/shows/250/kirby-buckets",
  "name": "Kirby Buckets",
  "type": "Scripted",
  "language": "English",
  "genres": [
    "Comedy"
  ],
  "status": "Ended",
  "runtime": 30,
  "averageRuntime": 30,
  "premiered": "2014-10-20",
  "ended": "2017-02-02",
  "officialSite": "http://disneyxd.disney.com/kirby-buckets",
  "schedule": {
    "time": "07:00",
    "days": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ]
  },
  "rating": {
    "average": null
  },
  "weight": 76,
  "network": {
    "id": 25,
    "name": "Disney XD",
    "country": {
      "name": "United States",
      "code": "US",
      "timezone": "America/New_York"
    },
    "officialSite": null
  },
  "webChannel": {
    "id": 83,
    "name": "DisneyNOW",
    "country": {
      "name": "United States",
      "code": "US",
      "timezone": "America/New_York"
    },
    "officialSite": null
  },
  "dvdCountry": null,
  "externals": {
    "tvrage": 37394,
    "thetvdb": 278449,
    "imdb": "tt3544772"
  },
  "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"
  },
  "summary": "<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character. <b>Kirby Buckets</b> introduces viewers to the vivid imagination of charismatic 13-year-old Kirby Buckets, who dreams of becoming a famous animator like his idol, Mac MacCallister. With his two best friends, Fish and Eli, by his side, Kirby navigates his eccentric town of Forest Hills where the trio usually find themselves trying to get out of a predicament before Kirby's sister, Dawn, and her best friend, Belinda, catch them. Along the way, Kirby is joined by his animated characters, each with their own vibrant personality that only he and viewers can see.</p>",
  "updated": 1658519538,
  "_links": {
    "self": {
      "href": "https://api.tvmaze.com/shows/250"
    },
    "previousepisode": {
      "href": "https://api.tvmaze.com/episodes/1051658"
    }
  }
}

export interface MovieImages {
  "id": number
  "type": string
  "main": boolean
  "resolutions": {
    [size: string]: {
      "url": string
      "width": number
      "height": number
    }
  }
}

export interface MoviesByGenre {
  [genre: string]: MovieInfo[]
}

export interface MovieSearchResult {
  score: number,
  show: MovieInfo,
}

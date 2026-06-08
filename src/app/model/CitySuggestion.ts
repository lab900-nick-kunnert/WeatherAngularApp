export interface CitySuggestion {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export const DUMMY_SUGGESTIONS: CitySuggestion[] = [
  {
    id: 1,
    name: 'New Amsterdam',
    region: 'New Amsterdam',
    country: 'USA',
    lat: 40.7128,
    lon: -74.006,
    url: 'https://www.google.com/maps/place/New+York,+NY,+USA/@40.7127783,-74.0059762,11z/data=!3m1!4b1!4m5!3m4!1s0x89c25a2d076de33f:0xc80b8f06e177fe62!8m2!3d40.7127783!4d-74.0037875',
  },
  {
    id: 2,
    name: 'London',
    region: 'London',
    country: 'UK',
    lat: 51.5074,
    lon: -0.1278,
    url: 'https://www.google.com/maps/place/London,+UK/@51.5073502,-0.1277582,11z/data=!3m1!4b1!4m5!3m4!1s0x487604ce2e349503:0x52963a5addd52a99!8m2!3d51.5073502!4d-0.1255695',
  },
  {
    id: 3,
    name: 'Paris',
    region: 'Paris',
    country: 'France',
    lat: 48.8566,
    lon: 2.3522,
    url: 'https://www.google.com/maps/place/Paris,+France/@48.856614,2.3522219,11z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b74f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219',
  },
  {
    id: 4,
    name: 'Amsterdam',
    region: 'Amsterdam',
    country: 'Netherlands',
    lat: 52.3702,
    lon: 4.8952,
    url: 'https://www.google.com/maps/place/Amsterdam,+Netherlands/@52.3702,4.8952,11z/data=!3m1!4b1!4m5!3m4!1s0x47c66e1f06e2b74f:0x40b82c3688c9460!8m2!3d52.3702!4d4.8952',
  }
]

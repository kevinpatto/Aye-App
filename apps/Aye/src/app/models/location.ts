export class Location {
  public addrNum: string;
  public street: string;
  public neighborhood: string;
  public city: string;
  public county: string;
  public longState: string;
  public shortState: string;
  public country: string;
  public zipcode: string;
  public fullAddr: string;
  public latitude: string;
  public longitude: string;

  constructor(
    addrNum: string,
    street: string,
    neighborhood: string,
    city: string,
    county: string,
    longState: string,
    shortState: string,
    country: string,
    zipcode: string,
    fullAddr: string,
    latitude: string,
    longitude: string
  ) {
    this.addrNum = addrNum;
    this.street = street;
    this.neighborhood = neighborhood;
    this.city = city;
    this.county = county;
    this.longState = longState;
    this.shortState = shortState;
    this.country = country;
    this.zipcode = zipcode;
    this.fullAddr = fullAddr;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

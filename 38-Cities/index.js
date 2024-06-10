"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Lahore");
describe_city("Karachi", "Pak");
describe_city("Islamabad");

import React from 'react'
import switchBox from './images/switch.jpeg'
import pipe from './images/pipe.jpeg'
import cropMaintain from './images/crop-maintain.jpeg'
import fan from './images/fan-instal.jpeg'
import tap from './images/tap.jpeg'
import clean from './images/clean.jpeg'
import wire from './images/light.jpeg'
import drain from './images/drain.jpeg'
import water from './images/water-plant.jpeg'
import light from './images/outlight.jpeg'
import motor from './images/motor.jpeg'
import grassCut from './images/grass-cut.jpeg'

const works = [
  {
    id: 1,
    name: "Switch Box Installation",
    price: "Rs:99",
    dur: "20 - 30 minutes",
    img:switchBox
  },
  {
    id: 2,
    name: "Broken Pipe Repairing",
    price: "Rs:249",
    dur: "45 - 50 minutes",
    img:pipe
  },
  {
    id: 3,
    name: "Crops Maintaining",
    price: "Rs:199",
    dur: "per hour",
    img:cropMaintain
  },
  {
    id: 4,
    name: "Fan Installation",
    price: "Rs:149",
    dur: "30 - 40 minutes",
    img:fan
  },
  {
    id: 5,
    name: "Water Tap Fixing",
    price: "Rs:129",
    dur: "25 - 35 minutes",
    img:tap
  },
  {
    id: 6,
    name: "Garden Cleaning",
    price: "Rs:299",
    dur: "1 - 2 hours",
    img:clean
  },
  {
    id: 7,
    name: "Light Wiring Repair",
    price: "Rs:179",
    dur: "30 - 45 minutes",
    img:wire
  },
  {
    id: 8,
    name: "Drain Block Removal",
    price: "Rs:349",
    dur: "40 - 60 minutes",
    img:drain
  },
  {
    id: 9,
    name: "Plant Watering Service",
    price: "Rs:99",
    dur: "per hour",
    img:water
  },
  {
    id: 10,
    name: "Outdoor Light Setup",
    price: "Rs:399",
    dur: "1 hour",
    img:light
  },
  {
  id: 11,
  name: "Motor Pump Repair",
  price: "Rs:449",
  dur: "1 - 1.5 hours",
  img:motor
},
{
  id: 12,
  name: "Lawn Grass Cutting",
  price: "Rs:299",
  dur: "45 - 60 minutes",
  img:grassCut
}
];

export default works;
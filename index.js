const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

var sortedRobots = robots.map(function (robot){
    var alignment = 'autobot'
    if (knownDecepticons.includes(`${robot.name}`)){
      alignment = 'decepticon'
    }

    return Object.assign({}, robot, {
      name:`${robot.name}`, alliance: `${alignment}`
    })
})
sortedRobots

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

var coloredZebraStripes = zebraStripes.map(function(stripe, index){
  var color = 'white';
  if(index % 2 === 0){
    color = 'black'
  }
  
  return Object.assign({}, stripe, {
    width: `${stripe.width}`, color: `${color}`
  })
})

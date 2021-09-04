const svg = d3.select("svg")
const height = +(svg.attr("height")) //returns back value of attribute if value not specified
const width = +(svg.attr("width")) // + insted of parseFloat
const eyeRadius = 20
const eyeSpacingX = 70
const eyeSpacingY = -70
const eyebrowHeight = 10
const eyebrowWidth = 40
const eyebrowY = -50

svg.style("background", "#eee")

const g = svg.append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`)

const circle = g.append("circle")
  .attr("r", height/3)
  .attr("fill", "#ebe553")
  .attr("stroke", "black")


const eyesG = g.append("g")
  .attr("transform", `translate(0, ${eyeSpacingY})`)

const leftEye = eyesG.append("circle")
  .attr("r", eyeRadius)
  .attr("cx", -eyeSpacingX)

const rightEye = eyesG.append("circle")
  .attr("r", eyeRadius)
  .attr("cx", eyeSpacingX)

const eyebrowsG = eyesG.append("g")
  .attr("transform", `translate(0, ${eyebrowY})`)

eyebrowsG
  .transition().duration(1000)
  .attr("transform", `translate(0, ${eyebrowY - 15})`)
  .transition().duration(1000)
  .attr("transform", `translate(0, ${eyebrowY})`)
  
const leftEyebrow = eyebrowsG.append("rect")
  .attr("width", eyebrowWidth)
  .attr("height", eyebrowHeight)
  .attr("x", eyeSpacingX - 20)
  // .attr("y", eyeSpacingY + 30)

const rightEyebrow = eyebrowsG.append("rect")
  .attr("width", eyebrowWidth)
  .attr("height", eyebrowHeight)
  .attr("x", -eyeSpacingX- 20)
  // .attr("y", eyeSpacingY + 30)


const mouth = g.append("path")
  .attr("d", d3.arc()({
    innerRadius: 0,
    outerRadius:100,
    startAngle:Math.PI / 2,
    endAngle:Math.PI * 3/2
  })) // "M0,-100A100,100,0,0,1,100,0L0,0Z"

  // 3:17
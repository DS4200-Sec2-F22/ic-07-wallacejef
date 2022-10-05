

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const data = [55000, 48000, 27000, 66000, 90000];

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME = d3.select("#vis")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

const MAX_X = d3.max(data, (d) => { return d; }); 
console.log("Max x: " +MAX_X);  

const X_SCALE = d3.scaleLinear()
                  .domain([0, (MAX_X + 10000)]) 
                  .range([0, VIS_WIDTH]); 

console.log("Input: 100000, X_SCALE output: " + X_SCALE(100000));

FRAME.selectAll("points")  
    .data(data)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (X_SCALE(d) + MARGINS.left); }) 
      .attr("cy", MARGINS.top) 
      .attr("r", 20)
      .attr("class", "point"); 
 
FRAME.append("g")
      .attr("transform", "translate(" + MARGINS.left + 
            "," + (VIS_HEIGHT + MARGINS.top) + ")") //moves axis 
                                                    // within margins 
      .call(d3.axisBottom(X_SCALE).ticks(4)) // function for generating axis  
        .attr("font-size", '20px'); // set font size





//The area contained is circular, with a radius of 5 meters. (10 meter diameter)
//The formula for calculating the area of a circle is PI multiplied by the radius, squared:
//const PI = 3.1415; const area = PI * radius * radius; //3.1414*5*5=78.5375

//Each plant requires a minimum space of 0.8 square meters. n >= 0.8 sq. meters
//The area is starting with - 20 plants.
//The plants - double in number every week.

//Predicting the plant growth after 1, 2, and 3 weeks of growth.


//1 : 20(0.8) = 16 sq meters
//2: 40(0.8) = 32 sq meters
//3: 80(0.8) = 64 sq meters

let capacity = 64;

if (capacity > 80) { console.log ("Pruned! Stop them from exceeding the capacty of the garaden."); //63.6154
} else if (capacity >= 50 && capacity <= 80) {
    console.log("Monitored! They are growing at an acceptable rate.");//39.2688 - 62.83
} else if (capacity < 50) {
    console.log("Planted! There is room to plant more plants.");
} 


if (capacity > 0) {
  if (capacity > 80) {
    console.log("Planted! There is room to plant more plants.");
  } else if (capacity >= 50 && capcity <= 80) {
    console.log("Monitored! They are growing at an acceptable rate.");
  } else {
    console.log("Planted! There is room to plant more plants.");
  }
} 

  
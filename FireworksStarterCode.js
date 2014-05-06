/* This simple firework is made up of four circles, which begin close together in the center of the screen and then move away from each other (to the North, South, East, and West, respectively). While moving, they "burn out" by fading from pink to black. The starter code draws the four pink circles in their starting positions, and the goal of the challenge is to animate them with movement and color changes. One can change the rate of movement or color change by increasing or decreasing values by a larger number.
*/

var centerX = 200;
var centerY = 200;
var radius = 30;
// coordinates of top circle
var xTop = centerX;
var yTop = centerY - radius;
// coordinates of bottom circle
var xBottom = centerX;
var yBottom = centerY + radius;
// coordinates of right circle
var xRight = centerX + radius;
var yRight = centerY;
// coordinates of left circle
var xLeft = centerX - radius;
var yLeft = centerY;
// RGB values of fill
var r = 255;
var g = 2;
var b = 150;

var draw = function() {
    background(0, 0, 0);
    fill(r, g, b);
    // top circle
    ellipse(xTop, yTop, radius, radius);
    // bottom circle
    ellipse(xBottom, yBottom, radius, radius);
    // right circle
    ellipse(xRight, yRight, radius, radius);
    // left circle
    ellipse(xLeft, yLeft, radius, radius); 
};
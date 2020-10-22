var c = document.getElementById("isoCanvas");
var ctx = c.getContext("2d");

// Settings
// ("gs" is short for "grid size")
var gs = 50;

function cube(ox,oy,oz,x,y,z) {

    ox*=gs; oy*=gs; oz*=gs; x*=gs; y*=gs; z*=gs;

    x_pos = origin_x+(ox)-(oy);
    y_pos = origin_y+(ox/2)+(oy/2)-(oz);
    
    // Draw xy-plane of the cube [1/3]
    ctx.beginPath();
    ctx.moveTo(x_pos, y_pos-z);
    ctx.lineTo(x_pos+x,y_pos+x/2-z);
    ctx.lineTo(x_pos+x-y,y_pos+x/2+y/2-z);
    ctx.lineTo(x_pos-y,y_pos+y/2-z);
    ctx.lineTo(x_pos, y_pos-z);
    ctx.fillStyle = "lightgrey";
    ctx.fill();

    // Draw xz-plane of the cube [2/3]
    ctx.beginPath();
    ctx.moveTo(x_pos-y,y_pos+y/2-z);
    ctx.lineTo(x_pos-y,y_pos+y/2);
    ctx.lineTo(x_pos+x-y,y_pos+x/2+y/2);
    ctx.lineTo(x_pos+x-y,y_pos+x/2+y/2-z);
    ctx.fillStyle = "darkgrey";
    ctx.fill();

    // Draw yz-plane of the cube [3/3]
    ctx.beginPath();
    ctx.moveTo(x_pos+x,y_pos+x/2-z);
    ctx.lineTo(x_pos+x,y_pos+x/2);
    ctx.lineTo(x_pos+x-y,y_pos+x/2+y/2);
    ctx.lineTo(x_pos+x-y,y_pos+x/2+y/2-z);
    ctx.lineTo(x_pos+x,y_pos+x/2-z);
    ctx.fillStyle = "grey";
    ctx.fill();
}

// Show axis
var origin_x = Number(ctx.canvas.width/2);
var origin_y = Number(ctx.canvas.height/2);

ctx.beginPath();
ctx.moveTo(0,origin_y-origin_x/2);
ctx.lineTo(origin_x*2,origin_y+origin_x/2);
ctx.strokeStyle = '#ff0000';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(origin_x*2,origin_y-origin_x/2);
ctx.lineTo(0,origin_y+origin_x/2);
ctx.strokeStyle = '#00ff00';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(origin_x,0);
ctx.lineTo(origin_x,origin_y*2);
ctx.strokeStyle = '#0000ff';
ctx.stroke();
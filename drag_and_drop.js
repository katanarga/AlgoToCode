
var dragok = false;
var startX;
var startY;

function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
}

// clear the canvas
function clear() {
ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// redraw the scene
function draw() {
clear();
ctx.fillStyle = "#FAF7F8";
rect(0,0,WIDTH,HEIGHT);
// redraw each rect in the rects[] array
for(var i=0;i<rects.length;i++){
    var r=rects[i];
    ctx.fillStyle=r.fill;
    rect(r.x,r.y,r.width,r.height);
}
}


function mouse_down(e){
e.preventDefault();
e.stopPropagation();

// get the current mouse position
var mx=parseInt(e.clientX-offsetX);
var my=parseInt(e.clientY-offsetY);

// test each rect to see if mouse is inside
dragok=false;
for(var i=0;i<rects.length;i++){
    var r=rects[i];
    if(mx>r.x && mx<r.x+r.width && my>r.y && my<r.y+r.height){
    // if yes, set that rects isDragging=true
    dragok=true;
    r.isDragging=true;
    }
}
// save the current mouse position
startX=mx;
startY=my;
}


function mouse_up(e){
e.preventDefault();
e.stopPropagation();
dragok = false;
for(var i=0;i<rects.length;i++){
    rects[i].isDragging=false;
}
}

function mouse_move(e){
if (dragok){
e.preventDefault();
e.stopPropagation();

// get the current mouse position
var mx=parseInt(e.clientX-offsetX);
var my=parseInt(e.clientY-offsetY);

// calculate the distance the mouse has moved
// since the last mousemove
var dx=mx-startX;
var dy=my-startY;

// move each rect that isDragging 
// by the distance the mouse has moved
// since the last mousemove
for(var i=0;i<rects.length;i++){
    var r=rects[i];
    if(r.isDragging){
    r.x+=dx;
    r.y+=dy;
    }
}

// redraw the scene with the new rect positions
draw();

// reset the starting mouse position for the next mousemove
startX=mx;
startY=my;

}
}
mouse_event="";
c=document.getElementById("myCanvas");
ctx=c.getContext("2d");
last_y="";
last_x="";
width_of_line = 2;
var width=screen.width;
if(width<992){
    c.width=width-70;
    c.height=screen.height-300
}
c.addEventListener("mousedown",MouseDown);
function MouseDown(e){
    mouse_event="Mousedown";
}
c.addEventListener("mouseup",Mouse_up);
function Mouse_up(e){
    mouse_event="Mouseup";
}
c.addEventListener("mousemove",Mouse_move);
function Mouse_move(e){
    var currentX=e.clientX-c.offsetLeft;
    var currentY=e.clientY-c.offsetTop;
    if(mouse_event=="Mousedown"){
        ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(currentX,currentY,40,0,2*Math.PI)
ctx.stroke();
    }
    last_x=currentX;
    last_y=currentY;

}
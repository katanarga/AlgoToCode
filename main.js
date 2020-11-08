window.onload=(e) => {
  
  function create_variable(){
    popupwindow("form_variable.html","New variable",400,300);
  }

  function create_affectation(){
    popupwindow("form_affectation.html","New affectation",400,300);
  }

  function create_print(){
    popupwindow("form_print.html","New print",400,300);
  }

  function create_if(){
    popupwindow("form_if.html","New if",400,300);
  }

  function create_else_if(){
    popupwindow("form_else_if.html","New else if",400,300);
  }

  function create_else(){
    popupwindow("form_else.html","New else",400,300);
  }

  function create_function(){
    popupwindow("form_function.html","New function",400,300);
  }

  function create_function_call(){
    popupwindow("form_function_call.html","New function call",400,300);
  }

  function create_for_loop(){
    popupwindow("form_for_loop.html","New for loop",400,300);
  }

  function create_while_loop(){
    popupwindow("form_while_loop.html","New while loop",400,300);
  }

  function popupwindow(url, title, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no,'+
    'status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, '+
    'width='+w+', height='+h+', top='+top+', left='+left);
  }
  let actions=new Map([
    ["variable",create_variable],
    ["affectation",create_affectation],
    ["print",create_print],
    ["if",create_if],
    ["else-if",create_else_if],
    ["else",create_else],
    ["new-function",create_function],
    ["function-call",create_function_call],
    ["for-loop",create_for_loop],
    ["while-loop",create_while_loop]
  ]);
  
  for (var [key,value] of actions){
    document.getElementById(key).addEventListener("click",value);
  };

  function drawOval(x, y, rw, rh){
    var canvas = document.getElementById("canvas-algo"); 
    var context = canvas.getContext("2d");
    context.save();
    context.scale(1,  rh/rw);
    context.beginPath();
    context.arc(x, y, rw, 0, 2 * Math.PI);
    context.restore();
    context.lineWidth=4;
    context.strokeStyle="orange";
    context.stroke(); 
  }

  var canvas = document.getElementById('canvas-algo');
  var ctx = canvas.getContext('2d');
  ctx.fillText("Hello World", 60,60);
  drawOval(50,50,100,50);
};




/*ctx.fillRect(25, 25, 100, 100);
ctx.clearRect(45, 45, 60, 60);
ctx.strokeRect(50, 50, 50, 50);

//triangle
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();

// Triangle plein
ctx.beginPath();
ctx.moveTo(25, 25);
ctx.lineTo(105, 25);
ctx.lineTo(25, 105);
ctx.fill();

// Triangle filaire
ctx.beginPath();
ctx.moveTo(125, 125);
ctx.lineTo(125, 45);
ctx.lineTo(45, 125);
ctx.closePath();
ctx.stroke();
 */


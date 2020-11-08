window.onload=(e) => {
  
  let div_actions=document.getElementById("div-actions");

  function create_variable(){
    div_actions.innerHTML='<form id="form-variable">'+
      '<label for="name-variable">Name :</label>'+
      '<input type="text" id="name-variable" name="name-variable" required><br>'+
      '<label for="fname">Type :</label>'+
      '<select name="type-variable" id="type-variable" form="type-variable">'+
      '<option value="int">Int</option>'+
      '<option value="float">Float</option>'+
      '<option value="string">String</option>'+
      '<option value="int-array">Int Array</option>'+
      '<option value="float-array">Float Array</option>'+
      '<option value="string-array">String Array</option>'+
      '</select><br>'+
      '<label for="initial-value">Initial value (optional) :</label>'+
      '<input type="text" id="initial-value" name="initial-value" placeholder="0"><br>'+
      '<button id="btn-form-variable" style="background-color:green;color:white">Create variable</button>'+
      '</form>';
      document.getElementById("btn-form-variable").addEventListener("click",function(){
        console.log("yes");
      });
  }

  function create_affectation(){
    div_actions.innerHTML='<form id="form-affectation">'+
      '<label for="name-variable">Name of the variable :</label>'+
      '<select name="type-variable" id="type-variable" form="type-variable">'+
      '<option value="int">Int</option>'+
      '<option value="float">Float</option>'+
      '<option value="string">String</option>'+
      '<option value="int-array">Int Array</option>'+
      '<option value="float-array">Float Array</option>'+
      '<option value="string-array">String Array</option>'+
      '</select><br>'+
      '<label for="affected-value">Value :</label>'+
      '<input type="text" id="affected-value" name="affected-value"><br>'+
      '<button id="btn-form-affectation" style="background-color:green;color:white">Create affectation</button>'+
      '</form>';
      document.getElementById("btn-form-affectation").addEventListener("click",function(){
        console.log("yes");
      });
  }

  function create_print(){
    div_actions.innerHTML='<form id="form-print">'+
      '<label for="text-print">Text :</label>'+
      '<input type="text" id="text-print" name="text-print" required><br>'+
      '<button id="btn-form-print" style="background-color:green;color:white">Create print</button>'+
      '</form>';
      document.getElementById("btn-form-print").addEventListener("click",function(){
        console.log("yes");
      });
  }

  function create_if(){
    div_actions.innerHTML='<form id="form-if">'+
      '<label for="condition">Condition :</label>'+
      '<input type="text" id="condition" name="condition" required><br>'+
      '<button id="btn-form-variable" style="background-color:green;color:white">Create if</button>'+
      '</form>';
      document.getElementById("btn-form-variable").addEventListener("click",function(){
        console.log("yes");
      });
  }

  function create_else_if(){
    div_actions.innerHTML='<form id="form-if">'+
      '<label for="condition">Condition :</label>'+
      '<input type="text" id="condition" name="condition" required><br>'+
      '<button id="btn-form-variable" style="background-color:green;color:white">Create if</button>'+
      '</form>';
      document.getElementById("btn-form-variable").addEventListener("click",function(){
        console.log("yes");
      });
  }

  function create_else(){
    div_actions.innerHTML='<form id="form-if">'+
      '<label for="condition">Condition :</label>'+
      '<input type="text" id="condition" name="condition" required><br>'+
      '<button id="btn-form-variable" style="background-color:green;color:white">Create if</button>'+
      '</form>';
  }

  function create_function(){
    div_actions.innerHTML='<form id="form-function">'+
      '<label for="name-function">Name :</label>'+
      '<input type="text" id="name-function" name="name-function" required><br>'+
      '<label for="number-parameters">Number of parameters :</label>'+
      '<input type="number" id="number-parameters" name="number-parameters" min="0" max="100"><br>'+
      '<button id="btn-function-parameters" style="background-color:green;color:white">Validate number of parameters</button>'+
      '<div id="function-parameters"></div>'+
      '<button id="btn-form-function" style="background-color:green;color:white">Create for loop</button>'+
      '</form>';
      document.getElementById("btn-form-function").addEventListener("click",function(){
        console.log("yes");
      });
  }

  function create_function_call(){
    div_actions.innerHTML='<form id="form-function-call">'+
      '<label for="name-function">Name of the function :</label>'+
      '<select id="name-function" name="name-function"></select><br>'+
      '<div id="parameters-function-call"></div>'+
      '<button id="btn-form-function-call" style="background-color:green;color:white">Create function call</button>'+
      '</form>';
      document.getElementById("btn-form-function-call").addEventListener("click",function(){
        console.log("yes");
      });
  }

  function create_for_loop(){
    div_actions.innerHTML='<form id="form-for-loop">'+
      '<label for="name-index">Name of the index :</label>'+
      '<input type="text" id="name-index" name="name-index" required><br>'+
      '<label for="start-value">Start value :</label>'+
      '<input type="number" id="start-value" name="start-value" min="0" max="1000000000"><br>'+
      '<label for="end-value">End value (not included in range) :</label>'+
      '<input type="number" id="end-value" name="end-value" min="0" max="1000000000"><br>'+
      '<button id="btn-form-for-loop" style="background-color:green;color:white">Create for loop</button>'
      '</form>';
    document.getElementById("btn-form-for-loop").addEventListener("click",function(){
        console.log("yes");
      });
  }

  function create_while_loop(){
    div_actions.innerHTML='<form id="form-for-loop">'+
      '<label for="name-index">Condition :</label>'+
      '<input type="text" id="condition" name="condition" required><br>'+
      '<button id="btn-form-variable" style="background-color:green;color:white">Create while loop</button>'+
      '</form>';
    document.getElementById("btn-form-variable").addEventListener("click",function(){
      console.log("yes");
    });
  }

  let actions=new Map([
    ["variable",create_variable],
    ["affectation",create_affectation],
    ["print",create_print],
    ["if",create_if],
    ["else-if",create_else_if],
    ["else",create_else],
    ["function",create_function],
    ["function-call",create_function_call],
    ["for-loop",create_for_loop],
    ["while-loop",create_while_loop]
  ]);
  
  for (var [key,value] of actions){
    document.getElementById(key).addEventListener("click",value);
  };

  var tabs=document.getElementsByClassName("close-file");
  
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
      console.log("ferme "+tabs[i].id);
      tabs[i].parentNode.remove();
    })
  }

  document.getElementById("btn-form-file").addEventListener("click",function(){
    var div_tabs=document.getElementById("tabs-files"); 
    var new_tab = document.createElement('div');
    new_tab.className="tab";
    new_tab.innerHTML='&nbsp;&nbsp;Paris&nbsp;'+
      '<a id="close-tab-2" href ="#" class="close-file">'+
      '<img src="images/close.png"/></a>';
    var new_bar=document.createElement('div');
    new_bar.className="tab-separator";
    new_bar.innerHTML="&nbsp;";
    div_tabs.insertBefore(new_tab,this);
    div_tabs.insertBefore(new_bar,this);
  });

  document.getElementById("btn-new-file").addEventListener("click",function(){
    popupwindow("form_file.html","New file",400,300);
  });


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


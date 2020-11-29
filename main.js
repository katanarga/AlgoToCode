window.onload = e => {
  let div_actions = document.getElementById("div-actions");

  let img_close = document.getElementById("img-close");
  let img_arrow = document.getElementById("img-arrow");

  let variables = [];

  function create_variable() {
    div_actions.innerHTML =
      '<form id="form-variable">' +
      '<label for="name-variable">Name :</label>' +
      '<input type="text" id="name-variable" name="name-variable" required><br>' +
      '<label for="fname">Type :</label>' +
      '<select name="type-variable" id="type-variable" form="type-variable">' +
      '<option value="int">Int</option>' +
      '<option value="float">Float</option>' +
      '<option value="string">String</option>' +
      '<option value="int-array">Int Array</option>' +
      '<option value="float-array">Float Array</option>' +
      '<option value="string-array">String Array</option>' +
      "</select><br>" +
      '<label for="initial-value">Initial value (optional) :</label>' +
      '<input type="text" id="initial-value" name="initial-value" placeholder="0"><br>' +
      '<button id="btn-form-variable" style="background-color:green;color:white">Create variable</button>' +
      "</form>";
    document
      .getElementById("btn-form-variable")
      .addEventListener("click", function() {
        let name = document.getElementById("name-variable").value;
        let type = document.getElementById("type-variable").value;
        let initial_value = document.getElementById("initial-value").value;
        console.log("yes " + name + " " + type + " " + initial_value);
        widgets_algo.push({
          x: 75 - 15,
          y: 50 - 15,
          text: "int x = 2",
          isDragging: false
        });
      });
  }

  function create_affectation() {
    div_actions.innerHTML =
      '<form id="form-affectation">' +
      '<label for="name-variable">Name of the variable :</label>' +
      '<select name="type-variable" id="type-variable" form="type-variable">' +
      '<option value="int">Int</option>' +
      '<option value="float">Float</option>' +
      '<option value="string">String</option>' +
      '<option value="int-array">Int Array</option>' +
      '<option value="float-array">Float Array</option>' +
      '<option value="string-array">String Array</option>' +
      "</select><br>" +
      '<label for="affected-value">Value :</label>' +
      '<input type="text" id="affected-value" name="affected-value"><br>' +
      '<button id="btn-form-affectation" style="background-color:green;color:white">Create affectation</button>' +
      "</form>";
    document
      .getElementById("btn-form-affectation")
      .addEventListener("click", function() {
        console.log("yes");
        widgets_algo.push({
          x: 75 - 15,
          y: 50 - 15,
          text: "x = 2",
          isDragging: false
        });
      });
  }

  function create_print() {
    div_actions.innerHTML =
      '<form id="form-print">' +
      '<label for="text-print">Text :</label>' +
      '<input type="text" id="text-print" name="text-print" required><br>' +
      '<button id="btn-form-print" style="background-color:green;color:white">Create print</button>' +
      "</form>";
    document
      .getElementById("btn-form-print")
      .addEventListener("click", function() {
        console.log("yes");
        widgets_algo.push({
          x: 75 - 15,
          y: 50 - 15,
          text: "print()",
          isDragging: false
        });
      });
  }

  function create_if() {
    div_actions.innerHTML =
      '<form id="form-if">' +
      '<label for="condition">Condition :</label>' +
      '<input type="text" id="condition" name="condition" required><br>' +
      '<button id="btn-form-variable" style="background-color:green;color:white">Create if</button>' +
      "</form>";
    document
      .getElementById("btn-form-variable")
      .addEventListener("click", function() {
        console.log("yes");
        widgets_algo.push({
          x: 75 - 15,
          y: 50 - 15,
          text: "if",
          isDragging: false
        });
      });
  }

  function create_else_if() {
    div_actions.innerHTML =
      '<form id="form-if">' +
      '<label for="condition">Condition :</label>' +
      '<input type="text" id="condition" name="condition" required><br>' +
      '<button id="btn-form-variable" style="background-color:green;color:white">Create if</button>' +
      "</form>";
    document
      .getElementById("btn-form-variable")
      .addEventListener("click", function() {
        console.log("yes");
        widgets_algo.push({
          x: 75 - 15,
          y: 50 - 15,
          text: "else if()",
          isDragging: false
        });
      });
  }

  function create_else() {
    div_actions.innerHTML =
      '<form id="form-if">' +
      '<label for="condition">Condition :</label>' +
      '<input type="text" id="condition" name="condition" required><br>' +
      '<button id="btn-form-variable" style="background-color:green;color:white">Create if</button>' +
      "</form>";
    widgets_algo.push({
      x: 75 - 15,
      y: 50 - 15,
      text: "else",
      isDragging: false
    });
  }

  function create_function() {
    div_actions.innerHTML =
      '<form id="form-function">' +
      '<label for="name-function">Name :</label>' +
      '<input type="text" id="name-function" name="name-function" required><br>' +
      '<label for="number-parameters">Number of parameters :</label>' +
      '<input type="number" id="number-parameters" name="number-parameters" min="0" max="100"><br>' +
      '<button id="btn-function-parameters" style="background-color:green;color:white">Validate number of parameters</button>' +
      '<div id="function-parameters"></div>' +
      '<button id="btn-form-function" style="background-color:green;color:white">Create for loop</button>' +
      "</form>";
    document
      .getElementById("btn-form-function")
      .addEventListener("click", function() {
        console.log("yes");
        widgets_algo.push({
          x: 75 - 15,
          y: 50 - 15,
          text: "function",
          isDragging: false
        });
      });
  }

  function create_function_call() {
    div_actions.innerHTML =
      '<form id="form-function-call">' +
      '<label for="name-function">Name of the function :</label>' +
      '<select id="name-function" name="name-function"></select><br>' +
      '<div id="parameters-function-call"></div>' +
      '<button id="btn-form-function-call" style="background-color:green;color:white">Create function call</button>' +
      "</form>";
    document
      .getElementById("btn-form-function-call")
      .addEventListener("click", function() {
        console.log("yes");
        widgets_algo.push({
          x: 75 - 15,
          y: 50 - 15,
          text: "f call",
          isDragging: false
        });
      });
  }

  function create_for_loop() {
    div_actions.innerHTML =
      '<form id="form-for-loop">' +
      '<label for="name-index">Name of the index :</label>' +
      '<input type="text" id="name-index" name="name-index" required><br>' +
      '<label for="start-value">Start value :</label>' +
      '<input type="number" id="start-value" name="start-value" min="0" max="1000000000"><br>' +
      '<label for="end-value">End value (not included in range) :</label>' +
      '<input type="number" id="end-value" name="end-value" min="0" max="1000000000"><br>' +
      '<button id="btn-form-for-loop" style="background-color:green;color:white">Create for loop</button>';
    ("</form>");
    document
      .getElementById("btn-form-for-loop")
      .addEventListener("click", function() {
        console.log("yes");
        widgets_algo.push({
          x: 75 - 15,
          y: 50 - 15,
          text: "for",
          isDragging: false
        });
      });
  }

  function create_while_loop() {
    div_actions.innerHTML =
      '<form id="form-for-loop">' +
      '<label for="name-index">Condition :</label>' +
      '<input type="text" id="condition" name="condition" required><br>' +
      '<button id="btn-form-variable" style="background-color:green;color:white">Create while loop</button>' +
      "</form>";
    document
      .getElementById("btn-form-variable")
      .addEventListener("click", function() {
        console.log("yes");
        widgets_algo.push({
          x: 75 - 15,
          y: 50 - 15,
          text: "while",
          isDragging: false
        });
      });
  }

  let actions = new Map([
    ["variable", create_variable],
    ["affectation", create_affectation],
    ["print", create_print],
    ["if", create_if],
    ["else-if", create_else_if],
    ["else", create_else],
    ["new-function", create_function],
    ["function-call", create_function_call],
    ["for-loop", create_for_loop],
    ["while-loop", create_while_loop]
  ]);

  for (var [key, value] of actions) {
    document.getElementById(key).addEventListener("click", value);
  }

  var tabs = document.getElementsByClassName("close-file");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
      console.log("X: " + this.id + " " + this.id.split("close-")[1]);
      var id_to_remove = this.id.split("close-")[1];
      var tab_to_remove = document.getElementById(id_to_remove);
      tab_to_remove.remove();
    });
  }

  function create_file() {
    var filename = document.getElementById("filename").value;
    console.log("yes " + filename);
    div_actions.innerHTML = "";
  }

  document.getElementById("btn-new-file").addEventListener("click", function() {
    div_actions.innerHTML =
      '<form id="form-file">' +
      '<label for="filename">Name :</label>' +
      '<input type="text" id="filename" name="filename" required><br>' +
      '<button id="btn-form-file" onclick="create_file()" style="background-color:green;color:white">Create file</button>' +
      "</form>";
  });

  function draw_oval(x, y, text) {
    ctx.fillStyle = "#FFFFFF";
    ctx.save();
    ctx.scale(1, R_HEIGHT_OVAL / R_WIDTH_OVAL);
    ctx.beginPath();
    ctx.arc(x, y, R_WIDTH_OVAL, 0, 2 * Math.PI);
    ctx.restore();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "orange";
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.fillText(text, x + OFFSET_X_TEXT_WIDGET, y + OFFSET_Y_TEXT_WIDGET);
  }

  var canvas = document.getElementById("canvas-algo");
  var ctx = canvas.getContext("2d");
  ctx.font = "15px Georgia";
  var BB = canvas.getBoundingClientRect();
  var offsetX = BB.left;
  var offsetY = BB.top;
  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;
  var WIDTH_WIDGET = 90;
  var HEIGHT_WIDGET = 40;
  var R_WIDTH_OVAL = 90;
  var R_HEIGHT_OVAL = 40;
  var OFFSET_X_TEXT_WIDGET = WIDTH_WIDGET / 2 - WIDTH_WIDGET / 5;
  var OFFSET_Y_TEXT_WIDGET = HEIGHT_WIDGET / 2;

  // drag related variables
  var dragok = false;
  var startX;
  var startY;
  var icons_widget = false;
  var x_icon_widget = 0;
  var y_icon_widget = 0;
  var timeout = false;
  var current_widget = null;

  // an array of objects that define different rectangles
  var widgets_algo = [];
  widgets_algo.push({
    x: 75 - 15,
    y: 50 - 15,
    text: "Start",
    type: "oval",
    isDragging: false
  });
  widgets_algo.push({
    x: 75 - 25,
    y: 50 - 25,
    text: "End",
    type: "oval",
    isDragging: false
  });

  canvas.onmousedown = mouse_down;
  canvas.onmouseup = mouse_up;

  draw_canvas(0, 0);

  function draw_rect(i, mx, my, x, y, text) {
    ctx.beginPath();
    ctx.rect(x, y, WIDTH_WIDGET, HEIGHT_WIDGET);
    if (ctx.isPointInPath(mx, my)) {
      x_icon_widget = x + OFFSET_X_TEXT_WIDGET + 65;
      y_icon_widget = y;
      ctx.drawImage(img_close, x_icon_widget, y_icon_widget);
      ctx.drawImage(img_arrow, x_icon_widget, y_icon_widget + 20);
      icons_widget = true;
      if (!timeout) {
        timeout = true;
        setTimeout(function() {
          icons_widget = false;
          timeout = false;
          draw_canvas(0, 0);
        }, 3000);
      }
    }
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText(text, x + OFFSET_X_TEXT_WIDGET, y + OFFSET_Y_TEXT_WIDGET);
  }

  function delete_widget(x_widget,y_widget){
    for (var i = 0; i < widgets_algo.length; i++){
      var widget = widgets_algo[i];
      if(widget.x==x_widget && widget.y==y_widget){
        widgets_algo.splice(i, 1);
        console.log("delete " +i);
        break;
      }
      else{
        continue;
      }
    }
    icons_widget=false;
    draw_canvas(0, 0);
  }

  function draw_canvas(mx, my) {
    ctx.fillStyle = "#99ccff";
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (var i = 0; i < widgets_algo.length; i++) {
      var widget = widgets_algo[i];
      draw_rect(i, mx, my, widget.x, widget.y, widget.text);
    }
    if (icons_widget) {
      ctx.drawImage(img_close, x_icon_widget, y_icon_widget);
      ctx.drawImage(img_arrow, x_icon_widget, y_icon_widget + 20);
    }
  }

  function mouse_down(e) {
    e.preventDefault();
    e.stopPropagation();
    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);
    if(icons_widget && mx>=x_icon_widget && mx<=x_icon_widget+20 && my>=y_icon_widget && my<=y_icon_widget+20) {
      delete_widget(x_icon_widget-(OFFSET_X_TEXT_WIDGET + 65),y_icon_widget);
    }
    else{
      dragok = false;
      for (var i = 0; i < widgets_algo.length; i++) {
        var widget = widgets_algo[i];
        if (
          mx > widget.x &&
          mx < widget.x + WIDTH_WIDGET &&
          my > widget.y &&
          my < widget.y + HEIGHT_WIDGET
        ) {
          dragok = true;
          widget.isDragging = true;
        }
      }
      startX = mx;
      startY = my;
    }
  }

  function mouse_up(e) {
    e.preventDefault();
    e.stopPropagation();
    dragok = false;
    for (var i = 0; i < widgets_algo.length; i++) {
      widgets_algo[i].isDragging = false;
    }
  }

  canvas.onmousemove = function(e) {
    e.preventDefault();
    e.stopPropagation();
    var mx = e.clientX - offsetX,
      my = e.clientY - offsetY,
      dx = mx - startX;
    dy = my - startY;
    if (dragok) {
      for (var i = 0; i < widgets_algo.length; i++) {
        var r = widgets_algo[i];
        if (r.isDragging) {
          r.x += dx;
          r.y += dy;
        }
      }
    }
    draw_canvas(mx, my);
    startX = mx;
    startY = my;
  };
};

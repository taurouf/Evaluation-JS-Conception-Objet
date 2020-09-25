'use strict'

var GridGenerator = function gridGenerator(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;

}

GridGenerator.prototype.run = function () {
  return this.grid();
}




GridGenerator.prototype.grid = function () {
  var matrix = document.createElement("table");
  for (var i = 0; i < this.xAxis; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < this.yAxis; j++) {
      var td = document.createElement("td");
      td.style.border = 'solid';
      td.style.width = '20px';
      td.style.height = '20px';
      tr.appendChild(td);
    }
    matrix.appendChild(tr);
  }
  document.querySelector("body").appendChild(matrix);


}

var toto = new GridGenerator(5, 5);
toto.run();


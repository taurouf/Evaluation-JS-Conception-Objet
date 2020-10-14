'use strict'


/**
 * Represent Worldmap
 * @constructor
 */
var RenderWorldMap = function RenderWorldMap() {

}
/**
 * this is a function for the run app
 */
RenderWorldMap.prototype.run = function () {
  this.select();
  this.legend();
}
/**
 * this is a function selected country
 */
RenderWorldMap.prototype.select = function () {
  var country = document.body.querySelectorAll('path');
  country.forEach(function (pays) {
    pays.addEventListener('click', function (e) {
      country.forEach(function (path) {
        path.style.fill = 'black';
      })
      e.target.style.fill = 'red';
    });
    pays.addEventListener('mouseenter', function (e) {
      if (e.target.style.fill === 'red') {
        e.target.style.fill = 'purple';

      }
      e.target.style.fill = 'blue';
    })
    pays.addEventListener('mouseleave', function (e) {
      if (e.target.style.fill === 'purple' || e.target.style.fill == 'red') {
        e.target.style.fill = 'red';
        return;
      }
      e.target.style.fill = 'black';
    })
  })
}

/**
 * this is a function a create legend for the worldmap
 */
RenderWorldMap.prototype.legend = function () {
  var legend = document.createElement('ul');
  var country = document.body.querySelectorAll('path');
  var hover = document.createElement('li');
  var selected = document.createElement('li');

  country.forEach(function (path) {
    path.addEventListener('mouseenter', function (e) {
      hover.innerHTML = 'Pays survolé : ' + e.target.id;
      legend.appendChild(hover);
    });
    path.addEventListener('click', function (e) {
      selected.innerHTML = 'Pays sélectionner : ' + e.target.id;
      legend.prepend(selected);
    });
  })
  document.body.appendChild(legend);
}


var map = new RenderWorldMap();
map1.run();
'use strict'



var RenderWorldMap = function RenderWorldMap() {

}
RenderWorldMap.prototype.run = function() {
    this.select();
    this.legend();
  }

RenderWorldMap.prototype.select = function() {
    var country = document.body.querySelectorAll('path');
    country.forEach(function(pays) {
      pays.addEventListener('click', function(e){
        country.forEach(function(path) {
          path.style.fill = 'black';
        })
        e.target.style.fill = 'red';
      });
      pays.addEventListener('mouseenter', function(e) {
        if(e.target.style.fill === 'red') {
          e.target.style.fill = 'purple';
     
        }
        e.target.style.fill = 'blue';
      })
      pays.addEventListener('mouseleave', function(e) {
        if(e.target.style.fill === 'purple' || e.target.style.fill == 'red') {
          e.target.style.fill = 'red';
          return;
        }
        e.target.style.fill = 'black';
      })
    })}


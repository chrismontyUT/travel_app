import { Component, OnInit } from '@angular/core';
//import * as fs from 'fs';
import * as d3 from 'd3';
import * as d3geo from 'd3-geo';
import * as topojson from 'topojson';
import * as Canvas from 'canvas';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
    var width:number = 750, height:number = 400;
    //var canvas = d3.select("mycanvas")
   // var height = window.innerHeight;
    //var width = window.innerWidth;

    var projection = d3geo.geoMercator()
        .center([-81.369515, 28.538479])
        .scale(40000000)
        .translate([width / 2, height / 2])

    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = "1px solid";
    document.body.appendChild(canvas);
    
   // var mycanvas = d3.select("mycanvas")
    //    .attr('height', height)
    //    .attr('width', width)

    //var canvas = new Canvas(960 , 600);
    var ctx = canvas.getContext('2d');

    var path = d3geo.geoPath()
          .projection(projection)
          .context(ctx)

    //var canvas1 = document.createElement('canvas');
    //document.body.appendChild(canvas);

    var world = require('../../assets/topojson/110.json');
    console.log(world);
    console.log(typeof world)
    //var context = canvas.getContext("2d");


    ctx.beginPath();
    path(topojson.mesh(world));
    ctx.stroke();
  }

  ngAfterContentInit(){
    d3.select("p").style("color", "red");
  }

}

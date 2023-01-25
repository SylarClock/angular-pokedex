import { Component, Input, OnInit } from '@angular/core';
import { faMap, faHandBackFist } from '@fortawesome/free-regular-svg-icons'
import { faFire, faMeh, faFeather, faSkull, faMountain, faGem, faBug, faGhost, faWrench, faDroplet, faLeaf, faBoltLightning, faBrain, faDragon, faWandSparkles, faCircleQuestion, faMoon, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-type-button',
  templateUrl: './type-button.component.html',
  styleUrls: ['./type-button.component.css']
})
export class TypeButtonComponent implements OnInit {
  
  @Input() type_name: string = "";
  css_class = "";
  icon = faMap;

  constructor(){
  }
  
  ngOnInit(): void {
    this.css_class = this.type_name.toLowerCase();

    switch( this.type_name.toLowerCase() ){
      case 'normal':{
        this.icon = faMeh;
        break;
      }
      case 'fighting':{
        this.icon = faHandBackFist;
        break;
      }
      case 'flying':{
        this.icon = faFeather;
        break;
      }
      case 'poison':{
        this.icon = faSkull;
        break;
      }
      case 'ground':{
        this.icon = faMountain;
        break;
      }
      case 'rock':{
        this.icon = faGem;
        break;
      }
      case 'bug':{
        this.icon = faBug;
        break;
      }
      case 'ghost':{
        this.icon = faGhost;
        break;
      }
      case 'steel':{
        this.icon = faWrench;
        break;
      }
      case 'fire':{
        this.icon = faFire;
        break;
      }
      case 'water':{
        this.icon = faDroplet;
        break;
      }
      case 'grass':{
        this.icon = faLeaf;
        break;
      }
      case 'electric':{
        this.icon = faBoltLightning;
        break;
      }
      case 'psychic':{
        this.icon = faBrain;
        break;
      }
      case 'dragon':{
        this.icon = faDragon;
        break;
      }
      case 'dark':{
        this.icon = faCircleHalfStroke;
        break;
      }
      case 'fairy':{
        this.icon = faWandSparkles;
        break;
      }
      case 'unknown':{
        this.icon = faCircleQuestion;
        break;
      }
      case 'shadow':{
        this.icon = faMoon;
        break;
      }
      default: {
        break;
      }
    }
  }




}

/*
_      _                                                  
| |    | |                                                 
| |__  | |  ___  __  __  ___   ___       ___   _ __   __ _ 
| '_ \ | | / _ \ \ \/ / / __| / _ \     / _ \ | '__| / _` |
| |_) || || (_) | >  < | (__ | (_) | _ | (_) || |   | (_| |
|_.__/ |_| \___/ /_/\_\ \___| \___/ (_) \___/ |_|    \__, |
                                                      __/ |
                                                     |___/ 
                    bloxco.org              
                    automaticbg.js                  
                    by zertybee_5                       */
/* FILE INFORMATION */
/* Name: automaticbg.js */
/* Author: zertybee_5 */
/* Created (DD-MM-YYYY @ HH:MM): 08-07-2023 @ 18:48CEST */
/* Use: Automatically sets the background of the profile pictures in the card to a randomly selected color. All colors are chosen atleast once if possible. */

var _$_70c9=["\x62\x6C\x75\x65","\x70\x75\x72\x70\x6C\x65","\x79\x65\x6C\x6C\x6F\x77","\x63\x79\x61\x6E","\x70\x69\x6E\x6B","\x67\x72\x65\x65\x6E","\x6F\x72\x61\x6E\x67\x65","\x69\x6D\x67\x5B\x69\x64\x3D\x22\x73\x68\x72\x50\x72\x6F\x66\x69\x6C\x65\x50\x69\x63\x22\x5D",""];const colors=[_$_70c9[0],_$_70c9[1],_$_70c9[2],_$_70c9[3],_$_70c9[4],_$_70c9[5],_$_70c9[6]];const images=[...document.querySelectorAll(_$_70c9[7])];const shuffledColors=shuffleArray(colors);let colorIndex=0;let previousColor=null;images.forEach((_0xEECF)=>{let _0xEF0B=shuffledColors[colorIndex% shuffledColors.length];if(previousColor=== _0xEF0B){const _0xEE93=shuffledColors.filter((_0xEF47)=>{return _0xEF47!== previousColor&& _0xEF47!== shuffledColors[(colorIndex+ 1)% shuffledColors.length]});_0xEF0B= _0xEE93[Math.floor(Math.random()* _0xEE93.length)]};_0xEECF.classList.add(("\x62\x67\x68\x2D"+_0xEF0B+_$_70c9[8]));previousColor= _0xEF0B;colorIndex++});function shuffleArray(_0xEF83){const _0xF037=[..._0xEF83];for(let _0xEFBF=_0xF037.length- 1;_0xEFBF> 0;_0xEFBF--){const _0xEFFB=Math.floor(Math.random()* (_0xEFBF+ 1));[_0xF037[_0xEFBF],_0xF037[_0xEFFB]]= [_0xF037[_0xEFFB],_0xF037[_0xEFBF]]};return _0xF037}

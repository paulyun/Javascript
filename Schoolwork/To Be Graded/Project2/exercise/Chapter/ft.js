/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Paul Yun
 *    Date: 4/27/2016  

 *    Filename: ft.js
 */

//global variables
var photographerCost = 0;
var totalCost = 0;
var memoryBook = false;
var reproductionRights = false;

//sets all form fields to default
function resetForm() {
    document.getElementById("photognum").value = 1;
    document.getElementById("photoghrs").value = 2;
    document.getElementById("membook").checked = memoryBook;
    document.getElementById("reprodrights").checked = reproductionRights;
    document.getElementById("distance").value = 0;
}

//resets form when page is reloaded
document.addEventListener("load", resetForm, false);
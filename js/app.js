
let testModule = require('./module'); // import module.js

window.addEventListener('load', function () {
    console.log('rolled together with a burning paper heart');

    let first = document.querySelector('#fname');
    let last = document.querySelector('#lname');
    let nameCheck = new RegExp('^[A-Z]+[a-z]+');

    let pnum = document.querySelector('#phone');
    let pnumCheck = new RegExp ('^\(?\d{3}\)? ?\d{3} ?-?\d{4}');
    let email = document.querySelector('#email');
    let emailCheck = new RegExp('^[a-zA-Z]+[\w-\.]*@[a-zA-Z0-9]+.[a-zA-z]{2,3}.?\w{0,3}');

    let street = document.querySelector('#street');
    let streetCheck = new RegExp('^\d+ ?[a-zA-Z]? [a-zA-Z]+ [a-zA-Z]{2,3} ?[a-zA-Z]{0,3}');
    let city = document.querySelector('#city');
    let cityCheck = new RegExp('^[A-Z][a-zA-z]+');
    let state = document.querySelector('#state');
    let stateCheck = new RegExp('^[A-Z]{2}');
    let zip = document.querySelector('#zip');
    let zipCheck = new RegExp('^[0-9]{5}-?[0-9]{0,4}');

    let user = document.querySelector('#user');
    let userCheck = new RegExp('\w{6,20}');
    let url = document.querySelector('#url');
    let urlCheck = new RegExp('^(https:\/\/)|[A-z0-9]{0,15}.?\w+.\w+');
    let ip = document.querySelector('#ipv4');
    //let ipCheck = new RegExp('')

    // first.addEventListener('keyup', function() {
    //     if (nameCheck.test(first.value) === true) {
    //         console.log(first.value + ` is good!`);
    //     } else {
    //         console.log('wait! ' + first.value + ` is no good!`);
    //     }
    // });

});
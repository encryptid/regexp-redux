
let testModule = require('./module'); // import module.js

window.addEventListener('load', function () {
    console.log('rolled together with a burning paper heart');

    let first = document.querySelector('#fname');
    let last = document.querySelector('#lname');
    let nameCheck = new RegExp('^[A-Z]+[a-z]+');

    let pnum = document.querySelector('#phone');
    let pnumCheck = new RegExp ('^\(?\d{3}\)? ?\d{3} ?-?\d{4}');
    let email = document.querySelector('#email');
    //let emailCheck = new RegExp('')

    // first.addEventListener('keyup', function() {
    //     if (nameCheck.test(first.value) === true) {
    //         console.log(first.value + ` is good!`);
    //     } else {
    //         console.log('wait! ' + first.value + ` is no good!`);
    //     }
    // });

});
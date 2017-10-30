
//let testModule = require('./module'); // import module.js

window.addEventListener('load', function () {
    console.log('rolled together with a burning paper heart');

    //backslashes must also be escaped in JS regex
    let first = document.querySelector('#fname');
    let last = document.querySelector('#lname');
    let nameCheck = new RegExp('^[A-Z]+[a-z]+');

    let pnum = document.querySelector('#phone');
    let pnumCheck = new RegExp('^\\(?\\d{3}\\)? ?\\d{3} ?-?\\d{4}');
    let email = document.querySelector('#email');
    let emailCheck = new RegExp('^[a-zA-Z]+[\\w-\\.]*@[a-zA-Z0-9]+.[a-zA-z]{2,3}.?\\w{0,3}');

    let street = document.querySelector('#street');
    let streetCheck = new RegExp('^\\d+ ?[a-zA-Z]? [a-zA-Z]+ [a-zA-Z]{2,3} ?[a-zA-Z]{0,3}');
    let city = document.querySelector('#city');
    let cityCheck = new RegExp('^[A-Z][a-zA-z ]+');
    let state = document.querySelector('#state');
    let stateCheck = new RegExp('^[A-Z]{2}');
    let zip = document.querySelector('#zip');
    let zipCheck = new RegExp('^[0-9]{5}-?[0-9]{0,4}');

    let user = document.querySelector('#user');
    let userCheck = new RegExp('\\w{6,20}');
    let url = document.querySelector('#url');
    let urlCheck = new RegExp('^(https:\/\/)|[A-z0-9]{0,15}.?\w+.\w+');
    let ip = document.querySelector('#ipv4');
    let ipCheck = new RegExp('^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$');

    let queries = [first, last, pnum, email, street, city, state, zip, user, url, ip];
    let tests = [nameCheck, nameCheck, pnumCheck, emailCheck, streetCheck, cityCheck, stateCheck, zipCheck, userCheck, urlCheck, ipCheck];

    console.log(queries);
    console.log(tests);

    let submit = document.querySelector('button');
    submit.addEventListener('click', checkAll);

    function checkAll() {
        console.log('button works!');
        for (let i = 0; i < tests.length; i++) {
            if (tests[i].test(queries[i].value) === true) {
                console.log('all good!');
            } else {
                console.log('error(s) found on ' + tests[i] + ' for ' + queries[i].value);
            };
        };
    };
});
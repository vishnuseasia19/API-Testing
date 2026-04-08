const {test,expect} = require('@playwright/test');
const { request } = require('node:http');
test('put request ', async ({request})=>
{ const tokenResponce = await request.post('  https://restful-booker.herokuapp.com/auth ',{ headers:{'Content-Type':'application/json'},
    data :{
     "username" : "admin",
     "password" : "password123"
 }
});
const jsonResp = await tokenResponce.json();
const token = jsonResp.token; 
    console.log("Token is:", token);


// create booking 
const createBooking = await request.post('https://restful-booker.herokuapp.com/booking', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    data: {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }
}); 
// Always verify the response and await the JSON
const statusCode = createBooking.status();
console.log('Status Code:', statusCode);

// 3. Get the JSON Body (Asynchronous - Requires await)
const createResp = await createBooking.json();
console.log('Booking Data:', createResp);


});


// put request
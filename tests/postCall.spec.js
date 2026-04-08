const {test, expect} = require('@playwright/test');
const { log } = require('node:console');
test('Test Post API', async function({request}) {
const creds={
    "username": "admin",
    "password": "password123"
}
    const authresp = await request.post('https://restful-booker.herokuapp.com/auth', {
        data: { "username" : "admin",
    "password" : "password123"}
    })
    const token=await authresp.json();
    console.log(await authresp.status())
    console.log(token);

   const bookingRes = await request.post('https://restful-booker.herokuapp.com/booking', {
  data: {
    firstname: "John",
    lastname: "Doe",
    totalprice: 100,
    depositpaid: true,
    bookingdates: {
      checkin: "2024-01-01",
      checkout: "2024-01-05"
    },
    additionalneeds: "Breakfast"
  }
});
const status = bookingRes.status();
console.log(status);

if (status !== 200) {
  console.log(await bookingRes.text()); 
  throw new Error(`Request failed with status ${status}`);
}

const body = await bookingRes.json();
console.log(body);



});

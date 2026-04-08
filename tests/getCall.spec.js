const{test,expect}=require('@playwright/test');
const { stat } = require('node:fs');

test('Test Get API',async function({request}) {
    const resp = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(resp);
    //response body
    //console.log('responseBody : ',resp.body());
    console.log("----------------------------------------");
    const respJson= await resp.json();
    console.log(respJson);
    console.log("----------------------------------------");
    const status=await resp.status()
    console.log(status);
console.log("----------------------------------------");
    const statusText=await resp.statusText()
    console.log(statusText);
})
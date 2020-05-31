const http = require('http');
const fs = require('fs');

console.log('Message 01');
const server = http.createServer((req, res) => {
    console.log('Message 02');
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        console.log('Message 03');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    console.log('Message 04');
    if (url === '/message' && method === 'POST') {
        console.log('Message 05');
        const body = [];
        req.on('data', (chunk) => { 
            console.log('Message 06');
            console.log(chunk);
            body.push(chunk);
            console.log('Message 07');
        });
        console.log('Message 08');
        req.on('end', () => {
            console.log('Message 09');
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            //fs.writeFileSync('message.txt', message);
            console.log('Message 10');
            console.log(parsedBody);
            console.log('Message 11');
            fs.writeFileSync('message.txt', message);
            console.log('Message 12');
        })
        console.log('Message 13');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    console.log('Message 14');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
    console.log('Message 15');
});
console.log('Message 16');
server.listen(3000);
console.log('Message 17');


const http = require('http');
const fs = require('fs');

const port = 1234;
const requrestHandler = (req, res) => {

    let filePath = "";
    switch (req.url) {
        case '/':
            filePath = './Index.html'
            break;
        case '/contact':
            filePath = './Contact.html'
            break;
        case '/about':
            filePath = './About.html'
            break;
        case '/product':
            filePath = './Product.html'
            break;
        default:
            filePath = './Error.html'
            break;
    }
    let data = fs.readFileSync(filePath);
    res.end(data);
}
const server = http.createServer(requrestHandler);     // create a new server

server.listen(port, (err) => {
    if (err) {
        console.log(`Server is not start: ${err}`);
        return false;
    }
    console.log(`Server start at http://localhost:${port}`);
});

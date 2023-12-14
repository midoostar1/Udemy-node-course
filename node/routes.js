const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;

  //listening to request to the base url and sending  a response with Html form

  if (url === "/") {
    res.write("<html>");
    res.write("<head></head>");
    res.write(
      '<body><div style="margin: 20px;"> <form action="/message" method="POST"> <input  type="text"  name="message" placeholder="Enter text here"  style="padding: 10px; margin: 5px 0; border: 1px solid #ddd; border-radius: 4px;"><button type="submit"  style="padding: 10px 15px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;"> Submit </button></form> </div></body>'
    );
    res.write("<html>");
    return res.end();
  }

  //listening to a post request and from form submission
  if (url === "/message" && method === "POST") {
    const body = [];
    //capturing the stream of data in request body (data from form submission)
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // stream is parsed to text after being captured
    return req.on("end", () => {
      const bodyParsed = Buffer.concat(body).toString();
      const message = bodyParsed.split("=")[1];
      console.log(message);

      //the third argument below is a callback that runs after file is written
      // writeFileSync is used execution of the next line of code will be blocked until file operation is done. so it is bette to alwars use writeFile
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      }); // creating a file and writing the text from form submission
    });
  }

  // setting header and writting some html to the response HEADER
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head></head>");
  res.write("<body><h1>Hello From Node</h1></body>");
  res.write("<html>");
  res.end(); //cant write after this method is called as it sends the response
};

module.exports = requestHandler;

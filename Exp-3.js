
const fs = require("fs");


fs.writeFile("demo.txt", "Hello Kartik! Welcome to Node.js", (err) => {
    if (err) throw err;

    console.log("File created successfully!");

   
    fs.readFile("demo.txt", "utf8", (err, data) => {
        if (err) throw err;

        console.log("File Content:", data);

       
        fs.appendFile("demo.txt", "\nLearning CRUD operations", (err) => {
            if (err) throw err;

            console.log("File updated successfully!");

            fs.readFile("demo.txt", "utf8", (err, updatedData) => {
                if (err) throw err;

                console.log("Updated Content:", updatedData);

               
                fs.unlink("demo.txt", (err) => {
                    if (err) throw err;

                    console.log("File deleted successfully!");
                });
            });
        });
    });
});

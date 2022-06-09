const fs = require('fs');

const writeFile = (fileData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileData, (err) => {
            console.log("Writing team data to file...")
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: `
                File Written Succesfully!
                `
            });
        })
    })
}

module.exports = writeFile;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PDFImage = require("pdf-image").PDFImage;
const IMAGES_PATH = 'images';
const convertFilePDF = function (file) {
    var pdfImage = new PDFImage(file.destination + file.originalname, {
        combinedImage: true
    });
    console.log(pdfImage);
    pdfImage.convertFile().then(function (imagePaths) {
        // [ /tmp/slide-0.png, /tmp/slide-\
    });
};
exports.convertFilePDF = convertFilePDF;
//# sourceMappingURL=helpers.js.map
import qr from "qr-image";
import fs from "fs";

const url = 'https://danielmulendaresume.netlify.app/';

var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
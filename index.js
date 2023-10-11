/* all.this

[State Control]
- all.this
    - plug neurons.me.all.this  or all.this into neurons.me
- be.this
- this.be 

[[Interfaces and Data Structure]]
- this.atom
- this.audio
   - audio files, 
   - audio streams, etc.
- this.dom
   - 3d objects,
   - dom elements, etc.
- this.img
- this.pixel
- this.pixelgrid
- this.text
- this.video
    - video files,
    - video streams, etc.

[Relationships]
- this.me
- this.haiku
- this.wallet
- cleaker
- i.mlearning
- Lisa

[deep learning]
- neurons.me

[network and storage]
- netget
- v.path
*/

//--- Other Stuff:
const { exec } = require("child_process");
const path = require("path");
const crypto = require('crypto');
const fs = require('fs');
const args = process.argv.slice(2);
const os = require('os');
//all this
exports.me = require("this.me");
exports.beThis = require('this.be');
exports.thisBe = require('be.this');
exports.img = require('this.img');
exports.atom = require('this.atom');
//exports.pixel = require('this.pixel');
exports.haiku = require('this.haiku');
exports.dom = require('this.dom');
exports.text = require('this.text');
//exports.audio = require('this.audio');
//exports.video = require('this.video');
exports.wallet = require('this.wallet');
exports.neurons = require("neurons.me");
exports.cleaker = require('cleaker');
exports.mlearning = require('i.mlearning');
//exports.Lisa = require('Lisa');
exports.vpath = require('v.path');
exports.netget = require('netget');
//--- all.this


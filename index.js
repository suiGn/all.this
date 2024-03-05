/*index.js
╔═╗╦  ╦  ╔╦╗╦ ╦╦╔═╗
╠═╣║  ║   ║ ╠═╣║╚═╗
╩ ╩╩═╝╩═╝o╩ ╩ ╩╩╚═╝
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽                                                                                                            
--------------------------------
Build, manage and run your neural networks.
For more information, visit: https://neurons.me*/
/**
 * @module all.this
 * @description Aggregates all individual this.* modules into a single package for convenient access, separating utilities and data formatters.
 */

// Import utility modules
/**
 * PixelGrid utility module from pixelgrid.me package.
 * @const
 */
import pixelgrid from 'pixelgrid.me';

// Import data formatter modules
/**
 * Audio data formatter module from this.audio package.
 * @const
 */
import audioFormatter from 'this.audio';
// Import other data formatter modules similarly...

// Organize imports into utils and dataFormatters objects for better modularity and clarity
const utils = {
  pixelgrid: pixelgridUtil,
  // other utilities...
};

const dataFormatters = {
  audio: audioFormatter,
  // other data formatters...
};

// Aggregates utils and dataFormatters into a single object for export
const all = {
  utils,
  dataFormatters,
};

// Export the aggregated object
export default all;

// Log the successful loading of the all.this package
console.log("all.this loaded;");
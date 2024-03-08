/*index.js
╔═╗╦  ╦  ╔╦╗╦ ╦╦╔═╗
╠═╣║  ║   ║ ╠═╣║╚═╗
╩ ╩╩═╝╩═╝o╩ ╩ ╩╩╚═╝
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽                                                                                                            
--------------------------------
Aggregates all individual this.* modules into a single package for convenient access, separating utilities and data formatters.
For more information, visit: https://neurons.me*/

/**
 * @module all.this
 * @description Aggregates all individual this.* modules into a single package for convenient access, separating utilities and data formatters.
 */

// Import utility modules
import thisAudio from 'this.audio';
// Import other data formatter modules similarly...

// Organize imports into utils and dataFormatters objects for better modularity and clarity
//const utils = {
  //PixelGrid
  // other utilities...
//};

const dataFormatters = {
  thisAudio
  // other data formatters...
};

// Aggregates utils and dataFormatters into a single object for export
const all = {
  //utils,
  dataFormatters
};

// Export the aggregated object
export default all;
console.log("all.this loaded;");
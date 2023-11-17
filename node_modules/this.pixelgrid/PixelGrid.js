//PixelGrid.js
class PixelGrid extends HTMLElement {
    constructor() {
        super();
        this.width = this.getAttribute('width') || 777;
        this.height = this.getAttribute('height') || 333;
        this.pixelSize = this.getAttribute('pixel-size') || 1;
        // Initialize the canvas element
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        // This will return true if the attribute's value is "true"
        const willReadFrequently = this.getAttribute('will-read-frequently') === "true";
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: willReadFrequently });
        this.imageData = this.ctx.createImageData(this.width, this.height);
        // Append the canvas to the custom element
        this.appendChild(this.canvas);
    }
    connectedCallback() {
        // Called when the element is attached to the DOM
        this.initialize();
        this.canvas.addEventListener('mousemove', (e) => this.showPixelInfo(e));
    }
    // Fill the image data with light gray pixels for better visibility
    initialize() {
        for (let i = 0; i < this.imageData.data.length; i += 4) {
            this.imageData.data[i] = 200;     // R value
            this.imageData.data[i + 1] = 200; // G value
            this.imageData.data[i + 2] = 200; // B value
            this.imageData.data[i + 3] = 255; // A value
        }
        this.ctx.putImageData(this.imageData, 0, 0);
        this.drawGridOverlay();
    }
    redraw() {
        this.ctx.putImageData(this.imageData, 0, 0);
        this.drawGridOverlay();
    }
    resize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.imageData = this.ctx.createImageData(this.width, this.height); // Update the imageData dimensions
        this.redraw();
    }
    setData(data) {
        this.imageData.data.set(data);
        this.ctx.putImageData(this.imageData, 0, 0);
    }
    // Draw a grid overlay for visualization
    drawGridOverlay() {
        for (let x = 0; x <= this.width; x += this.pixelSize) {
            for (let y = 0; y <= this.height; y += this.pixelSize) {
                this.ctx.strokeStyle = '#ddd';  // Light gray color
                this.ctx.strokeRect(x, y, this.pixelSize, this.pixelSize);
            }
        }
    }
    // Show pixel information on mouse hover this is for development purposes only comment this on production
    showPixelInfo(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / this.pixelSize);
        const y = Math.floor((e.clientY - rect.top) / this.pixelSize);
        const pixel = this.getPixel(x, y);

        // Here, you can display the (x, y) and color value somewhere on the UI.
        console.log(`Pixel(${x}, ${y}): RGB(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`);
    }
    getPixel(x, y) {
        const index = (y * this.width + x) * 4;
        return [
            this.imageData.data[index],
            this.imageData.data[index + 1],
            this.imageData.data[index + 2],
            this.imageData.data[index + 3]
        ];
    }

    setPixel(x, y, [r, g, b, a]) {
        const index = (y * this.width + x) * 4;
        this.imageData.data[index] = r;
        this.imageData.data[index + 1] = g;
        this.imageData.data[index + 2] = b;
        this.imageData.data[index + 3] = a;
        // Update the canvas with the modified image data
        this.ctx.putImageData(this.imageData, 0, 0);
    }

    updateImageData() {
        this.imageData = this.ctx.getImageData(0, 0, this.width, this.height);
    }
}

// Register the custom element
customElements.define('pixel-grid', PixelGrid);
export default PixelGrid;
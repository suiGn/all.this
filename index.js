//imports
const { exec } = require("child_process");
const path = require("path");
const crypto = require('crypto');
const fs = require('fs');
const args = process.argv.slice(2);
const os = require('os');
const axios = require('axios');

//all this
const _this = {
    "all.this": {
      url: "https://www.npmjs.com/package/all.this",
      type: "State Control",
      repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
    "be.this": {
      url: "https://www.npmjs.com/package/be.this",
      type: "State Control",
      repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
    "this.be": {
      url: "https://www.npmjs.com/package/this.be",
      type: "State Control",
      repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/this.be.git"
        }
    },
    "this.atom": {
      url: "https://www.npmjs.com/package/this.atom",
      type: "Interfaces and Data Structure",
      repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/this.atom.git"
        }
    },
    "this.audio": {
      url: "https://www.npmjs.com/package/this.audio",
      type: "Interfaces and Data Structure",
      repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/this.audio.git"
        }
    },
    "this.me": {
        url: "https://www.npmjs.com/package/this.me",
        type: "Relationships",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/this.me.git"
        }
    },
      "cleaker": {
        url: "https://www.npmjs.com/package/cleaker",
        type: "Relationships",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/cleaker.git"
        }
    },
      "i.mlearning": {
        url: "https://www.npmjs.com/package/i.mlearning",
        type: "Interfaces and Data Structure",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/i.mlearning.git"
        }
    },
      "netget": {
        url: "https://www.npmjs.com/package/netget",
        type: "network and storage",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/netget.git"
        }
    },
      "neurons.me": {
        url: "https://www.npmjs.com/package/neurons.me",
        type: "deep learning",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "this.dom": {
        url: "https://www.npmjs.com/package/this.dom",
        type: "Interfaces and Data Structure",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "this.haiku": {
        url: "https://www.npmjs.com/package/this.haiku",
        type: "Relationships",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "this.img": {
        url: "https://www.npmjs.com/package/this.img",
        type: "Interfaces and Data Structure",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "this.pixel": {
        url: "https://www.npmjs.com/package/this.pixel",
        type: "Interfaces and Data Structure",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "this.pixelgrid": {
        url: "https://www.npmjs.com/package/this.pixelgrid",
        type: "Interfaces and Data Structure",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "this.text": {
        url: "https://www.npmjs.com/package/this.text",
        type: "Interfaces and Data Structure",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "this.video": {
        url: "https://www.npmjs.com/package/this.video",
        type: "Interfaces and Data Structure",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "this.wallet": {
        url: "https://www.npmjs.com/package/this.wallet",
        type: "Relationships",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "v.path": {
        url: "https://www.npmjs.com/package/v.path",
        type: "network and storage",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
      "tetragrammaton": {
        url: "https://www.npmjs.com/package/tetragrammaton",
        type: "Relationships",
        repository: {
            "type": "git",
            "url": "git+https://github.com/suiGn/be.this.git"
        }
    },
  };

  async function getLatestVersion(packageName) {
    try {
        const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
        return response.data['dist-tags'].latest;
    } catch (error) {
        console.error(`Failed to fetch latest version for ${packageName}: ${error.message}`);
        return null;
    }
}

async function isPackageInstalled(packageName) {
    return fs.existsSync(path.join(__dirname, '..', packageName));
}

async function getLockedVersion(packageName) {
    const packageLockPath = path.join(__dirname, 'package-lock.json');
    const packageJsonPath = path.join(__dirname, 'package.json');
    let result = {
        packageLockVersion: null,
        packageJsonVersion: null
    };

    // Check package-lock.json
    if (fs.existsSync(packageLockPath)) {
        try {
            const packageLock = require(packageLockPath);
            result.packageLockVersion = packageLock.dependencies && packageLock.dependencies[packageName] && packageLock.dependencies[packageName].version;
        } catch (error) {
            console.error(`Failed to fetch locked version from package-lock.json for ${packageName}: ${error.message}`);
        }
    }

    // Check package.json
    if (fs.existsSync(packageJsonPath)) {
        try {
            const packageJson = require(packageJsonPath);
            result.packageJsonVersion = (packageJson.dependencies && packageJson.dependencies[packageName]) || 
                                        (packageJson.devDependencies && packageJson.devDependencies[packageName]);
        } catch (error) {
            console.error(`Failed to fetch desired version from package.json for ${packageName}: ${error.message}`);
        }
    }

    return result;
}


async function main() {
    for (const [packageName, packageInfo] of Object.entries(_this)) {
        const latestVersion = await getLatestVersion(packageName);
        const versions = await getLockedVersion(packageName);
        const installed = await isPackageInstalled(packageName);

        console.log(`\x1b[1m\x1b[34mPackage: ${packageName}\x1b[0m\n`);
        console.log(`  - Installed: ${installed}`);
        if (latestVersion) {
            console.log(`  - Latest npm version: ${latestVersion}`);
        }
        if (versions.packageLockVersion) {
            console.log(`  - Package-Locked version: ${versions.packageLockVersion}`);
        } else {
            console.log(`  - Package-Locked version: (not found)`);
        }
        if (versions.packageJsonVersion) {
            console.log(`  - Package.json: ${versions.packageJsonVersion}`);
        }
        console.log(`  - NPM URL: ${packageInfo.url}`);
        console.log(""); // An extra line for separation
    }
}

main();
/*
// plug all.this into neurons.me
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
*/
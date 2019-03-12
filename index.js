#!/usr/bin/env node

const {exec} = require('child_process');

exec('npm bin', {cwd: __dirname}, (err, stdout, stderr) => {
  exec(`rm ${process.cwd()}/src/App.css ${process.cwd()}/src/App.test.js ${process.cwd()}/src/index.css ${process.cwd()}/src/logo.svg ${process.cwd()}/src/serviceWorker.js ${process.cwd()}/src/index.js ${process.cwd()}/src/App.js && echo "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nReactDOM.render(<App />, document.getElementById('root'));" > ${process.cwd()}/src/index.js && echo "import React, { Component } from 'react';\nclass App extends Component {\n  render() {\n    return (\n      <h1>Hello World</h1>\n    );\n  }\n}\nexport default App;" > ${process.cwd()}/src/App.js`, {cwd: __dirname}, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
    } else {
        console.log('🚀');
    }
  })
});
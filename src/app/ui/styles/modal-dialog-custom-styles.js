var csjs = require('csjs-inject')

var css = csjs`
  .prompt_text {
    width: 300px;
  }
  .crow {
    margin-top: .5em;
    display: flex;
    align-items: center;
    width: 500px;
  }
`

module.exports = css

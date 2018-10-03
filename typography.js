const fs = require('fs')
const Typography = require('typography')
const sterngroveTheme = require('typography-theme-stern-grove')

const typography = new Typography(sterngroveTheme)

fs.writeFileSync('./themes/personal/static/css/typography.css', typography.toString())
const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

const version = require('../package.json').version

const output = fs.createWriteStream(path.join(__dirname, '..', 'dist', 'love2d-test-' + version + '.love'))
const archive = archiver('zip')

archive.pipe(output)
archive.directory(path.join(__dirname, '..', 'src'), false)
archive.finalize()

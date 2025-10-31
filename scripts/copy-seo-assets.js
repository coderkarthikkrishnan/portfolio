/* eslint-env node */
/* global process */
import fs from 'fs'
import path from 'path'

// Use current working directory as project root to avoid URL pathname quirks on Windows
const root = path.resolve(process.cwd())
const src = path.join(root, 'src', 'assets', 'img200.jpeg')
const publicDir = path.join(root, 'public')

const copies = [
    { from: src, to: path.join(publicDir, 'favicon.jpeg') },
    { from: src, to: path.join(publicDir, 'og-image.jpeg') }
]

for (const { from, to } of copies) {
    try {
        fs.copyFileSync(from, to)
        console.log(`Copied ${from} -> ${to}`)
    } catch (err) {
        console.error(`Failed to copy ${from} -> ${to}:`, err.message)
        process.exitCode = 1
    }
}

console.log('SEO asset copy complete.')

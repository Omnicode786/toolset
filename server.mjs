import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, resolve } from 'node:path'

const root = resolve(process.cwd())
const port = Number(process.env.PORT || 4173)
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
    const cleanPath = urlPath === '/' ? '/index.html' : urlPath
    let filePath = join(root, cleanPath)
    if (!filePath.startsWith(root)) throw new Error('Invalid path')

    try {
      const info = await stat(filePath)
      if (info.isDirectory()) filePath = join(filePath, 'index.html')
    } catch {
      filePath = join(root, 'index.html')
    }

    const content = await readFile(filePath)
    res.writeHead(200, { 'Content-Type': types[extname(filePath)] || 'application/octet-stream' })
    res.end(content)
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end(`Server error: ${error.message}`)
  }
}).listen(port, () => {
  console.log(`Tool Set site running at http://localhost:${port}`)
})

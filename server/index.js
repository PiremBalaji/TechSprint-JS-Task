import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

const eventsFilePath = path.join(__dirname, 'events.json')

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.get('/api/events', (_req, res) => {
  try {
    if (!fs.existsSync(eventsFilePath)) {
      const seed = [
        {
          name: 'TechSprint 2025',
          description: 'A 24-hour hackathon focusing on AI and web development.',
          date: '2025-09-15',
        },
        {
          name: 'Frontend Fiesta',
          description: 'A mini conf to explore modern UI frameworks and design systems.',
          date: '2025-10-01',
        },
        {
          name: 'Cloud Camp',
          description: 'Hands-on workshop on serverless and cloud-native patterns.',
          date: '2025-11-12',
        },
      ]
      fs.writeFileSync(eventsFilePath, JSON.stringify(seed, null, 2))
    }
    const data = JSON.parse(fs.readFileSync(eventsFilePath, 'utf-8'))
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to read events' })
  }
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})



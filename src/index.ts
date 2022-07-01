import express, { Request as ExpressRequest, Response } from 'express'
import 'dotenv/config'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by').disable('etag')


app.get('/', async (_req: ExpressRequest, res: Response) => {
  res.send('Hello World!')
})

app.listen(process.env['PORT'] || 3333, () => {
  console.log(`Server listening on port ${3333}`)
})
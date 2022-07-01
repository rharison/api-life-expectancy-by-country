import express, { Request as ExpressRequest, Response } from 'express'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by').disable('etag')
app.listen(3333, () => {
  console.log(`Server listening on port ${3333}`)
})

app.get('/', async (_req: ExpressRequest, res: Response) => {
  res.send('Hello World!')
})
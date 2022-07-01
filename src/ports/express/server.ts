import express, { Request as ExpressRequest, Response } from 'express'

import { findBySingleCountry } from '../adapters/http/modules/find-by-single-coutry';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by').disable('etag')

app.get('/country/:country', async (req: ExpressRequest, res: Response) => {
  const { country }  = req.params;

  if(!country) {
   return res.status(400).send('Please provide a country.');
  }

  const result = findBySingleCountry(country)

  if(!result) {
    return res.status(404).send('Sorry :(, the country entered does not exist in our database.');
  }

  return res.status(200).send({ result })
})

export function start () {
  app.listen(process.env['PORT'] || 3333, () => {
    console.log(`Server listening on port ${3333}`)
  })
}
import { setTimeout } from 'node:timers/promises'

import data from '../data.json'

export async function GET() {
  setTimeout(2000)

  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}

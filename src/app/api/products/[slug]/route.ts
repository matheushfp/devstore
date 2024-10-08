import { setTimeout } from 'node:timers/promises'

import { z } from 'zod'

import data from '../data.json'

export async function GET(
  request: Request,
  context: { params: { slug: string } },
) {
  await setTimeout(1000)

  const { params } = context
  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }

  return Response.json(product)
}

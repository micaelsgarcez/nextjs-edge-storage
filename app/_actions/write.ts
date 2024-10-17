'use server'

import { revalidatePath } from 'next/cache'

type Values = {
  text: string
}

export const WriteEdge = async ({ text }: Values) => {
  try {
    const updateEdgeConfig = await fetch(
      `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items?teamId=${process.env.TEAM_ID}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: [
            {
              operation: 'upsert',
              key: 'greeting',
              value: text
            }
          ]
        })
      }
    )
    const result = await updateEdgeConfig.json()
    console.log(result)
    revalidatePath('/', 'page')
    return { ok: true }
  } catch (error) {
    console.log(error)
  }
}

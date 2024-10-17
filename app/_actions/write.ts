'use server'

export const WriteEdge = async () => {
  try {
    const updateEdgeConfig = await fetch(
      `https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: [
            {
              operation: 'create',
              key: 'example_key_1',
              value: 'example_value_1'
            },
            {
              operation: 'update',
              key: 'example_key_2',
              value: 'new_value'
            }
          ]
        })
      }
    )
    const result = await updateEdgeConfig.json()
    console.log(result)
    return { ok: true }
  } catch (error) {
    console.log(error)
  }
}

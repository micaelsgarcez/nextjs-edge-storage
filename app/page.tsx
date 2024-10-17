import { get } from '@vercel/edge-config'
import { Form } from './_components/form'

export default async function Home() {
  const dateNow = new Date()
  console.log('dateNow :', dateNow)
  console.log(dateNow.getMinutes(), ':', dateNow.getSeconds())
  const value = await get('greeting')
  const newDateNow = new Date()
  console.log(newDateNow.getMinutes(), ':', newDateNow.getSeconds())

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <div>
          <Form />
        </div>
        <div className='max-w-lg overflow-hidden break-all'>
          {JSON.stringify(value) as string}
        </div>
      </main>
    </div>
  )
}

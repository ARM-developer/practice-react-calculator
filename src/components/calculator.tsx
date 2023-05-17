import { ReactElement, useEffect, useState } from 'react'
import { evaluate } from 'mathjs'
interface itemRow {
  id: string
  type: string
}

interface rowsItems extends Array<itemRow> {}

export const rows: rowsItems[] = [
  [
    { id: 'AC', type: 'reset' },
    { id: '⬅️', type: 'deleted' },
    { id: '%', type: 'operator' },
    { id: '/', type: 'operator' }
  ],
  [
    { id: '7', type: 'number' },
    { id: '8', type: 'number' },
    { id: '9', type: 'number' },
    { id: '*', type: 'operator' }
  ],
  [
    { id: '4', type: 'number' },
    { id: '5', type: 'number' },
    { id: '6', type: 'number' },
    { id: '-', type: 'operator' }
  ],
  [
    { id: '1', type: 'number' },
    { id: '2', type: 'number' },
    { id: '3', type: 'number' },
    { id: '+', type: 'operator' }
  ],
  [
    { id: '0', type: 'number' },
    { id: '.', type: 'dot' },
    { id: '=', type: 'equal' }
  ]
]

export const Calculator = (): ReactElement => {
  const [value, setValue] = useState('')

  const [lastPress, setLastPress] = useState('')

  useEffect(() => {
    console.log('mounted')
  }, [])

  useEffect(() => {
    console.log('other mount')
  })

  const funtionsForType: any = {
    number: (item: itemRow) => {
      setLastPress(item.type)
      setValue(value.concat(item.id))
    },
    operator: (item: itemRow) => {
      setValue(value.concat(item.id))
    },
    equal: (item: itemRow) => {
      setValue(String(evaluate(value)))
    },
    reset: () => {
      setLastPress('')
      setValue('')
    },
    deleted: () => {
      setValue(value.slice(0, -1))
    }
  }

  const createHandleClick = (item: itemRow) => () =>
    funtionsForType[item.type](item)

  return (
    <section>
      <h1 className="mb-2 text-3xl">Calculator</h1>
      <input
        className="b mt-1 mb-3 w-full bg-slate-400 px-3 text-right text-white focus:border-none focus:outline-none active:border-none active:outline-none"
        value={value}
        readOnly
      />
      <div role="grid">
        {rows.map((row, index) => (
          <div key={index} role="row" className="flex max-w-full bg-slate-500">
            {row.map((item) => (
              <button
                className="flex flex-1 justify-center bg-slate-500 py-2 px-5 hover:bg-slate-700"
                onClick={createHandleClick(item)}
                key={item.id}>
                {item.id}
              </button>
            ))}
          </div>
        ))}
      </div>

      {lastPress}
    </section>
  )
}

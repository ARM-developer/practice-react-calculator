import { ReactElement } from 'react'
import { Calculator } from '../components/calculator'

function Home(): ReactElement {
  return (
    <div className="flex min-h-screen flex-col place-items-center justify-center text-center font-sans text-base font-normal text-white">
      <Calculator />
    </div>
  )
}

export default Home

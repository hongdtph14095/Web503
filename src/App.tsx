import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import ShowInfo from './cotrollers/ShowInfo';
import type {ProductType} from './types/product'
function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "Dún",
    age: 21
  });

  return (
    <div>
      <ShowInfo info={info}/>
    </div>
  )
}

export default App

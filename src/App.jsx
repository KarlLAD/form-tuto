import { Route, Routes } from 'react-router-dom'
import './App.css'
import InputForm from './common/InputForm'
import SelectBox from './common/SelectBox'
import CheckBox from './common/CheckBox'
import Multiple from './common/Multiple'

import MyForm from './common/MyForm'
import Uncontrolled from './common/Uncontrolled'

export default function App() {
  return (
    <div>

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <br/>  <br/>  <br/>
    <Routes>

        <Route path='/' element={<InputForm/>} />
        <Route path='/selectbox' element={<SelectBox/>} />
        <Route path='/checkbox' element={<CheckBox/>} />
        <Route path='/multiple' element={<Multiple/>} />
        <Route path='/myform' element={<MyForm/>} />
        <Route path='/uncontrolled' element={<Uncontrolled/>}  />



    </Routes>

    </div>
  )
}
import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from "../context/Context"


const Main = () => {
  const app = useContext(AppContext)

  return (
    <>
      <div className=' bg-color2 min-h-screen'>
        <div className=' flex  justify-end'>
          <button> &deg;C </button>
          <button> &deg;F </button>
        </div>
      </div>
    </>
  )
}

export default Main
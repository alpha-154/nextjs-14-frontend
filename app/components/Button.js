'use client'
import React from 'react'

function Button() {
  return (
    <button
    className="bg-green-600 rounded-sm px-4 py-1 mt-5"
    onClick={() => console.log("clicked here")}
  >
    click here
  </button>
  )
}

export default Button

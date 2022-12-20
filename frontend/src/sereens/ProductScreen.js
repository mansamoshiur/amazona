import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductScreen() {
    const prams = useParams()
    const {slug} =prams;
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}

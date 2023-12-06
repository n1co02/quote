'use client'
// This would be a Client Component
// components/ClientSideComponent.js
import React, { useState } from 'react'
export default function LoginPage() {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return <button onClick={handleClick}>add data to firestore</button>
}

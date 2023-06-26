import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    const [searchparam]=useSearchParams();
    console.log('searchparam',searchparam.getAll('id'),searchparam.getAll('name'));
  return (
    <div>
      Home
    </div>
  )
}

export default Home

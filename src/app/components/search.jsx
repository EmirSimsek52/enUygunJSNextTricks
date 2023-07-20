"use client"
import React,{useState} from 'react'
import styles from 'styles/styles.module.css'
import { useRouter } from 'next/navigation'
const Search = () => {
  const [keyword , setKeyword] = useState('')
  const router = useRouter();

  return (
    <div>
      <input 
      onKeyDown={searchFunc} 
      onChange={e=> setKeyword(e.target.value)} 
      placeholder='Search' 
      className={styles.search} />
          
    </div>
  )
}

export default Search
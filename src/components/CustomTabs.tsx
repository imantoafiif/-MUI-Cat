import { Tab, Tabs } from '@mui/material'
import React from 'react'

interface props {
  tabs: string[],
  value: string,
  color: "secondary" | "primary" | "inherit" | undefined,
  setTabs: React.Dispatch<React.SetStateAction<string>>
}

const CustomTabs = ({ tabs, value, color, setTabs }: props) => {

  const handleChange = (e: React.SyntheticEvent, v: string) => {
    setTabs(v)
  }

  return (
    <Tabs 
      value={value}
      textColor={color}
      onChange={handleChange}
      aria-label='main tabs'>
      {
        tabs.map((item:string) => (
          <Tab
            key={item} 
            value={item} 
            label={item} />
        ))
      }
    </Tabs>
  )

}

export default CustomTabs
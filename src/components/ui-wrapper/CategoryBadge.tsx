import React from 'react'
import { Button } from '../ui/button'

function CategoryBadge({name, onClick, isActive}: {name: string, onClick: () => void, isActive: boolean}) {
  return (
    <Button onClick={onClick} variant={isActive ? "default" : 'outline'} className={`px-2 py-1 m-1 rounded-full ${isActive && 'border-1 border-secondary'}`} >
        {name}
    </Button>
  )
}

export default CategoryBadge

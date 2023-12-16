import React, { useEffect, useState, useRef } from 'react'
import { FilterMenuContainer } from './FilterMenuStyles'
import { FilterMethod } from 'data/find-job/jobFilterData'
import { useAuth } from 'hooks/useAuthProvider'

interface MenuTypes {
  location: {
    center: number
    bottom: number
  }
  page: FilterMethod
}

const FilterMenu = ({ location, page }: MenuTypes) => {
  const container = useRef<HTMLDivElement>(null)
  const { center, bottom } = location
  const { filters, handleFilterChange } = useAuth()

  useEffect(() => {
    const submenu = container.current
    if (submenu) {
      submenu.style.left = `${center}px`
      submenu.style.top = `${bottom}px`
    }
  }, [location])

  //onMouseLeave={() => setIsFilterOpen(false)}

  const isChecked = (value: string, id: string) => {
    return filters[id].includes(value)
  }

  const onCheckboxChange = (value: string, id: string) => {
    handleFilterChange(id, value)
  }

  return (
    <FilterMenuContainer ref={container}>
      {page.checkmark.map((box, index) => {
        return (
          <label>
            <input
              type='checkbox'
              name={box.id}
              id={box.id}
              checked={isChecked(box.value, box.id)}
              onChange={() => onCheckboxChange(box.value, box.id)}
            />
            {box.label}
          </label>
        )
      })}
    </FilterMenuContainer>
  )
}

export default FilterMenu

import React, { useState, useEffect } from 'react'
import { useAuth } from 'hooks/useAuthProvider'
import { CustomBtn } from 'styles/globalStyles'
import {
  jobFilterData,
  filterComponentData,
  FilterMethod,
} from 'data/find-job/jobFilterData'

import FilterMenu from '../FilterMenu/FilterMenu'
import { SingleJobTypes } from 'types/jobTypes'

//Styled-Components
import {
  FilterBtn,
  FilterBtnLists,
  FilterContainer,
  FilterSection,
} from './FilteringBtnsStyle'

interface Props {
  filterJobs: () => void
}

const FilteringBtns = ({ filterJobs }: Props) => {
  // const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [location, setLocation] = useState(
    {} as { center: number; bottom: number }
  )
  const [page, setPage] = useState({} as FilterMethod)

  const { activePopup, handleActivePopup, setFilters } = useAuth()

  const displayFilterMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement // Casting to HTMLElement

    if (target.tagName.toLowerCase() === 'li') {
      const textContent = target.textContent
      const filterBtn = target.getBoundingClientRect()
      const center = (filterBtn.left + filterBtn.right) / 2 - 50
      const bottom = filterBtn.bottom - 3
      const filterContent = filterComponentData.find(
        (content) => content.type === textContent
      )

      if (filterContent) {
        setPage(filterContent)
        setLocation({ center, bottom })
        // setIsFilterOpen(true)
        handleActivePopup('filter')
      }
    }
  }

  const handlejobFiltering = () => {
    filterJobs()
    setFilters({
      workType: [],
      employmentType: [],
      pay: [],
      experienceLevel: [],
      // Initialize other filters
    })
  }

  return (
    <FilterSection>
      <FilterContainer>
        <FilterBtnLists>
          {jobFilterData.map((data, index) => {
            return (
              <FilterBtn key={index} onClick={displayFilterMenu}>
                <i className={data.icon}></i>
                {data.label}
              </FilterBtn>
            )
          })}
        </FilterBtnLists>
        <CustomBtn type='button' onClick={handlejobFiltering}>
          Search Jobs
        </CustomBtn>
      </FilterContainer>

      {activePopup === 'filter' && (
        <FilterMenu location={location} page={page} />
      )}
    </FilterSection>
  )
}

export default FilteringBtns

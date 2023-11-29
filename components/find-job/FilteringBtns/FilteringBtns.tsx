import React from 'react'
import { CustomBtn } from 'styles/globalStyles'
import { jobFilterData } from 'data/find-job/jobFilterData'

//Styled-Components
import {
  FilterBtn,
  FilterBtnLists,
  FilterContainer,
  FilterSection,
} from './FilteringBtnsStyle'

type Props = {}

const FilteringBtns = (props: Props) => {
  return (
    <FilterSection>
      <FilterContainer>
        <FilterBtnLists>
          {jobFilterData.map((data, index) => {
            return (
              <FilterBtn key={index}>
                <i className={data.icon}></i>
                {data.label}
              </FilterBtn>
            )
          })}
        </FilterBtnLists>
        <CustomBtn type='submit'>Search Jobs</CustomBtn>
      </FilterContainer>
    </FilterSection>
  )
}

export default FilteringBtns

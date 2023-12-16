export const jobFilterData = [
  {
    icon: 'fa-regular fa-location-dot',
    label: 'Lagos, Nigeria',
  },
  {
    icon: 'fa-solid fa-chevron-down',
    label: 'Job method',
  },
  {
    icon: 'fa-solid fa-chevron-down',
    label: 'Job type',
  },
  {
    icon: 'fa-solid fa-chevron-down',
    label: 'Salary range',
  },
  {
    icon: 'fa-solid fa-chevron-down',
    label: 'Experience level',
  },
]

export const filterComponentData = [
  {
    type: 'Job method',
    checkmark: [
      {
        value: 'remote',
        label: 'Remote',
        id: 'workType',
      },
      {
        value: 'onsite',
        label: 'On-site',
        id: 'workType',
      },
      {
        value: 'hybrid',
        label: 'Hybrid',
        id: 'workType',
      },
    ],
  },

  {
    type: 'Job type',

    checkmark: [
      {
        value: 'full-time',
        label: 'Full Time',
        id: 'employmentType',
      },
      {
        value: 'part-time',
        label: 'PartTime',
        id: 'employmentType',
      },
      {
        value: 'internship',
        label: 'Internship',
        id: 'employmentType',
      },
      {
        value: 'contract',
        label: 'Contract',
        id: 'employmentType',
      },
    ],
  },

  {
    type: 'Salary range',
    checkmark: [
      {
        value: '1000',
        label: '$0 - $100',
        id: 'pay',
      },
      {
        value: '5000',
        label: '$1000 - $5000',
        id: 'pay',
      },
      {
        value: '10000',
        label: '$10000 - above',
        id: 'pay',
      },
    ],
  },

  {
    type: 'Experience level',

    checkmark: [
      {
        value: 'junior',
        label: 'Entry/Junior',
        id: 'experienceLevel',
      },
      {
        value: 'senior',
        label: 'Senior level',
        id: 'experienceLevel',
      },
    ],
  },
]

interface Checkmark {
  value: string
  label: string
  id: string
}

export interface FilterMethod {
  type: string

  checkmark: Checkmark[]
}

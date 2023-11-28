import React from 'react'

type Props = {}

const DeleteAccount = (props: Props) => {
  return (
    <div>
      <div>
        <h2>Delete Account</h2>
        <span>
          <i className='fa-regular fa-chevron-up'></i>
        </span>
      </div>
      <div>
        <button type='submit'>Delete account</button>
      </div>
    </div>
  )
}

export default DeleteAccount

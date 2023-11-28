import React from 'react'
import { CustomBtn } from 'styles/globalStyles'

type Props = {}

const ChangePassword = (props: Props) => {
  return (
    <div>
      <div>
        <h2>Change Password</h2>
        <span>
          <i className='fa-regular fa-chevron-up'></i>
        </span>
      </div>

      <form>
        <div>
          <label>Current Password</label>
          <input
            type='password'
            name='oldPassword'
            id='oldPassword'
            placeholder='Enter Current Password'
            required
          />
        </div>

        <div>
          <label>New Password</label>
          <input
            type='password'
            name='newPassword'
            id='newPassword'
            placeholder='Enter New Password'
            required
          />
        </div>

        <div>
          <CustomBtn
            type='submit'
            bgColor='var(--color-bg-100)'
            textColor='var(--color-font-400)'
          >
            Cancel
          </CustomBtn>
          <CustomBtn type='submit'>Save</CustomBtn>
        </div>
      </form>
    </div>
  )
}

export default ChangePassword

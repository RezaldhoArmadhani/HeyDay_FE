import AuthLayout from '@/Components/LayoutAuth'
import InputFormAuth from '@/Components/Form/InputFormAuth'
import React from 'react'

const ResetPassword = () => {
  return (
    <AuthLayout title="Reset password" description="Enter your user account's verified email address and we will send you a password reset link.
    "> 
        <InputFormAuth
                title="Code 6 Digit"
                name="reset-password"
                type="text"
        />
        <div class="d-grid mb-2 mt-3">
                <button class={`btn ${style.btn} text-light}`} type="button">Reset Password</button>
        </div>
    </AuthLayout>
  )

}

export default ResetPassword
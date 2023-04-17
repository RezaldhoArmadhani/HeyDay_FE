import AuthLayout from '@/Components/LayoutAuth'
import InputFormAuth from '@/Components/Form/InputFormAuth'
import style from '../../Components/LayoutAuth/style.module.css'

const ConfirmReset = () => {
  return (
    <AuthLayout title="Reset password" description="You need to change your password to activate your account">
      <InputFormAuth title="Create New Password" name="createNewPassword" type="password" />
      <InputFormAuth title="Confirm New Password" name="confirmNewPassword" type="password" />
      <div className="form-check mb-3 customCheck">
        <input className="form-check-input" type="checkbox" value="" id={style.flexCheckDefault} />
        <label className={`form-check-label ${style.formLabel}`} for={style.flexCheckDefault}>
          I agree to terms & conditions
        </label>
      </div>
      <div class="d-grid mb-2 mt-3">
        <button class={`btn ${style.btn} text-light`} type="button">
          Reset Password
        </button>
      </div>
    </AuthLayout>
  )
}

export default ConfirmReset
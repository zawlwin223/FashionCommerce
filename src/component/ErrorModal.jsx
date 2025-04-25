import '../style/errorModal.css'
import { useNavigate } from 'react-router-dom'

export default function ErrorModal({ title, message }) {
  console.log(message)
  const navigate = useNavigate()

  function closeModalHandler() {
    navigate(-1) // Go back or redirect as needed
  }

  return (
    <div className="error-modal-overlay">
      <div className="error-modal-box">
        <h2 className="error-modal-title">{title}</h2>
        <p className="error-modal-message">{message}</p>
        <button className="error-modal-btn" onClick={closeModalHandler}>
          OK
        </button>
      </div>
    </div>
  )
}

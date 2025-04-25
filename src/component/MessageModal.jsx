import { useState } from 'react'
import '../style/messageModal.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeCart, resetCart } from '../store/cartSlice'
export default function MessageModal({ title, message }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function resetPageHandler() {
    dispatch(resetCart())
    dispatch(closeCart())
    navigate('/')
  }
  return (
    <div className="message_modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <button className="modal-btn" onClick={resetPageHandler}>
          OK
        </button>
      </div>
    </div>
  )
}

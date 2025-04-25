import { Link } from 'react-router-dom'
import '../style/LinkButton.css'
export default function LinkButton({ children, path, halfWidth }) {
  return (
    <>
      <Link
        to={path}
        className="link"
        style={{ textDecoration: 'none', width: halfWidth ? '50%' : '100%' }}>
        {children}
      </Link>
    </>
  )
}

import '../style/LinkButton.css'
import LinkButton from './LinkButton'
import { useRouteLoaderData } from 'react-router-dom'
import { formatCurrency } from '../utils/currencyFormatter'

export default function Products({ products }) {
  console.log(products)
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="item_card">
            <img src={product.image} alt="" className="shop_img" />
            <div className="detail">
              <h3>{product.title}</h3>
              <p>{formatCurrency(product.price)}</p>

              <LinkButton path={`${product.id}`}>InStock</LinkButton>
            </div>
          </div>
        )
      })}
    </>
  )
}

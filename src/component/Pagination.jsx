import '../style/pagination.css'
export default function Pagination({
  totalPages,
  nextPage,
  prevPage,
  switchPage,
  currentPage,
}) {
  const clickButton = function (value) {
    if (value === '<') {
      prevPage()
    }
    if (value === '>') {
      nextPage()
    }

    if (typeof value === 'number') {
      switchPage(value)
    }
  }
  return (
    <div className="pagnination">
      <button onClick={() => clickButton('<')}>{'<'}</button>
      <div className="pagni_number">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={currentPage === index + 1 ? 'active' : ''}
            key={index + 1}
            onClick={() => clickButton(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <button onClick={() => clickButton('>')}>{'>'}</button>
    </div>
  )
}

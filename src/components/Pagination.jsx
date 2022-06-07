export function Pagination({ productsPerPage, totalProducts, paginate}) {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <div onClick={() => paginate(number)}>
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
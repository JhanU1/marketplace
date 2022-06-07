import styles from "./ProductSearch.module.css"
import { FaSearch } from "react-icons/fa"
import { useState } from "react"
import { useNavigate } from "react-router"

export function ProductSearch() {
    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/products?search=" + searchText)
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}

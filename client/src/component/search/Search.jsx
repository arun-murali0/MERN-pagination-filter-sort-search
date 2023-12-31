import styles from "./style.css";

const Search = ({ setSearch }) => {
	return (
		<input
			type="text"
			className={styles.search}
			placeholder="Search"
			onChange={({ currentTarget: input }) => setSearch(input.value)}
		/>
	);
};

export default Search;
import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Tile from "./Tile";
import Filter from "./Filter";

function App() {
	const [filtergreased, setFilterGreased] = useState(false)
	const [sort, setSort] = useState('None')

	const filterHogs = hogs.filter((pig)=> filtergreased ? pig.greased === true : true)
	.sort((a, b) => {
		if (sort === 'Name'){
			return a.name.localeCompare(b.name)
		}
		if (sort === 'Weight'){
			return a.weight - b.weight
		} else {
			return 0
		}
	})

	console.log(filterHogs)

	const hogTiles = filterHogs.map((item) => {
		return (
			<Tile hog={item}  />
		)
	})

	return (
		<div className="App">
			<Nav />
			<Filter isOn={filtergreased} setIsOn={setFilterGreased} setSort={setSort} />
			{hogTiles}
		</div>
	);
}

export default App;

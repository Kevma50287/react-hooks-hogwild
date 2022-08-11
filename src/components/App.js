import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Tile from "./Tile";
import Filter from "./Filter";
import Form from "./Form";

function App() {
	const [filtergreased, setFilterGreased] = useState(false)
	const [sort, setSort] = useState('None')
	const [mountForm, setMountForm] = useState(false)
	const [hoglist, setHogs] = useState(hogs)

	const filterHogs = hoglist.filter((pig) => filtergreased ? pig.greased === true : true)
		.sort((a, b) => {
			if (sort === 'Name') {
				return a.name.localeCompare(b.name)
			}
			if (sort === 'Weight') {
				return a.weight - b.weight
			} else {
				return 0
			}
		})

	const hogTiles = filterHogs.map((item) => {
		return (
			<Tile hog={item} />
		)
	})

	function handleSetHogs (obj){
		setHogs([...hoglist, obj])
	}

	return (
		<div className="App">
			<Nav />
			<button onClick={() => setMountForm(true)}>View Form</button>
			<button onClick={() => setMountForm(false)}>View Pigs</button>
			{!mountForm && <Filter isOn={filtergreased} setIsOn={setFilterGreased} setSort={setSort} />}
			{mountForm ? <Form setHogs={handleSetHogs} /> :  hogTiles }
			 
		</div>
	);
}

export default App;

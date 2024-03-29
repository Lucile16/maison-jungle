import plantList from '../data/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name.toUpperCase()}
                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        {plant.isBestSale && <span>🔥</span>}
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
                    </li>
				))}
			</ul>
		</div>
    )
}

export default ShoppingList
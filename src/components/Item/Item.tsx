import hamburgerIcon from '/icons/fast-food-burger.svg';
import cheeseBurgerIcon from '/icons/cheeseburger.svg';
import friesIcon from '/icons/french-fries.svg';
import teaIcon from '/icons/tea-cup.svg';
import colaIcon from '/icons/cola-cup-fastfood.svg';
import coffeeIcon from '/icons/coffee.svg';
import './Item.css';

interface IItemProps {
	itemName: string;
	price: number;
	onClick?: () => void;
}

const Item: React.FC<IItemProps> = ({ itemName, price, onClick }) => {
	return (
		<div onClick={onClick} className={'item'}>
			<img
				src={
					itemName === 'Cola'
						? colaIcon
						: itemName === 'Tea'
							? teaIcon
							: itemName === 'Coffee'
								? coffeeIcon
								: itemName === 'Fries'
									? friesIcon
									: itemName === 'Cheeseburger'
										? cheeseBurgerIcon
										: itemName === 'Hamburger'
											? hamburgerIcon
											: 'Invalid value'
				}
				alt={itemName}
			/>
			<div className='text'>
				<h4>{itemName}</h4>
				<p>Price: {price}KGS</p>
			</div>
		</div>
	);
};

export default Item;

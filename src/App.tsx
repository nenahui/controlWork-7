import './App.css';
import Container from './components/Container/Container';
import Item from './components/Item/Item';
import OrderItem from './components/OrderItem/OrderItem';

const App = () => {
	return (
		<>
			<Container name={'Order list'}>
				<OrderItem
					itemName={'Hamburger'}
					price={50}
					count={0}
					onClick={() => null}
				/>
				<OrderItem
					itemName={'Cheeseburger'}
					price={50}
					count={0}
					onClick={() => null}
				/>
				<OrderItem
					itemName={'Cola'}
					price={50}
					count={0}
					onClick={() => null}
				/>
			</Container>
			<Container name={'Add items'}>
				<div className={'items-block'}>
					<Item itemName={'Hamburger'} price={50} />
					<Item itemName={'Cheeseburger'} price={50} />
					<Item itemName={'Cola'} price={50} />
					<Item itemName={'Coffee'} price={50} />
					<Item itemName={'Tea'} price={50} />
					<Item itemName={'Fries'} price={50} />
				</div>
			</Container>
		</>
	);
};

export default App;

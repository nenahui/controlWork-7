import './App.css';
import Container from './components/Container/Container';
import Item from './components/Item/Item';

const App = () => {
	return (
		<>
			<Container name={'Order list'}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
					laboriosam maiores perferendis recusandae, sint tempora voluptas.
					Delectus eius laboriosam nisi?
				</p>
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

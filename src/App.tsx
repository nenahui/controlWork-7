import './App.css';
import Container from './components/Container/Container';
import Item from './components/Item/Item';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import OrderItem from './components/OrderItem/OrderItem';

interface IOrders {
	name: string;
	count: number;
	price: number;
	id: string;
}

const App = () => {
	const [orders, setOrders] = useState<IOrders[]>([
		{ name: 'Cheeseburger', count: 2, price: 280, id: nanoid() },
		{ name: 'Cola', count: 0, price: 75, id: nanoid() },
		{ name: 'Hamburger', count: 0, price: 260, id: nanoid() },
		{ name: 'Coffee', count: 3, price: 180, id: nanoid() },
		{ name: 'Fries', count: 0, price: 120, id: nanoid() },
		{ name: 'Tea', count: 5, price: 50, id: nanoid() },
	]);

	const itemList = orders.map((item) => (
		<Item key={item.id} itemName={item.name} price={item.price} />
	));

	const orderList = orders.map((item) =>
		item.count > 0 ? (
			<OrderItem
				key={item.id}
				itemName={item.name}
				count={item.count}
				price={item.price * item.count}
			/>
		) : null,
	);

	return (
		<>
			<Container name={'order details'}>{orderList}</Container>
			<Container name={'add items'}>
				<div className={'items-block'}>{itemList}</div>
			</Container>
		</>
	);
};

export default App;

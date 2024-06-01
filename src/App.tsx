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
		{ name: 'Cheeseburger', count: 0, price: 280, id: nanoid() },
		{ name: 'Cola', count: 0, price: 75, id: nanoid() },
		{ name: 'Hamburger', count: 0, price: 260, id: nanoid() },
		{ name: 'Coffee', count: 0, price: 180, id: nanoid() },
		{ name: 'Fries', count: 0, price: 120, id: nanoid() },
		{ name: 'Tea', count: 0, price: 50, id: nanoid() },
	]);

	const addItems = (id: string) => {
		setOrders((prevState) =>
			prevState.map((item) =>
				item.id === id ? { ...item, count: item.count + 1 } : item,
			),
		);
	};

	const deleteItems = (id: string) => {
		setOrders((prevState) =>
			prevState.map((item) =>
				item.id === id
					? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
					: item,
			),
		);
	};

	const totalPrice = orders.reduce(
		(acc, num) => acc + num.count * num.price,
		0,
	);

	const itemList = orders.map((item) => (
		<Item
			key={item.id}
			itemName={item.name}
			price={item.price}
			onClick={() => addItems(item.id)}
		/>
	));

	const orderList = orders.map((item) =>
		item.count > 0 ? (
			<OrderItem
				key={item.id}
				itemName={item.name}
				count={item.count}
				price={item.price * item.count}
				onClick={() => deleteItems(item.id)}
			/>
		) : null,
	);

	const filteredOrders = orders.filter((item) => item.count > 0);
	const orderCount = filteredOrders.length > 0;

	return (
		<>
			<Container name={'order details'}>
				{orderCount ? (
					<>
						{orderList}
						<p className={'total-price'}>Total price: {totalPrice} KGS</p>
					</>
				) : (
					<div>
						Order is empty! <p>Please add some items!</p>
					</div>
				)}
			</Container>
			<Container name={'add items'}>
				<div className={'items-block'}>{itemList}</div>
			</Container>
		</>
	);
};

export default App;

import './OrderItem.css';
import React from 'react';

interface IOrderItemProps {
	itemName: string;
	count: number;
	price: number;
	onClick: () => void;
}

const OrderItem: React.FC<IOrderItemProps> = ({
	itemName,
	count,
	price,
	onClick,
}) => {
	return (
		<div className={'order-item-block'}>
			<h4>{itemName}</h4>
			<div className={'order-item-info'}>
				<p>x {count}</p>
				<span>{price} KGS</span>
				<button onClick={onClick} className={'delete-btn'}>
					&nbsp;
				</button>
			</div>
		</div>
	);
};

export default OrderItem;

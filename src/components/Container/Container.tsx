import { PropsWithChildren } from 'react';
import './Container.css';

interface IContainerProps extends PropsWithChildren {
	name: string;
}

const Container: React.FC<IContainerProps> = ({ name, children }) => {
	return (
		<div className={'container'}>
			<p className={'container-name'}>{name}</p>
			{children}
		</div>
	);
};

export default Container;

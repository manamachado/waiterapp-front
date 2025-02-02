import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
	{
		_id: '6790f621dfbacc0fd6a0ed42',
		table: '123',
		status: 'IN_PRODUCTION',
		products: [
			{
				product: {
					name: 'Pizza quatro queijos',
					imagePath: '1737550991828-quatro-queijos.png',
					price: 40,
				},
				quantity: 3,
				_id: '6790f621dfbacc0fd6a0ed43',
			},
			{
				product: {
					name: 'Coca cola',
					imagePath: '1737551616153-coca-cola.png',
					price: 7,
				},
				quantity: 2,
				_id: '6790f621dfbacc0fd6a0ed44',
			},
		],
	},
];

export function Orders() {
	return (
		<Container>
			<OrdersBoard icon="🕐" title="Fila de espera" orders={orders} />
			<OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
			<OrdersBoard icon="✅" title="Pronto!" orders={[]} />
		</Container>
	);
}

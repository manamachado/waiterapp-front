import closeIcon from '../../assets/images/close-icon.svg';
import { ModalBody, Overlay } from './styles';

interface OrderModalProps {
	visible: boolean;
}

export function OrderModal({ visible }: OrderModalProps) {
	if (!visible) {
		return null;
	}

	return (
		<Overlay>
			<ModalBody>
				<header>
					<strong>Mesa 2</strong>
					<button type="button">
						<img src={closeIcon} alt="Fechar" />
					</button>
				</header>

				<div className="status-container">
					<small>Status do pedido</small>
					<div>
						<span>🕐</span>
						<strong>Fila de espera</strong>
					</div>
				</div>
			</ModalBody>
		</Overlay>
	);
}

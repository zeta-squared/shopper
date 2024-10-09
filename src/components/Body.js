import FlashMessage from './FlashMessage';

export default function Body({ children }) {
	return (
		<>
		<div className="d-flex justify-content-center FlashArea">
			<FlashMessage />
		</div>
		<div className="d-flex justify-content-center ContentArea">
			{children}
		</div>
		</>
	);
}

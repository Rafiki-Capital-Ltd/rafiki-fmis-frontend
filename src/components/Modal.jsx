import { Dialog } from 'primereact/dialog';
import { useEffect } from 'react';
import { useState } from 'react';

export function Modal({ visible, setVisible, children }) {
	const [_visible, _setVisible] = useState(visible);

	useEffect(() => {
		_setVisible(visible);
	}, [visible]);

	return (
		<Dialog
			header='Add New Asset'
			visible={_visible}
			style={{ width: '50vw' }}
			onHide={() => {
				_setVisible(false), setVisible(false);
			}}
		>
			{children}
		</Dialog>
	);
}

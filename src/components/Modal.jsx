import { Dialog } from 'primereact/dialog';
import { useEffect } from 'react';
import { useState } from 'react';

export function Modal({ visible, setVisible, header, children }) {
	const [_visible, _setVisible] = useState(visible);

	useEffect(() => {
		_setVisible(visible);
	}, [visible]);

	return (
		<Dialog
			header={header}
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

import { useState } from 'react';
import { AuthContext } from '../AuthContext';

export function AuthProvider({ children }) {
	const [auth, setAuth] = useState();

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
}

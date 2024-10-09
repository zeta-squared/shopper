import { useState, useEffect, useContext, createContext } from 'react';

import { useApi } from './ApiProvider';

const UserContext = createContext();

export default function UserProvider({ children }) {
	const [user, setUser] = useState();
	const api = useApi();

	useEffect(() => {
		(async () => {
			if (api.isAuthenticated()) {
				const response = await api.get('/users/me');
				setUser(response.ok ? response.body : null);
			} else {
				setUser(null);
			}
		})();
	}, [api]);

	const login = async (username, password) => {
		const result = await api.login('/tokens', username, password);
		if (result === 'ok') {
			const response = await api.get('/users/me');
			setUser(response.ok ? response.body : null);
		}

		return result;
	};

	const logout = async () => {
		await api.logout();
		setUser(null);
	}

	return (
		<UserContext.Provider value={{user, setUser, login, logout}}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	return useContext(UserContext);
}

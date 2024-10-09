import { createContext, useContext } from 'react';

import ShopperApiClient from '../ShopperApiClient';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
	const api = new ShopperApiClient();

	return (
		<ApiContext.Provider value={api}>
			{children}
		</ApiContext.Provider>
	);
}

export function useApi() {
	return useContext(ApiContext);
}

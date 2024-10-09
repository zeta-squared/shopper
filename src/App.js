import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import ApiProvider from './contexts/ApiProvider';
import UserProvider from './contexts/UserProvider';
import FlashProvider from './contexts/FlashProvider';

import Header from './components/Header';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import ShoppingListPage from './pages/ShoppingListPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
		<Container fluid className="App">
			<BrowserRouter>
				<FlashProvider>
					<ApiProvider>
						<UserProvider>
							<Header />
							<Routes>
								<Route path="/login" element={<LoginPage />} />
								<Route path="/register" element={<RegistrationPage />} />
								<Route path="*" element={
									<PrivateRoute>
										<Routes>
											<Route path="/" element={<ShoppingListPage />} />
											<Route path="/*" element={<Navigate to="/" />} />
										</Routes>
									</PrivateRoute>
									} />
							</Routes>
						</UserProvider>
					</ApiProvider>
				</FlashProvider>
			</BrowserRouter>
		</Container>
  );
}

export default App;

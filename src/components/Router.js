import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FormPage from '../containers/FormPage';
import ConfirmationPage from '../containers/ConfirmationPage';
import SubmissionsPage from '../containers/SubmissionsPage';
import { ROUTES } from '../constants';

export default function Router(){
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to={ROUTES.FORM} />} />
				<Route path={ROUTES.FORM} element={<FormPage />} />
				<Route path={ROUTES.CONFIRM} element={<ConfirmationPage />} />
				<Route path={ROUTES.SUBMISSION} element={<SubmissionsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

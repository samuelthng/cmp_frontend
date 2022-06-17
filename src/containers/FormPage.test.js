import { render, screen, waitFor } from '@testing-library/react';
import { messages } from '../messages';
import FormPage from './FormPage';

jest.mock('react-router-dom', () => ({
	useNavigate: () => jest.fn(),
}));

describe('rendering sanity check', () => {
	it('should render form page without crashing', () => {
		render(<FormPage />);
		const mainLayout = screen.getByRole('main');
		expect(mainLayout).toBeInTheDocument();
	});

	it('should render input for name', () => {
		render(<FormPage />);
		const nameInput = screen.getByTestId('name-input');
		expect(nameInput).toBeInTheDocument();
	});

	it('should render input for temperature', () => {
		render(<FormPage />);
		const temperatureInput = screen.getByTestId('temperature-input');
		expect(temperatureInput).toBeInTheDocument();
	});

	it('should render symptoms radio group', () => {
		render(<FormPage />);
		const symptomsRadioGroup = screen.getByTestId('symptoms-radio-group');
		expect(symptomsRadioGroup).toBeInTheDocument();
	});

	it('should render recent contact radio group', () => {
		render(<FormPage />);
		const recentContactRadioGroup = screen.getByTestId('recentContact-radio-group');
		expect(recentContactRadioGroup).toBeInTheDocument();
	});
});

describe('form validation rules', () => {
	it('should display error if name field is empty', async () => {
		render(<FormPage />);
		const submitButton = screen.getByTestId('form-submit');
		submitButton.click();
		await waitFor(() => {
			const nameError = screen.getByText(messages.errorNameRequired);
			expect(nameError).toBeInTheDocument()
		});
	});

	it('should not display error if name field is not empty', async () => {
		render(<FormPage />);
		const nameInput = screen.getByTestId('name-input');
		nameInput.value = 'John Doe';
		const submitButton = screen.getByTestId('form-submit');
		submitButton.click();
		await waitFor(() => {
			const nameError = screen.queryByText(messages.errorNameRequired);
			expect(nameError).not.toBeInTheDocument()
		});
	});
})

import { render, screen } from '@testing-library/react';
import { messages } from '../messages';
import Header from './Header';

it('should render without crashing', () => {
	render(<Header />);
	expect(screen.getByText(messages.title)).toBeInTheDocument();
	expect(screen.getByAltText('logo')).toBeInTheDocument();
})

it('should render with custom title if provided', () => {
	const customTitle = 'Custom Title';
		render(<Header title={customTitle} />);
		expect(screen.getByText(customTitle)).toBeInTheDocument();
});

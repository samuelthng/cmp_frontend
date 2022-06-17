import logo from '../assets/logo.svg';
import { Layout, Typography } from 'antd';
import { messages } from '../messages';

export default function Header({ title = messages.title, icon = logo }) {
	return (
		<Layout.Header style={{ display: 'flex', placeContent: 'center', padding: '1em', backgroundColor: '#fff' }}>
			<img src={icon} alt="logo" style={{ aspectRatio: '1 / 1', maxHeight: '4em' }} />
			<Typography.Title level={2}>{title}</Typography.Title>
		</Layout.Header>
	);
}

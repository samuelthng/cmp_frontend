import { Button, Descriptions, Layout } from 'antd';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';
import { messages } from '../messages';
import { renderBoolean } from '../utils';

export default function FormPage() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const onBack = () => navigate(ROUTES.FORM);
	const { timestamp, name, temperature, symptoms, recentContact } = state;
	if (state === null) return <Navigate to="/form" />;
	return (
		<Layout.Content style={{ padding: '4em' }}>
			<Descriptions
				title={messages.confirmTitle}
				bordered
				column={1}
				contentStyle={{ backgroundColor: '#fff' }}
			>
				<Descriptions.Item label={messages.timestampConfirmLabel}>{timestamp.toLocaleString()}</Descriptions.Item>
				<Descriptions.Item label={messages.nameConfirmLabel}>{name}</Descriptions.Item>
				<Descriptions.Item label={messages.temperatureConfirmLabel}>{temperature}°C</Descriptions.Item>
				<Descriptions.Item label={messages.symptomsConfirmLabel}>
					{renderBoolean(symptoms)}
				</Descriptions.Item>
				<Descriptions.Item label={messages.recentContactConfirmLabel}>
					{renderBoolean(recentContact)}
				</Descriptions.Item>
			</Descriptions>
			<Button type="primary" htmlType="submit" onClick={onBack} style={{ marginTop: '2em'}}>
				{messages.confirmBackButton}
			</Button>
		</Layout.Content>
	);
}

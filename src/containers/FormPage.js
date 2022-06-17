import { useState } from 'react';
import { Button, Form, Input, InputNumber, Layout } from 'antd';
import BooleanRadioButton from '../components/BooleanRadioButton';
import { useNavigate } from 'react-router-dom';
import { messages } from '../messages';
import { ROUTES } from '../constants';


export default function FormPage() {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const onFinish = (values) => {
		setLoading(true);
		console.log('Received values of form: ', values);
		setTimeout(() => {
			setLoading(false);
			navigate(ROUTES.CONFIRM, { state: { ...values, timestamp: new Date() } });
		}, 2000);
	};

	return (
		<Layout.Content style={{ padding: '3em', minHeight: 520 }}>
			<Form name="covidDeclarationForm" layout={'vertical'} form={form} onFinish={onFinish}>
				<Form.Item
					name="name"
					label={messages.nameFormLabel}
					data-testid="name-input"
					required
					rules={[{ required: true, message: messages.errorNameRequired}]}
				>
					<Input type="text"/>
				</Form.Item>
				<Form.Item
					name="temperature"
					label={messages.temperatureFormLabel}
					data-testid="temperature-input"
					required
					rules={[
						{ required: true, message: messages.errorTemperatureRequired },
						{ type: 'number', min: 30, max: 45, message: messages.errorTemperatureRange },
					]}
				>
					<InputNumber step={0.1} addonAfter={messages.temperatureUnit} />
				</Form.Item>
				<BooleanRadioButton
					name="symptoms"
					label={messages.symptomsFormLabel}
					tooltip={messages.symptomsFormTooltip}
					required
					rules={[{ required: true, message: messages.errorSymptomsRequired }]}
				/>
				<BooleanRadioButton
					name="recentContact"
					label={messages.recentContactFormLabel}
					required
					rules={[{ required: true, message: messages.errorRecentContactRequired }]}
				/>
				<Form.Item style={{ marginTop: '2em' }}>
					<Button type="primary" htmlType="submit" loading={loading} disabled={loading} data-testid="form-submit">
						{messages.submitFormButton}
					</Button>
				</Form.Item>
			</Form>
		</Layout.Content>
	);
}

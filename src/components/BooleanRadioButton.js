import { Form, Radio } from 'antd';
import { renderBoolean } from '../utils';

const BooleanOptions = [true, false].map(i => ({ label: renderBoolean(i), value: i }));
export default function BooleanRadioButton({ name, label, required, rules, tooltip }) {
	return (
		<Form.Item name={name} label={label} required={required} rules={rules} tooltip={tooltip}>
			<Radio.Group options={BooleanOptions} optionType="button" buttonStyle="solid" data-testid={`${name}-radio-group`} />
		</Form.Item>
	);
}

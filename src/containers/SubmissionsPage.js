import { Card, Layout, Table } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { URL } from '../constants';
import { messages } from '../messages';
import { renderBoolean } from '../utils';

// Pulled out of component as it doesn't depend on anything in dataset.
const columns = [
	{ title: 'ID', dataIndex: 'index', key: 'index', width: 60 },
	{ title: 'Name', dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
	{
		title: 'Temperature',
		dataIndex: 'temperature',
		key: 'temperature',
		render: (temp) => `${temp}${messages.temperatureUnit}`,
		sorter: (a, b) => a.temperature - b.temperature,
		filters: [
			{ text: 'With fever', value: true },
			{ text: 'No fever', value: false },
		],
		onFilter: (fever, record) => (fever ? record.temperature > 37.5 : record.temperature < 37.5),
	},
	{
		title: 'Symptoms',
		dataIndex: 'symptoms',
		key: 'symptoms',
		render: renderBoolean,
		sorter: (a, b) => a.symptoms - b.symptoms,
		filters: [
			{ text: 'With symptoms', value: true },
			{ text: 'No symptoms', value: false },
		],
		onFilter: (symptoms, record) => symptoms === record.symptoms,
	},
	{
		title: 'Recent Contact',
		dataIndex: 'recentContact',
		key: 'recentContact',
		render: renderBoolean,
		sorter: (a, b) => a.recentContact - b.recentContact,
		filters: [
			{ text: 'With recent contact', value: true },
			{ text: 'No recent contact', value: false },
		],
		onFilter: (recentContact, record) => recentContact === record.recentContact,
	},
	{
		title: 'Submitted',
		dataIndex: 'timestamp',
		key: 'timestamp',
		render: (dt) => dt.toLocaleString(),
		sorter: (a, b) => a.timestamp > b.timestamp,
	},
];

export default function SubmissionsPage() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState();

	const fetchData = async () => {
		setLoading(true);
		try {
			const data = await fetch(`/api/submission`);
			const json = await data.json();
			setData(json);
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (data.length === 0 && !loading) fetchData();
	}, [data, loading]);

	return (
		<Layout.Content style={{ minHeight: 750 }}>
			<Card title="Declaration Submissions" bodyStyle={{ padding: '0 2em' }}>
				<Table
					loading={loading}
					dataSource={data}
					rowKey="uuid"
					scroll={{ x: true }}
					columns={columns}
					pagination={{ position: ['topRight', 'bottomRight'] }}
				/>
			</Card>
		</Layout.Content>
	);
}

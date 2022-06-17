import { messages } from '../messages';
import { faker } from '@faker-js/faker';

export const generateData = (entries) => {
	return [...Array(entries)].map(() => {
		return {
			uuid: faker.datatype.uuid(),
			timestamp: faker.date.past(1),
			name: faker.name.findName(),
			temperature: faker.datatype.number({ min: 35, max: 40, precision: 0.1 }),
			symptoms: faker.datatype.boolean(),
			recentContact: faker.datatype.boolean(),
		};
	});
};
export const renderBoolean = (value) => (value ? messages.booleanYes : messages.booleanNo);

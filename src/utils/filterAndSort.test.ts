import { filterAndSortByDateDifference } from './filterAndSortByDateDifference'; // Replace 'yourFileName' with the actual filename
import moment from 'moment';

describe('filterAndSortByDateDifference', () => {
    it('should filter and sort data by date difference', () => {
        const currentDate = moment().startOf('day');
        const testData = [
            { id: 'id', date: '2023-11-12T11:51:26+02:00', status:'Test Status', msg: 'Hello 1', component: jest.fn() },
            { id: 'id', date: '2023-11-21T11:51:26+02:00', status:'Test Status', msg: 'Hello 2', component: jest.fn() },
            { id: 'id', date: '2023-11-25T11:51:26+02:00', status:'Test Status', msg: 'Hello 3', component: jest.fn() },
        ];

        const result = filterAndSortByDateDifference(testData);

        // Check if the result is an array
        expect(Array.isArray(result)).toBe(true);

        // Check if each item has the expected properties
        result.forEach((item) => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('date');
            expect(item).toHaveProperty('msg');
            expect(item).toHaveProperty('component');
            expect(item).toHaveProperty('momentDate');
            expect(item).toHaveProperty('differenceInDays');
        });

        // Check if the array is sorted by differenceInDays in descending order
        for (let i = 0; i < result.length - 1; i++) {
            const current = result[i];
            const next = result[i + 1];
            const currentDiff = moment(current.date).startOf('day').diff(currentDate, 'days');
            const nextDiff = moment(next.date).startOf('day').diff(currentDate, 'days');
            expect(currentDiff).toBeGreaterThanOrEqual(nextDiff);
        }
    });
});

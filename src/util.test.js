import { interpose } from './util'

describe('util', () => {
	describe('interpose', () => {
		test('interpose [0] with 1 should be equal to [0]', () => {
			expect(interpose([0], 1)).toEqual([0])
		})
		
		test('interpose [1, 2, 3] with 0 should be equal to [1, 0, 2, 0, 3]', () => {
			const data = [1, 2, 3]
			const seperator = 0
			expect(interpose(data, seperator)).toEqual([1, 0, 2, 0, 3])
		})
	})
})
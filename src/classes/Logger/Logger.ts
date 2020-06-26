/**
 * Главный класс
 */
export default class Logger {
	constructor() {
		if (typeof window !== 'undefined') {
			console.log('Init My class')
		}
	}
}

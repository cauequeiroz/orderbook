export class DateHelper {

    constructor() {

        throw new Error('This class cannot be instantiated.');
    }

    static dateFromText(text) {
        
        return new Date(
            ...text.split('-').map((number, pos) => pos == 1 ? number++ : number)
        );
    }

    static textFromDate(date) {

        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }
}
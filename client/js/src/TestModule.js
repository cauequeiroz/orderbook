export class TestModule {
    
    constructor() {

        this.message = 'Start development...';
    }

    hi() {

        console.log(`[DEV] ${this.message}`);
    }
}
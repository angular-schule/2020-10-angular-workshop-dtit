export class Customer {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    foobar(): string {
        setTimeout(() => {
            console.log('Die ID ist', this.id);
        }, 2000);
        
        return '';
    }
}

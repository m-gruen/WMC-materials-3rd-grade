export interface IList<T> {
    add(value: T): void;
    getAtIndex(index: number): T | undefined;
    get length(): number;
}

export class LinkedList<T> implements IList<T> {

    public add(value: T): void {
    }

    public getAtIndex(index: number): T | undefined {
        return undefined;
    }

    public get length(): number {
        return 0;
    }
}

export class ArrayList<T> implements IList<T> {
    private readonly data: T[] = [];

    public add(value: T): void {
        this.data.push(value);
    }

    public getAtIndex(index: number): T | undefined {
        if (index < 0 || this.length <= index) {
            return undefined;
        }
        return this.data[index];
    }

    public get length(): number {
        return this.data.length;
    }
}
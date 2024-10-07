/*
const studentName: string = 'Wetscher';
const age: number = 16;
const height: number = 1.82;
const isNice: boolean | null = true;

const obj = {
    foo: 2,
};
const obj2: any = obj;
console.log(obj2.bar);
*/

/*
enum StressLevel {
    VeryStressed = 0,
    SuperStressed = 10,
    TADEOT = 200,
}

type WeekLevel = [string, StressLevel];
type Fancy = "Hallo Lukas" | 23 | StressLevel; // Some fancy type

const variable: Fancy = "Hallo Lukas"; // OK
const variable2: Fancy = 23; // OK
const variable3: Fancy = true; // Error

const lastWeek: WeekLevel = ["erste Woche", StressLevel.SuperStressed];
const thisWeek: WeekLevel = ["zweite Woche", StressLevel.VeryStressed];

const [weekInfo, stressLevel] = lastWeek;
console.log(weekInfo, stressLevel);
*/

/*
type Bar = {bar: number};

const foo: number | null | undefined = null;

if (foo) {
    console.log('true');
} else {
    console.log('false');
}
*/

/*
type Addition = ((x: number, y: number) => number) | string;

let myAdd: Addition = "Hallo!";
myAdd = (a: number, b: number): number => a + b;
myAdd(1, 2);
*/

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr.filter((n: number) => n % 2 === 0);

evenNumbers.forEach(e => {
    console.log(e);
});
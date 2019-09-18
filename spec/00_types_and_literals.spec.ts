import { WSANOTINITIALISED } from 'constants';

describe('declaring variable', () => {
    describe('using let', () => {
        it('declaring a variable with let', () => {
            let name;

            name = 'Brian';

            expect(name).toBe('Brian');
            expect(typeof (name)).toBe('string');

            name = 1137;

            expect(name).toBe(1137);
            expect(typeof (name)).toBe('number');
        });
        it('explicityly typing ', () => {
            let name: string | number;  /*union type - either string or number*/
            name = 'Brian';
            name = 123;
        });
        it('implicity typed variables', () => {
            let name = 'Jeff';

            name = 'Jeffry';

            // name = 1137;
        });
    });
    describe('constants', () => {
        it('has them and prefers them', () => {
            const pi = 3.1415;

            // pi = 3;

            const friends = ['Sean', 'Reggie', 'Sara'];
            // friends = [];
            friends[2] = 'David';

            const movie = { title: 'The Force Awakens', director: 'Lucas' };
            // movie= {};
            movie.director = 'Abrams';

            const age = 50;
            expect(age).toBe(50);
        });
        describe('var and why it is evil and you should not use it.', () => {

            it('does not have block scope!', () => {

                const age = 22;

                if (age > 21) {
                    // tslint:disable-next-line: no-var-keyword
                    var message;
                    message = 'Old Enough';
                }

                expect(message).toBe('Old Enough');
            });
        });

    });
    describe('literals', () => {
        it('has a bunch of numeric literals', () => {
            const n1 = 123;
            const n2 = 3.14;
            const bigNumber = 12_123_530;

            const hexNumber = 0xff;
            const binaryNumber = 0b1010101;
            const octalNumber = 0o567;

            let x: number;
            x = octalNumber;

            const pay = parseInt('42.83', 10);  // base 10 number, good due to bug in IE
            expect(pay).toBe(42);
            const pay2 = parseFloat('42.83');
            expect(pay2).toBe(42.83);
        });
        it('string literals', () => {

            const title = 'Jones';
            // tslint:disable-next-line: quotemark
            expect(title).toBe("Jones");
        });
        it('template strings', () => {
            const s1 = 'Tacos';
            expect(typeof (s1)).toBe('string');

            const story = `My Life Story.
            It was a dark and stormy night.`;  // back ticks can support multi-line

            const name = 'Bob';
            const age = 49;

            const oldSkool = 'The name is ' + name + ' and the age is ' + age + ' years.';
            const newSkool = `The name is ${name} and the age is ${age} years.`;
            expect(newSkool).toBe(oldSkool);
        });
        it('has array lilterals', () => {
            const luckyNumbers = [9, 20, 108];
            expect(luckyNumbers[0]).toBe(9);
            luckyNumbers[999] = 50;

            expect(luckyNumbers[100]).toBeUndefined();

            let friends: strings[];

            friends = ['Bill', 'Beth'];

            let someArray: (string | number)[];
            someArray = [99, 'dog', 'cat', 42];

            let someArray2: Array<string | number>;
            someArray2 = [99, 'BigStuff'];
        });
        it('intro to tuples', () => {
            let setting: [boolean, string, string, string];
            setting = [true, 'log', 'warn', 'trace'];

            // setting = [ 'dog', 'cat'];  // won't compile

            const isSet = setting[0];
            // isSet is treated as boolean
            const allowLog = setting[1];
            // allowLog is treated as string

            // defining a type
            type Setting2 = [boolean, string, string, string];
            let setting2: Setting2;

            // defining enum values
            type SettingOption = 'log' | 'warn' | 'trace';
            type Setting3 = [boolean, SettingOption, SettingOption, SettingOption];

            let setting3: Setting3;

            // rarely used
            enum Setting4 { Vegan, Vegitarian, GF, Any }
            const myDiet = Setting4.Vegan;


        });
    });
    describe('function literals', () => {
        it('three different way to declare a function - plus methods in a class we will do later', () => {
            // Named function
            function add(a: number, b: number): number {
                return a + b;
            }
            // Anonymous Function
            const subtract = function (a: number, b: number): number {
                return a - b;
            };

            // Arrow Function
            const multiply = (a: number, b: number): number => a * b;

            const divide = (a: number, b: number): number => {
                if (b === 0) {
                    throw new Error('Are you trying to open a black hole!?');
                } else {
                    return a / b;
                }
            };

            expect(add(10, 2)).toBe(12);
            expect(subtract(10, 2)).toBe(8);
            expect(multiply(10, 2)).toBe(20);
            expect(divide(10, 2)).toBe(5);
        });
    });
    describe('object literals', () => {
        it('has them', () => {
            type MPAARating = 'G' | 'PG' | 'PG13' | 'R';
            interface Movie {
                title: string;
                director: string;
                yearReleased: number;
                MPAARating?: MPAARating;
                [key: string]: any;   // along with these fields, I can add any new field
            }

            const movie: Movie = {
                title: 'Thor Ragnorak',
                director: 'Taika Waititit',
                yearReleased: 2016
            };

            expect(movie.title).toBe('Thor Ragnorak');
            // tslint:disable-next-line: no-string-literal
            expect(movie['title']).toBe('Thor Ragnorak');

            movie.yearReleased = 2017;
            movie.MPAARating = 'PG13';
            movie.cast = ['Chris hemsworth', 'Tom Hiddleston'];
            movie.watched = true;

            interface Vehicle {
                vin: string;
                make: string;
                model: string;
                year: number;
            }

            interface Dictionary<T> {
                [key: string]: T;
            }



            const myVehicles: Dictionary<Vehicle> = {
                '83989sjioe': {
                    vin: '83989sjioe',
                    make: 'Chevy',
                    model: 'Bolt',
                    year: 2018
                },
                xyzpdq: {
                    vin: 'xyzpdq',
                    make: 'Honda',
                    model: 'Pilot',
                    year: 2019
                }

            };

            expect(myVehicles['83989sjioe'].make).toBe('Chevy');

        });
        it('duck typing', () => {
            function doSomething(thing: { message: string }) {
                console.log(thing.message);
            }

            doSomething({ message: 'Call you Mom' });

            const phoneCall = {
                from: 'Sue',
                time: 'AM',
                message: 'Call me back'
            };

            doSomething(phoneCall);
        });
    });
});

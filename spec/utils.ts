export const add = (a: number, b: number) => a + b;

export function isEven(num: number): boolean {
    return num % 2 === 0;
}

export function formatter(message: string, f: (x: string) => string): string {
    return f(message.replace(' ', '_').toUpperCase());
}

export function identity(x: any) {
    return x;
}

export function jessDecorator(char: string) {
    return (s: string) => `${char}${char}${char}${s}${char}${char}${char}`;
}

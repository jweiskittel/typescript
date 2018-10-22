
/******************
 * 01 - Declaration
 ******************/
let username: string = 'instructor'
let instructorId: number = 123
let password: string

/*****************
 * 02 - Basic Types
 *******************/
let arr: string[]
arr = ['yes', 'maybe', 'no']

let number: Array<number> = [1,2,3,4,5,6]

let quintuplets: [number, string] = [1, 'Tom']

let whatever: any = '12345'
whatever = 12345

function kellyIsAwesome(): string {
    return ('hi, kelly')
}

const kelly = ():string => 'hello'

/****************
 * 03 - Union Types
 ****************/

 let options: number | null = 1234

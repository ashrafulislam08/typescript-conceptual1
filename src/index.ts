const test: string = "Test";
console.log(test);

/**
 * What we wil learn from this session
 * 1. Basic Data type
 *  Primitive
 *       - string
 *       - number
 *       - symbol
 *       - bigInt
 *       - boolean
 *       - undefined
 *       - null
 *  Non-Primitive
 *        - Object
 *        - Array
 *        - Function
 * 2. Object, Optional and Literal Types
 * 3. Function in Typescript
 * 4. Spread and Rest Operator
 * 5. Destructuring in Typescript
 * 6. Type Alias in Typescript
 * 7. Union and Intersection types
 * 8. Ternary, Optional chaining & nullish coalescing
 * 9
 */


// Primitive 
let str: string = "Ashraful";
let anyVar: number = 1;


// Non-Primitive

type Education = {
    institution: string;
    level: string
}

export type TObj = {
    name: string;
    age: number;
    education?: Education    
}

let arr: number[] = [1, 2, 3]
const obj: TObj = {
    name: "Ashraful",
    age: 20,
    education: {
        institution: 'University',
        level: 'undergrad',
    }
}
console.log(obj)
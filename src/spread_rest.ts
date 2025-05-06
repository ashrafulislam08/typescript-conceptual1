const user = {
    name: "Sam",
    age: 20,
}

const user2 = {
    id: 1,
    ...user,
    address: "Akasher Niche",
}


const numbers:number[] = [1, 2, 3, 4,5,6,7]

const numbers2: number[] = [...numbers, 8, 9, 10]



function square(...rest: number[]): void {
    console.log(rest)
    const numbs = rest.map((value) => value*value)
    console.log(numbs)
}

square(1, 2, 3, 5)
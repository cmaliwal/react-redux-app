/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "chirag",
            last: "maliwal",
            age: 21,
            description: "chirag is a beginner React developer ",
        },
        {
            id: 2,
            first: "ajay",
            last: "sharma",
            age: 27,
            description: "Ajay loves the Packers, cheese, and turtles.",
        },
        {
            id: 3,
            first: "deepak",
            last: "kumar",
            age: 24,
            description: "DK likes her dog but it is really annoying.",
        }
    ]
}

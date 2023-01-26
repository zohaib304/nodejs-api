// process object provides information about the current
// nodejs process

const name = process.argv[2]
console.log(process.argv)
const location = process.argv[3]
console.log(`hi i am ${name} live in ${location}`)



console.log("process.env", process.env.NODE_ENV)
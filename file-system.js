const path = require("path");

const fs = require("fs").promises;

const getFileState = async (path) => {
    try {
        const stats = await fs.stat(path)
        console.log(stats)
        console.log(`isFile: ${stats.isFile()}`)
        console.log(`isDirectory: ${stats.isDirectory()}`)

    } catch (error) {
        console.log(error)
    }
}

// getFileState("./test.txt")

const readFile = async (path) => {
    try {
        const content = await fs.readFile(path, "utf-8")
        console.log(content)
    } catch (error) {
        console.log(content)
    }
}

readFile("./test.txt")

const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, data)
    } catch (error) {
        console.log(error)
    }
}

writeFile("./test1.txt", "hello zohaib")

const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data)
    } catch (error) {
        console.log(error)
    }
}

appendFile("./test1.txt", "hello zohaib")
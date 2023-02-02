class hashTable {
    constructor(size) {
        this.size = size
        this.table = new Array(size)
    }


    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            let sameKey = bucket.find(item => item[0] === key)
            if (sameKey) {
                sameKey[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        let bucket = this.table[index]
        if (bucket) {
            let sameKey = bucket.find(item => item[0] === key)
            if (sameKey) {
                return sameKey[1]
            }
        }
        return undefined
    }


    remove(key) {
        const index = this.hash(key)
        // this.table[index]=undefined
        let bucket = this.table[index]

        let sameKey = bucket.find(item => item[0] === key)
        if (sameKey) {
            bucket.splice(bucket.indexOf(sameKey), 1)
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log("index:", i, "value:", this.table[i]);
            }
        }
    }
}


const hash = new hashTable(50)
hash.set("name", "salman")
hash.set("age", 21)
hash.set("place", "mathilakam")
// hash.remove("age")
// hash.remove("name")
hash.display()
console.log(hash.get("name"));

// The find method is a built-in JavaScript method that returns 
// the value of the first element in an array that satisfies 
// a provided testing function.

// The find method takes a callback function as an argument. 
// This callback function takes in an element of the array and 
// returns a boolean value indicating whether the element satisfies 
// a certain condition. The find method returns the first element 
// for which the callback function returns true.

// In the code, the find method is used to search for an entry in 
// the bucket with the same key as the given key. The callback 
// function takes an entry, represented as an array of [key, value],
//  and returns true if the key of the entry matches the given key, and false otherwise.

// So, the find method returns the first entry in the bucket with 
// the same key as the given key, or undefined if no such entry is found.
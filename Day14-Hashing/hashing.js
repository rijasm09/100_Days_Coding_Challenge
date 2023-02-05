class hashTable {
    constructor(size) {
        this.table = new Array(size)
        // this is another way to instantiate array in js
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value) {
        let index = this.hash(key)
        this.table[index] = value;
    }
    get(key) {
        let index = this.hash(key)
        console.log(this.table[index]);
    }
    remove(key) {
        let index = this.hash(key);
        this.table[index] = undefined;
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i,this.table[i]);
            }
        }
    }
}


const table = new hashTable(50);
table.set("name", "Rijas");
table.set("age", "29");
table.set("country", "India");
table.get("name")
table.display()
table.remove("country")
table.display()


// This is an implementation of a hash table data structure in JavaScript using an array. 
// The hashTable class has several methods to interact with the table:

// constructor(size): initializes the hash table with a specified size, 
// creates an array of that size, and stores it in the table property.

// hash(key): calculates an index in the array for a given key by summing 
// the ASCII values of the key's characters, then taking the remainder when divided by the size of the array.

// set(key, value): uses the hash method to calculate the index for the key, 
// then stores the value in that index of the table array.

// get(key): uses the hash method to calculate the index for the key, then 
// retrieves the value stored at that index of the table array and logs it to the console.

// remove(key): uses the hash method to calculate the index for the key, 
// then sets the value at that index of the table array to undefined.

// display(): iterates over the table array, and logs each index and its
//  corresponding value to the console if it is not undefined.

// The code then creates an instance of the hashTable class, sets values 
// for three keys, retrieves the value for one key, displays the entire table, removes a value, and displays the table again.



// this.table = new Array(size)

// The line this.table = new Array(size) creates a new JavaScript array with a 
// specified size and assigns it to the table property of the hashTable instance. 
// The size of the array determines the maximum number of key-value pairs that can be stored in the hash table.   `
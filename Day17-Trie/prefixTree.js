class Node {
    constructor() {
        this.children = new Map()
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        // start with the root node
        let currentNode = this.root;
        //take every character in the word
        for (let letter of word) {
            // check if it exists in children
            if (!currentNode.children.has(letter)) {
                // if not add it to children
                currentNode.children.set(letter, new Node())
            }
            // proceed to the next depth of the trie
            currentNode = currentNode.children.get(letter)
        }
        currentNode.isEnd = true;
    }

    search(word) {
        if (!word.length) return false;
        // start with root node
        let currentNode = this.root;
        // for every character in the word
        for (let letter of word) {
            // check if it exists in the children and return false if not
            if (!currentNode.children.has(letter)) {
                // proceed to the next depth of the trie
                return false;
            }
            currentNode = currentNode.children.get(letter)
        }
        // we checked every letter of a word, but is the end of the word in the trie?
        return currentNode.isEnd;
    }

    startsWith(prefix){
        if (!prefix.length) return false;
        // starts with root node
        let currentNode = this.root;
        // for every character in the word
        for(let letter of prefix) {
            if(!currentNode.children.has(letter))
            return false;
            // proceed to the next depth of the trie
            currentNode = currentNode.children.get(letter);
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("shibin")
trie.insert("shinas")
trie.insert("ramos")
console.log(trie.search("ram"));
// console.log(trie.startsWith("shi"));
class Trail {
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.addVertex[vertex] = new Set()
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjList[vertex1]) {
            this.adjList(vertex1)
        }
        if (!this.adjList[vertex2]) {
            this.adjList(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    hasEdge(vertex1, vertex2) {
        return (
            this.adjList[vertex1].has(vertex2) &&
            this.adjList[vertex2].has(vertex1)
        )
    }
    dfs(startingNode) {
        let visited = new Map()
        let stack = [startingNode]
        visited.set(startingNode)
        let result = []
        while (stack.length != 0) {
            let current = stack.pop()
            result.push(current)
            for (const edge of this.adjList[current]) {

                if (!visited.has(edge)) {
                    visited.set(edge)
                    stack.push(edge)
                }
            }
        }
        return result;
    }
    dfs(startingNode) {
        // This line defines a function called dfs that takes a 
        // startingNode parameter. The function implements a DFS 
        // algorithm to traverse a graph and find all reachable 
        // nodes from the startingNode.
        let visited = new Map()
        // This line creates an empty visited Map that will keep 
        // track of the visited nodes during the DFS traversal.
        let stack = [startingNode]
        // This line creates an empty stack array and initializes it 
        // with the startingNode. The stack is used to keep track of 
        // the nodes that need to be visited during the DFS traversal.
        visited.set(startingNode)
        // This line adds the startingNode to the visited Map to mark it as visited.
        let result = []
        // This line creates an empty result array that will store 
        // the visited nodes in the order they were visited.
        while (stack.length != 0) {
            // This line starts a while loop that will continue until 
            // the stack is empty, which means all reachable nodes from 
            // the startingNode have been visited.
            let current = stack.pop()
            // This line pops the last node added to the stack and assigns 
            // it to the current variable. The current variable represents 
            // the node being visited in the current iteration of the DFS traversal.
            result.push(current)
            // This line adds the current node to the result array to keep track 
            // of the order in which nodes were visited.
            for (const edge of this.adjList[current]) {
                // This line starts a for loop that iterates over the adjacency list of 
                // the current node. The adjList is an object that represents the adjacency
                //  list of the graph. For each node in the adjacency list of the current 
                //  node, the loop checks if it has been visited before.

                if (!visited.has(edge)) {
                    // This line checks if the edge node has been visited before. 
                    // If the visited Map does not contain the edge node as a key, 
                    // it means that the edge node has not been visited before.
                    visited.set(edge)
                    stack.push(edge)
                    // This line adds the edge node to the visited Map to mark it as visited,
                    //  and adds it to the stack array to be visited later in the DFS traversal.
                }
            }
        }
        return result;
    }
    // Overall, this code implements a basic DFS algorithm to traverse a graph 
    // and find all reachable nodes from a given starting node. It does so 
    // by using a visited Map to keep track of visited nodes, a stack array 
    // to maintain the nodes to visit, and a result array to store the visited 
    // nodes in the order they were visited.



    bfs(startingNode) {
        let visited = new Map()
        let queue = []
        visited.set(startingNode)
        queue.push(startingNode)

        while (queue.length) {
            let current = queue.shift()
            console.log(current);
            for (const edge of this.adjList[current]) {
                if (!visited.has(edge)) {
                    visited.set(edge)
                    queue.push(edge)
                }
            }

        }
    }
    bfs(startingNode) {
        // This line defines a function called bfs that takes a 
        // startingNode parameter. The function implements 
        // a breadth-first search (BFS) algorithm to traverse a 
        // graph and find all reachable nodes from the startingNode.
        let visited = new Map()
        // This line creates an empty visited Map that will keep 
        // track of the visited nodes during the BFS traversal.
        let queue = []
        // This line creates an empty queue array that will 
        // keep track of the nodes to visit during the BFS traversal.
        visited.set(startingNode)
        // This line adds the startingNode to the visited Map to mark it as visited.
        queue.push(startingNode)
        // This line adds the startingNode to the end of the queue array to be 
        // visited later in the BFS traversal.

        while (queue.length) {
            // This line starts a while loop that will continue until 
            // the queue is empty, which means all reachable nodes from 
            // the startingNode have been visited.
            let current = queue.shift()
            // This line removes the first node from the queue and assigns it 
            // to the current variable. The current variable represents the node 
            // being visited in the current iteration of the BFS traversal.
            console.log(current);
            // This line prints the current node to the console. This is an optional 
            // step used for debugging or visualization purposes.
            for (const edge of this.adjList[current]) {
                // This line starts a for loop that iterates over the adjacency list 
                // of the current node. The adjList is an object that represents the 
                // adjacency list of the graph. For each node in the adjacency list 
                // of the current node, the loop checks if it has been visited before.
                if (!visited.has(edge)) {
                    // This line checks if the edge node has been visited before. 
                    // If the visited Map does not contain the edge node as a key, 
                    // it means that the edge node has not been visited before.
                    visited.set(edge)
                    queue.push(edge)
                    // This line adds the edge node to the visited Map to mark it as visited,
                    //  and adds it to the end of the queue array to be visited later in the 
                    //  BFS traversal.
                }
            }

        }
    }
    // Overall, this code implements a basic BFS algorithm to traverse a graph and find 
    // all reachable nodes from a given starting node. It does so by using a visited 
    // Map to keep track of visited nodes, a queue array to maintain the nodes to visit,
    //  and a for loop that iterates over the adjacency list of each visited node to 
    //  add new nodes to the visited Map and the queue array.
}
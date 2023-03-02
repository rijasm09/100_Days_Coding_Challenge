// Sample social graph represented as a Map
const socialGraph = new Map([
    ["Alice", new Set(["Bob", "Charlie", "David"])],
    ["Bob", new Set(["Alice", "Eve"])],
    ["Charlie", new Set(["Alice", "David"])],
    ["David", new Set(["Alice", "Charlie"])],
    ["Eve", new Set(["Bob"])],
  ]);
  
  // Function to find mutual friends between two users
  function findMutualFriends(userA, userB, socialGraph) {
    const friendsA = socialGraph.get(userA);
    const friendsB = socialGraph.get(userB);
    const mutualFriends = [];
  
    // Find intersection of friendsA and friendsB
    for (const friend of friendsA) {
      if (friendsB.has(friend)) {
        mutualFriends.push(friend);
      }
    }
  
    return mutualFriends;
  }
  
  // Example usage
  const mutualFriends = findMutualFriends("Alice", "Charlie", socialGraph);
  console.log(mutualFriends); // Output: ["David"]
  
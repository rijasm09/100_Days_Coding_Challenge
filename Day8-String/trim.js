
	// An efficient JavaScript program to remove all
	// spaces from a string
	

	function removeSpaces(str) {
		// To keep track of non-space
		// character count
		var count = 0;

		// Traverse the given string. If current
		// character is not space, then place
		// it at index 'count++'
		for (var i = 0; i < str.length; i++)
		if (str[i] !== " ") str[count++] = str[i];
		// here count is
		// incremented

		return count;
	}

	// Driver code
	var str = "g eeks for ge eeks ".split("");
	var i = removeSpaces(str);
	console.log(str.join("").substring(0, i));
	

    // oUTPUT
// The space complexity of this program is O(1), 
// as it only uses a constant amount of extra space to 
// store the count variable. 
// The time complexity is O(n), 
// where n is the length of the input string. 
// This is because the program iterates through 
// each character of the input string once and performs 
// a constant amount of work for each character.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
		// loop different starting indexes of substring
		for (let i = 0; i < string.length; i++) {
			this.populateSubString(i, string);
		}
  }
	
	populateSubString(index, string) {
		let node = this.root;
		
		// loop through substring
		for (let j = index; j < string.length; j++) {
			const letter = string[j];
			// create object for letter
			if (!node[letter]) node[letter] = {};
			// access the next letter's object
			node = node[letter];
		}
		
		node[this.endSymbol] = true;
	}

  contains(string) {
    let node = this.root;
		
		for (const letter of string) {
			// if current letter does not exit return false
			if (!(letter in node)) return false;
			// else enter the letter's key value pair and continue checking
			node = node[letter];
		}
		
		return this.endSymbol in node;
  }
}

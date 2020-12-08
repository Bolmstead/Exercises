/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */



  makeChains() {
    let chains = {};

    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;


      if (chains.hasOwnProperty(word)) {
        chains[word].push(nextWord)
      }
      else {
        chains[word] = [];
        chains[word].push(nextWord);
      };

    this.chains = chains;
    }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    this.textArray = [];
  
    this.propNamesArray = Object.getOwnPropertyNames(this.chains);
    this.startWord = this.propNamesArray[Math.floor((Math.random() * this.propNamesArray.length))];
    this.textArray.push(this.startWord);

    for (let i = 0; i < numWords; i++) {
      if ((this.textArray.length < numWords) && (!this.textArray.includes(null))) {
        const word = this.textArray[i];
        const wordValues = this.chains[word];

        const randomIndex = Math.floor(Math.random() * wordValues.length);
        const nextWord = wordValues[randomIndex];
        this.textArray.push(nextWord);
      }
    }

    if (this.textArray.length > numWords){
      this.textArray.pop();
    }
    this.textString = this.textArray.join(' ');
  
  }
}

module.exports = {
  MarkovMachine,
};
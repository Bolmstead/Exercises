// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

function choice (items){
    let randomNum = Math.floor(Math.random() * items.length);
    return items[randomNum]
}

function remove(items, item) {
    for (i of items) {
      if (i === item){
          let index = items.indexOf(i);
          items.splice(index,1)
      }
    };
    return items
}

export { choice, remove }
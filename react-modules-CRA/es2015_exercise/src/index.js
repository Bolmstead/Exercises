import fruits from './fruits'
import {choice, remove} from './helpers'

function App() {
    let fruit = choice(fruits);
    let whatsLeft = remove(fruits, fruit);
    let numFruitLeft = whatsLeft.length
    console.log("fruit", fruit);
    console.log("whatsLeft", whatsLeft);
    console.log("numFruitLeft", numFruitLeft);

    return (
      <div>
          <span>I'd like one {fruit}, please</span>
          <span>Here you go: {fruit}</span>
          <span>Delicious! May I have another?</span>
          <span>I'm sorry, we're all out. We have {numFruitLeft} fruits left.</span>
      </div>
    );
  }
  
  ReactDOM.render(<App />,
    document.getElementById("root"));
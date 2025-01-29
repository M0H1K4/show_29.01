import { useState } from "react";
import image from "./assets/Path.png";
import image2 from "./assets/img.png";
import "./App.css";

function App() {
  const [className, setClassName] = useState('numbers')
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState('')

  function Button({ number }) {
    return <div onClick={() => setItems(number)} className={className}>{number}</div>;
  }

  return (
    <>
      {!isSubmitted && (
        <div className="container">
          <div className="image__div">
            <img className="star_img" src={image} alt="star_image" />
          </div>
          <span>
            <h1 className="heading_txt">How did we do?</h1>
            <p className="paragraph_txt">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </span>
          <div className="containerNumbers">
            <Button number={1} />
            <Button number={2} />
            <Button number={3} />
            <Button number={4}/>
            <Button number={5}/>
          </div>
          <button onClick={setIsSubmitted} className="submitBtn">
            submit
          </button>
        </div>
      )}
      {isSubmitted && <ThankYou items={items} />}
    </>
  );
}

export default App;

function ThankYou({items}) {
  return (
    <div className="container2">
      <img src={image2} alt="" />
      <h3 className="cont2_h3">You selected {items} out of 5</h3>

      <div className="txts">
        <h1 className="cont2_h1">Thank you!</h1>
        <p className="cont2_p">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}



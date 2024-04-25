import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [timeInput, setTimeInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(null);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleInputChange = (event) => {
    setTimeInput(event.target.value);
  };

  const startTimer = () => {
    const timeInSeconds = parseInt(timeInput);
    if (!isNaN(timeInSeconds)) {
      setTimeLeft(timeInSeconds);
      setTimerStarted(true);
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      setTimeout(() => clearInterval(timer), timeInSeconds * 1000);
    } else {
      alert('Please enter a valid number');
    }
  };

  function add() {
    var boxtext = document.getElementById("text1").value;
    var checkbox = document.createElement("input");

    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(boxtext));
    label.className = "label";

    document.body.appendChild(checkbox);
    document.body.appendChild(label);

    document.body.appendChild(document.createElement('br'));
    document.getElementById('text1').value = '';
  }

  function erase() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(function (checkbox) {

      if (checkbox.nextSibling.tagName === 'LABEL') {
        checkbox.nextSibling.remove();
      }
      checkbox.remove();
    });
  }

  return (
    <body>
      <div className="body">
        <img className="scarr" src="https://imgs.search.brave.com/x0Y9H9DfdVQmqoFIry0Z855TJSF28k9-ROWtXSODE2M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Nhcnlmb3JraWRz/LmNvbS9waWNzL3Nj/YXJ5LXBpY3R1cmVz/LmpwZw"></img>
        <h1 className="hed">NO TIMEPASS LIST</h1>
        <form className="todo">
          <input type="text" id="text1" style={{marginLeft:"40px"}}></input>
          <input type="button" className="button1" value="Add Task" onClick={add}></input>
          <input type="button" className="button2" value="Done with the Task" onClick={erase}></input>
          <br></br>
          <br></br>
          <input type="text" placeholder="Enter time in seconds" value={timeInput} onChange={handleInputChange} disabled={timerStarted} style={{marginLeft:'80px'}}></input>
          <input type="button" className="button1" value="Start Timer" onClick={startTimer}></input>
        
          {timerStarted && (
            <div className="timeshow">
                <br></br>
              Time Left: {timeLeft} seconds
              {timeLeft === 0 && !checkboxes.includes(false)(
                <img src="https://imgs.search.brave.com/x0Y9H9DfdVQmqoFIry0Z855TJSF28k9-ROWtXSODE2M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Nhcnlmb3JraWRz/LmNvbS9waWNzL3Nj/YXJ5LXBpY3R1cmVz/LmpwZw" alt="Jumpscare" style={{ width: '100%', height: '100%' }} />
              )}
            </div>
          )}
        </form>
      </div>
    </body>
  )
}

export default Todo;

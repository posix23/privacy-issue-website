import React, { useEffect, useState } from 'react';

import './App.css';

import { id } from './lib/utilities';

function App() {
  let url = 'https://gentle-beach-11167.herokuapp.com/', timeOut = false;

  const [clicked, setClicked] = useState(false);
  const [seconds, setSeconds] = useState(60*15);

  // Run once at the start
  useEffect(() => {
    fetch(url + 'encrypted')
      .then(resp => resp.json())
      .then(data => id("essay").innerHTML = data.encrypted)
      .catch(console.error);
  }, []);

  // Event for closing Terms of Service page
  const closeTOS = () => {
    id("tos-box").classList.add("d-none");
    id("essay").classList.remove("d-none");
    fetch(url + 'unencrypted')
      .then(resp => resp.json())
      .then(data => id("essay").innerHTML = data.unencrypted)
      .catch(console.error);
  };

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    if (seconds === 0) {
      clearInterval(interval);
      timeOut = true;
      if (!id("alert-time").classList.contains("d-none")) id("alert-time").classList.add("d-none");
      if (clicked) closeTOS();
    }

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    fetch('https://gentle-beach-11167.herokuapp.com/tos')
      .then(resp => resp.json())
      .then(data => {
        id("tos").innerHTML = data.tos;
        id("click-here").addEventListener("click", closeTOS);
      })
      .catch(console.error);
  }, []);

  const checkHandler = () => {
    if (id("agree").checked && id("pp-agree").checked) id("submit").classList.remove("d-none");
    else id("submit").classList.add("d-none");
  }

  return (
    <div className="App">
      <header className="App-header">
        Amazon and Data Ethics
        <hr></hr>
      </header>

      <main>
        <div id="tos-box" className="d-flex flex-column">
          <div id="tos"></div>

          <div className="d-flex flex-column justify-content-center">
            <form>
                <label htmlFor="tos-agree">I have read and agreed to the Terms of Service</label>
                <input type="checkbox" id="agree" name="tos-agree" onChange={checkHandler}></input><br/>
                <label htmlFor="tos-agree">I have read and agreed to the Privacy Policies</label>
                <input type="checkbox" id="pp-agree" name="pp-agree" onChange={checkHandler}></input><br/>
            </form>
            <button className="btn btn-success d-none" id="submit" onClick={() => {
              if (timeOut) closeTOS();
              else {
                setClicked(true);
                id("alert-time").classList.remove("d-none");
                id("agree").disabled = true;
                id("pp-agree").disabled = true;
                id("submit").disabled = true;
              }
            }}>Submit</button>
            <div className="alert alert-danger d-none" id="alert-time" role="alert">
              Come on! You can't possibly be reading the Terms of Service that quickly. We have disabled the submit button. You will be redirected to our content in {seconds} seconds or around {(seconds / 60).toFixed(2)} minutes or around {(seconds / 60 / 60).toFixed(2)} hours!
            </div>
          </div>
        </div>

        <div id="essay" className="d-none"></div>
      </main>

      <footer>
        <p>Copyrighted © 2021 - Toan Ly, Luke Dorsett, Ryan Mudgett</p>
      </footer>
    </div>
  );
}

export default App;

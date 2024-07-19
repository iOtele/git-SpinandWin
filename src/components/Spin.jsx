import React, { useState } from 'react';
import Swal from 'sweetalert2';
import applauseAudio from '/src/assets/applauding.wav'; 
import wheelAudio from '/src/assets/wheel.mp3';

const shuffle = (array) => {
  var currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

const SpinWheel = () => {
  const [rotation, setRotation] = useState(90);

  const spin = () => {
    const applause = document.getElementById('applauseAudio');
    const wheel = document.getElementById('wheelAudio');
    wheel.play();

    let selectedItem = '';

    let AC = shuffle([1890, 2250, 2610]);
    let Camera = shuffle([1850, 2210, 2570]);
    let Zonk = shuffle([1770, 2130, 2490]);
    let PS = shuffle([1810, 2170, 2530]);
    let Headset = shuffle([1750, 2110, 2470]);
    let Drone = shuffle([1630, 1990, 2350]);
    let ROG = shuffle([1570, 1930, 2290]);

    let results = shuffle([
      AC[0], Camera[0], Zonk[0], PS[0], Headset[0], Drone[0], ROG[0]
    ]);

    if (AC.includes(results[0])) selectedItem = 'Air Conditioner';
    if (Camera.includes(results[0])) selectedItem = 'Camera Sport Action';
    if (Zonk.includes(results[0])) selectedItem = 'Zonk';
    if (PS.includes(results[0])) selectedItem = 'Play Station';
    if (Headset.includes(results[0])) selectedItem = 'Headset Gaming';
    if (Drone.includes(results[0])) selectedItem = 'Drone mini';
    if (ROG.includes(results[0])) selectedItem = 'Laptop Asus ROG';

    setRotation(results[0]);

    setTimeout(() => {
      applause.play();
      Swal.fire({
        title: "Hooray...",
        html: `You won ${selectedItem} | <a href="#" style="text-decoration:none; color:green"> Claim Now! </a>`,
        imageUrl: "src/assets/monster-img.png",
        imageWidth: 82,
        imageHeight: 200,
        imageAlt: "Monster Can Drink"
      });
    }, 5000);

    setTimeout(() => {
      setRotation(90);
    }, 6000);
  };

  return (
    <div className="mainbox" id="mainbox">
      <div className="box" id="box" style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="box1">
          <span className="font span1"><h5>Smart TV 34 Inc</h5></span>
          <span className="font span2"><h5>Asus ROG</h5></span>
          <span className="font span3"><h5>Air Conditioner</h5></span>
          <span className="font span4"><h5>Speaker Portable</h5></span>
          <span className="font span5"><h5>Play Station</h5></span>
        </div>
        <div className="box2">
          <span className="font span1"><h5>Zonk</h5></span>
          <span className="font span2"><h5>Monster drink</h5></span>
          <span className="font span3"><h5>Ipad Mini</h5></span>
          <span className="font span4"><h5>Camera Sport Action</h5></span>
          <span className="font span5"><h5>Drone Mini T67</h5></span>
        </div>
      </div>
      <button className="spin" onClick={spin}>SPIN</button>
      <audio id="applauseAudio" src={applauseAudio} type="audio/wav"></audio>
      <audio id="wheelAudio" src={wheelAudio} type="audio/mp3"></audio>
    </div>
  );
};

export default SpinWheel;

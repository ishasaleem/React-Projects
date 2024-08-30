import React, { useState } from 'react';
import Title from '../../Components/Title';
import Buttons from '../../Components/Buttons';
import Card from './Card';
import "./CardStyle.css"
import shield from "./Svg/desktop-icons-svgrepo-com.svg"
import card2 from"./Svg/game-card-svgrepo-com.svg"
function CardGameUi() {
  
  document.body.style.background = 'purple';
  document.body.style.color = 'white';

  const [start, setStart] = useState(false);

  const startGame = () => {
    setStart(true);
  };

  return (
    <div className="container text-center">
      {!start ? (
        <section className="text-center">
          <Title text="CardGameUi" classes="main" />
          <Buttons text="Start" btnclass="btn-info" onClick={startGame} />
          <Title classes="sub" text="Rules" />
          <ul className="d-flex flex-column" style={{ gap: 15 }}>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              quaerat. Eligendi dicta tempora reiciendis mollitia sit itaque
              ipsam officia quam sequi officiis sint consectetur laudantium,
              quas dolorem repudiandae reprehenderit aut.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              quaerat. Eligendi dicta tempora reiciendis mollitia sit itaque
              ipsam officia quam sequi officiis sint consectetur laudantium,
              quas dolorem repudiandae reprehenderit aut.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              quaerat. Eligendi dicta tempora reiciendis mollitia sit itaque
              ipsam officia quam sequi officiis sint consectetur laudantium,
              quas dolorem repudiandae reprehenderit aut.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              quaerat. Eligendi dicta tempora reiciendis mollitia sit itaque
              ipsam officia quam sequi officiis sint consectetur laudantium,
              quas dolorem repudiandae reprehenderit aut.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              quaerat. Eligendi dicta tempora reiciendis mollitia sit itaque
              ipsam officia quam sequi officiis sint consectetur laudantium,
              quas dolorem repudiandae reprehenderit aut.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              quaerat. Eligendi dicta tempora reiciendis mollitia sit itaque
              ipsam officia quam sequi officiis sint consectetur laudantium,
              quas dolorem repudiandae reprehenderit aut.
            </li>
          </ul>
        </section>
      ) : (
        <div>
         <Title text={"0-1"}/>
          <h2>Game Started!</h2>
          <main className="container m-auto">
  <section className="player1">
    <Card player="player1" unitTypeName={"sword cavalry"}unitCardimg={"y"} />
  </section>
  <section className="fogOfwar"></section>
  <section className="player2">
    <Card player="player2" unitTypeName={"sword cavalry"} />
  </section>
  <section className="player1">
    <Card player="player1" unitTypeName={"spearman"}unitCardimg={"y"} />
  </section>
  <section className="fogOfwar"></section>
  <section className="player2">
    <Card player="player2" unitTypeName={"spearman"}/>
  </section>
</main>

        </div>
      )}
    </div>
  );
}

export default CardGameUi;

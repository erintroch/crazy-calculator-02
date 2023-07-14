import Head from "next/head";
import ColorInput from "../components/colorInput";
import SliderAll from "../components/sliderAll";
import PatternContainer from "../components/patternContainer";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [color, setColor] = useState({ r: 255, g: 62, b: 118 });
  const [newColor, setNewColor] = useState(`#ff3e76`);
  const [newColorTwo, setNewColorTwo] = useState(`#2a6eff`);
  const [newColorThree, setNewColorThree] = useState(`#ffc64d`);
  const [angle, setAngle] = useState(0);
  const [angleFigOne, setAngleFigOne] = useState(0);
  const [angleFigTwo, setAngleFigTwo] = useState(0);
  const [angleFigThree, setAngleFigThree] = useState(0);
  const [margin, setMargin] = useState(5);
  const [margina, setMargina] = useState(0);
  const [amount, setAmount] = useState(3);
  const [backgroundValue, setBackgroundValue] = useState(`standard`);

  const [patternType, setPatternType] = useState("1");

  const test = "hi";

  return (
    <div className={styles.container}>
      <Head>
        <title>Crazy Calculator 2.0</title>
        <meta name="description" content="Made by Erin Troch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftMainDiv}>
          <div className={styles.arrowButton}>
            <div className={styles.arrowTop}></div>
            <div className={styles.arrowBottom}></div>
          </div>
          <div className={styles.flexInputFields}>
            <ColorInput
              value={newColor}
              onValueChange={(value) => setNewColor(value)}
              beforeInfo="Color 1"
            />
            <ColorInput
              value={newColorTwo}
              onValueChange={(value) => setNewColorTwo(value)}
              beforeInfo="Color 2"
            />
            <ColorInput
              value={newColorThree}
              onValueChange={(value) => setNewColorThree(value)}
              beforeInfo="Color 3"
            />
          </div>
          <div>
            <SliderAll
              max={360}
              value={angle}
              onValueChange={(value) => setAngle(value)}
              beforeInfo="Rotate pattern"
              afterInfo={`${angle}°`}
            />
            <SliderAll
              max={360}
              value={angleFigOne}
              onValueChange={(value) => setAngleFigOne(value)}
              beforeInfo="Rotate fig. 1"
              afterInfo={`${angleFigOne}°`}
            />
            <SliderAll
              max={360}
              value={angleFigTwo}
              onValueChange={(value) => setAngleFigTwo(value)}
              beforeInfo="Rotate fig. 2"
              afterInfo={`${angleFigTwo}°`}
            />
            <SliderAll
              max={360}
              value={angleFigThree}
              onValueChange={(value) => setAngleFigThree(value)}
              beforeInfo="Rotate fig. 3"
              afterInfo={`${angleFigThree}°`}
            />
            <SliderAll
              max={50}
              value={margin}
              onValueChange={(value) => setMargin(value)}
              beforeInfo="Increase margin"
              afterInfo={`${margin} px`}
            />
            <SliderAll
              max={50}
              value={margina}
              onValueChange={(value) => setMargina(value)}
              beforeInfo="Increase inner margin"
              afterInfo={`${margina} px`}
            />
            <SliderAll
              max={20}
              value={amount}
              onValueChange={(value) => setAmount(value)}
              beforeInfo="Increase pattern"
              afterInfo={`${amount} x ${amount}`}
            />
          </div>
        </div>
        <PatternContainer
          colorFigureOne={newColor}
          colorFigureTwo={newColorTwo}
          colorFigureThree={newColorThree}
          angle={angle}
          margin={margin}
          margina={margina}
          angleFigOne={angleFigOne}
          angleFigTwo={angleFigTwo}
          angleFigThree={angleFigThree}
          amount={amount}
        />
      </main>
    </div>
  );
}

import React, { useState } from "react";
import "./scale.css";

const Scale = ({ factor, min, max, value, onChange }) => {
  return (
    <div className="scale-container">
      <h2>{factor}</h2>
      <input
        style={{
          writingMode: "vertical-lr",
          appearance: "slider-vertical",
          width: "20px",
          height: "200px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const Scales = () => {
  const [happiness, setHappiness] = useState(80);
  const [humanRights, setHumanRights] = useState(90);
  const [racism, setRacism] = useState(10);
  const [hunger, setHunger] = useState(80);
  const [politicalRep, setPoliticalRep] = useState(90);
  const [education, setEducation] = useState(80);
  const [militarization, setMilitarization] = useState(20);
  const [lgbtRights, setLgbtRights] = useState(50);
  const [religions, setReligions] = useState(90);
  const [economy, setEconomy] = useState(90);

  const handleHappinessChange = (e) => {
    const value = parseFloat(e.target.value);
    setHappiness(value);
    setHumanRights(20 + 0.4 * value);
    setRacism(90 - 0.8 * value);
    setHunger(55 + 0.4 * value);
    setPoliticalRep(0.9 * value);
    setEducation(60 + 0.03 * value);
    setMilitarization(40 - 0.1 * value);
    setLgbtRights(50 + 0.2 * value);
    setReligions(40 + 0.08 * value);
    setEconomy(60 + 0.15 * value);
  };

  const handleHumanRightsChange = (e) => {
    const value = parseFloat(e.target.value);
    setHumanRights(value);
    setHappiness(60 + 0.1 * value);
    setRacism(85 - 0.7 * value);
    setHunger(80 - 0.6 * value);
    setPoliticalRep(5 + 0.7 * humanRights);
    setEducation(70 + 0.2 * humanRights);
    setMilitarization(80 - 0.25 * value);
    setLgbtRights(10 + 0.7 * value);
    setReligions(40 + 0.3 * value);
    setEconomy(0.3 * value + 40);
  };

  const handleRacismChange = (e) => {
    const value = parseFloat(e.target.value);
    setRacism(value);
    setHappiness(80 - 0.7 * racism);
    setHumanRights(15 + 100 - value);
    setHunger(40 + 0.35 * value);
    setPoliticalRep(90 - 0.6 * value);
    setEducation(80 - 0.12 * value);
    setMilitarization(50 + 0.1 * value);
    setLgbtRights(80 - 0.75 * value);
    setReligions(50 + 0.24 * value);
    setEconomy(80 - 0.12 * value);
  };

  const handleHungerChange = (e) => {
    const value = parseFloat(e.target.value);
    setHunger(value);
    setHappiness(80 - 0.3 * value);
    setHumanRights(80 - 0.6 * value);
    setRacism(10 + 0.5 * value);
    setPoliticalRep(40 - 0.15 * value);
    setEducation(80 - 0.15 * value);
    setMilitarization(50 + 0.02 * value);
    setLgbtRights(50);
    setReligions(80 - 0.08 * value);
    setEconomy(90 - 0.4 * value);
  };
  const handleLgbtRightsChange = (e) => {
    const value = parseFloat(e.target.value);
    setLgbtRights(value);
    setHappiness(80 + 0.08 * value);
    setHumanRights(60 + 0.2 * value);
    setRacism(40 - 0.25 * value);
    setHunger(23 - 0.01 * value);
    setPoliticalRep(70 + 0.22 * value);
    setEducation(80 + 0.01 * value);
    setMilitarization(50);
    setReligions(80 - 0.4 * value);
    setEconomy(90 + 0.02 * value);
  };

  const handlePoliticalChange = (e) => {
    const value = parseFloat(e.target.value);
    setPoliticalRep(value);
    setHappiness(80 + 0.3 * value);
    setHumanRights(80 + 0.12 * value);
    setRacism(90 - 0.6 * value);
    setHunger(80 - 0.13 * value);
    setEducation(60 + 0.3 * value);
    setMilitarization(50 - 0.02 * value);
    setLgbtRights(70 + 0.12 * value);
    setReligions(70 + 0.15 * value);
    setEconomy(90 + 0.02 * value);
  };

  const handleEducationChange = (e) => {
    const value = parseFloat(e.target.value);
    setEducation(value);
    setHappiness(70 + 0.2 * value);
    setHumanRights(60 + 0.3 * value);
    setRacism(80 - 0.6 * value);
    setHunger(50 + 0.4 * value);
    setPoliticalRep(60 + 0.25 * value);
    setMilitarization(50 + 0.03 * value);
    setLgbtRights(50 + 0.2 * value);
    setReligions(80 - 0.3 * value);
    setEconomy(20 + 0.7 * value);
  };

  const handleMilitarizationChange = (e) => {
    const value = parseFloat(e.target.value);
    setMilitarization(value);
    setHappiness(80 - 0.2 * value);
    setHumanRights(80 - 0.4 * value);
    setRacism(10 + 0.3 * value);
    setHunger(40 + 0.3 * value);
    setPoliticalRep(70 - 0.04 * value);
    setEducation(70 + 0.08 * value);
    setLgbtRights(50 - 0.01 * value);
    setReligions(60 + 0.12 * value);
    setEconomy(80 - 0.6 * value);
  };

  const handleReligionChange = (e) => {
    const value = parseFloat(e.target.value);
    setReligions(value);
    setHappiness(85 + 0.1 * value);
    setHumanRights(80 - 0.12 * value);
    setRacism(10 + 0.4 * value);
    setHunger(40 - 0.02 * value);
    setPoliticalRep(70 - 0.08 * value);
    setEducation(70 - 0.15 * value);
    setMilitarization(50 + 0.12 * value);
    setLgbtRights(80 - 0.4 * value);
    setEconomy(80 + 0.04 * value);
  };

  const handleEconomyChange = (e) => {
    const value = parseFloat(e.target.value);
    setEconomy(value);
    setHappiness(60 + 0.25 * value);
    setHumanRights(40 + 0.3 * value);
    setRacism(80 - 0.12 * value);
    setHunger(40 - 0.25 * value);
    setPoliticalRep(60 + 0.02 * value);
    setEducation(60 + 0.3 * value);
    setMilitarization(50 + 0.15 * value);
    setLgbtRights(50 + 0.02 * value);
    setReligions(80 + 0.06 * happiness);
  };

  return (
    <div className="scales-container">
      <div className="row">
        <div className="scale-column">
          <Scale
            factor="Happiness"
            min={0}
            max={100}
            value={happiness}
            onChange={handleHappinessChange}
          />
          <Scale
            factor="Human Rights"
            min={0}
            max={100}
            value={humanRights}
            onChange={handleHumanRightsChange}
          />
          <Scale
            factor="Hunger"
            min={0}
            max={100}
            value={hunger}
            onChange={handleHungerChange}
          />
          <Scale
            factor="Education"
            min={0}
            max={100}
            value={education}
            onChange={handleEducationChange}
          />
          <Scale
            factor="Political Representation"
            min={0}
            max={100}
            value={politicalRep}
            onChange={handlePoliticalChange}
          />
        </div>
        <div className="scale-column">
          <Scale
            factor="Racism"
            min={0}
            max={100}
            value={racism}
            onChange={handleRacismChange}
          />
          <Scale
            factor="Militarization"
            min={0}
            max={100}
            value={militarization}
            onChange={handleMilitarizationChange}
          />
          <Scale
            factor="LGBT Rights"
            min={0}
            max={100}
            value={lgbtRights}
            onChange={handleLgbtRightsChange}
          />
          <Scale
            factor="Religions"
            min={0}
            max={100}
            value={religions}
            onChange={handleReligionChange}
          />
          <Scale
            factor="Economy"
            min={0}
            max={100}
            value={economy}
            onChange={handleEconomyChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Scales;

import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import programStyles from "/sass/modules/_Program.module.scss";

import Menu from "../components/general/Menu";
import Footer from "../components/general/Footer";
import HeroBanner from "../components/general/HeroBanner";
import MyLoader from "../components/general/MyLoader";

import Table from "../components/program/Table";
import ScheduleButtons from "../components/program/ScheduleButtons";

export default function Program(props) {
  const [count, setCount] = useState(0);
  const [schedule, setSchedule] = useState(null);
  const [loadingSch, setLoadingSch] = useState(false);

  const [filteredM, setFilteredM] = useState();
  const [filteredJ, setFilteredJ] = useState();
  const [filteredV, setFilteredV] = useState();
  const [bandDisplay, setBandDisplayed] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [day, setDay] = useState("Monday");

  useEffect(() => {
    setLoadingSch(true);
    console.log("is loading");

    fetch(`https://foofestival.herokuapp.com/schedule`)
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data);
        setFilteredM(data.Midgard.mon);
        setFilteredJ(data.Jotunheim.mon);
        setFilteredV(data.Vanaheim.mon);
        setLoadingSch(false);
        console.log("finished loading");

        console.log(props.isLoading);
      });
  }, []);

  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetch(`https://foofestival.herokuapp.com/events`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setEvents(data);
  //     });
  // }, []);
  // console.log(events);

  if (!schedule) {
    return null;
  }

  return (
    <div className={programStyles.Program}>
      {loadingSch && <MyLoader />}
      {!loadingSch && (
        <>
          <Menu user={props.user} />

          <HeroBanner img="/img/bands_background.png" title="Program" />

          <ScheduleButtons setFilteredM={setFilteredM} setFilteredJ={setFilteredJ} setFilteredV={setFilteredV} midgard={schedule.Midgard} jotunheim={schedule.Jotunheim} vanaheim={schedule.Vanaheim} setDay={setDay} day={day} />

          <Table stage1={filteredM} stage2={filteredJ} stage3={filteredV} bandDisplay={bandDisplay} setBandDisplayed={setBandDisplayed} favourites={favourites} setFavourites={setFavourites} />

          <Footer />
        </>
      )}
    </div>
  );
}
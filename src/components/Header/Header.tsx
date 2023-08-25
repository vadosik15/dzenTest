import React, { useState, useEffect } from "react";
import Logo from '../../images/Logo.png';
import Clock from '../../images/clock.png';

type Data = {
  day: String,
  month: String,
  year: number,
  hours: String,
  minutes: String
}

export const Header = () => {



  const [time, setTime] = useState(new Date());
  const months: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const data: Data = {
    day: String(time.getDate()).padStart(2, '0'),
    month: String(time.getMonth() + 1),
    year: time.getFullYear(),
    hours: String(time.getHours()).padStart(2, '0'),
    minutes: String(time.getMinutes()).padStart(2, '0')

  }

  return (
    <header className="header">
      <img src={Logo} className="header__logo"></img>       
      <div className="header__time">
        <h3 className="header__time time__exact-day">Today</h3>
        <div className="header__time side-container">
          <p className="header__time time__day">{data.day + " " + months[+data.month] + ", " + data.year}</p>
          <img className="header__time clock-img" src={Clock}></img>
          <p className="header__time time__clock"> {data.hours + ":" + data.minutes}</p>
        </div>
      </div>
    </header>
  )
} 
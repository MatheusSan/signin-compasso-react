import React, { useContext, useState, useEffect  } from 'react';
import {Container, Row, Col } from 'styled-bootstrap-grid';
import { format, set } from 'date-fns';
import { pt } from 'date-fns/locale';
import ContentWrapper from './styles';
import { H3, H4, H6, IconTemp } from './styles';
import { useNavigate } from 'react-router-dom';
import logoBall from '../../assets/logged/logoBall.png';
import logoHeader from '../../assets/logged/LogoCompasso.png';
import iconCloud from '../../assets/logged/icon_cloud.svg';
import { Context } from '../../Context/AuthUser';

export default function Logged() {
  let navigate = useNavigate();
  const [countDown, setcountDown] = useState(60);
  const [weather, setWeather] = useState({
    hasTime: false,
  });
  const [time, setTime] = useState("- : -");
  const [date, setDate] = useState();
  const { removeLocalStorage } = useContext(Context);
  
  function logout() {
    setWeather();
    removeLocalStorage();
    navigate('/');
  }
  
  function reset() {
    setcountDown(60);
  }

  function getDataTimes(){
    const now = new Date();
    const formattedTime = format(
      now, 
      "HH':'mm",
      {locale: pt}
      );
      setTime(formattedTime);
    const formattedDate = format(
      now, 
      "EEEE',' dd 'de' MMMM 'de' y",
      {locale: pt}
      );
    setDate(formattedDate);
  }
  
  React.useEffect(() => {
    if(countDown <= 0) {
      logout();
    }
    const timer =
    countDown > 0 && setInterval(() => {
      setcountDown(countDown - 1);
      getDataTimes();
    }
    , 1000);
    return () => clearInterval(timer);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDown]);

  useEffect( () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI("Porto Alegre")}&appid=b12cc455611ace8c995bf56a99e68964&units=metric&lang=pt_br`)
      .then( (response) => response.json())
      .then(
        (results) =>  {
          if(results.cod === 200){
            setWeather({
              hasTime: true,
              temp: results.main.temp.toFixed(0),
              tempIcon: results?.weather[0]?.icon,
            });
          }
        }
      )
  }, [weather]);

  return(
    <ContentWrapper>
      <Container fluid>
        <Row className="header" mdAlignItems="center">
          <Col md={4} sm={6} xs={6}>
            <div className="logo-header">
              <img src={ logoHeader } alt="logo-header"/>
            </div>
          </Col>
          <Col md={4} sm={6} xs={6} className="header-end" hiddenMdUp="true">
              <H4 className="city">Porto Alegre - RS</H4>
              <div>
                <IconTemp src={ weather.hasTime ? `http://openweathermap.org/img/wn/${weather.tempIcon}@2x.png` : iconCloud } 
                 alt="icon-temp"/>
                <span className="degree">{weather.temp}º</span>
              </div>           
            </Col>
          <Col md={4} sm={12} className="header-mid">
            <span className="timer">{time}</span>
            <H3>{date}</H3>
          </Col>
          <Col md={4} className="header-end" hiddenMdDown="true">
            <H4>Porto Alegre - RS</H4>
            <div>
              <IconTemp src={ weather.hasTime ? `http://openweathermap.org/img/wn/${weather.tempIcon}@2x.png` : iconCloud } 
              alt="icon-temp"/>
              <span className="degree">{weather.temp}º</span>
            </div>           
          </Col>
        </Row>

        <Row className="body" alignItems="end">
          <Col md={5} className='body-left' hiddenMdDown="true">
            <img src={ logoBall } alt="logo-ball"/>
          </Col>
          <Col md={7} sm={12} className="body-right">
            <div className="content-text-first">Our mission is</div>
            <div className="sub-text">Nossa missão é</div>
            <div className="content-text">to transform the world</div>
            <div className="sub-text">transformar o mundo</div>
            <div className="content-text">building digital experiences</div>
            <div className="sub-text">construindo experiências digitais</div>
            <div className="content-text">that enable our client’s growth</div>
            <div className="sub-text">que permitam o crescimento dos nossos clientes</div>
          </Col>
        </Row>

        <Row className="footer" alignItems="center">
          <Col md={5} className="footer-first">
            <H6>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</H6>
          </Col>
          <Col md={4} className="footer-mid">
            <Row alignItems="center">
              <Col col={5} className="refresh">
                <H4>Application</H4>
                <H4>refresh in</H4>
              </Col>
              <Col col={3} className="countDown">
                <div>
                  <span>{countDown}</span>
                  <H4>seconds</H4>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3} sm={12} className="footer-end">
              <button className="button-refresh refresh" onClick={() => reset()}>
                <div>Continuar</div>
                <div>Navegando</div>
              </button>
              <button className="button-logout logout" onClick={() => logout()}>Logout</button>
          </Col>
        </Row>

      </Container>
    </ContentWrapper>
  )
}
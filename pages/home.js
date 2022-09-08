import React from 'react';
<<<<<<< HEAD
import Navbar from '../components/Navbar/Navbar';

const home = () => {
  return (
    <div>
      <Navbar />
    </div>
=======
import Footer from '../components/Footer/Footer';
import Features from '../components/Features/Features';

import { faLightbulb, faSmile } from '@fortawesome/free-regular-svg-icons';

import { faWind, faLeaf } from '@fortawesome/free-solid-svg-icons';

const dataItems = [
  {
    icon: faLightbulb,
    title: 'Estimula tu mente',
    text: 'Promueve la mejora de tu percepción, paciencia y creatividad',
    id: '1',
  },
  {
    icon: faWind,
    title: 'Mejora el ecosistema',
    text: 'La calidad del aire que te rodea se verá beneficiado',
    id: '2',
  },
  {
    icon: faLeaf,
    title: 'Conexión con la naturaleza',
    text: 'lleva tu ambiente a un plano distinto',
    id: '3',
  },
  {
    icon: faSmile,
    title: 'Tranquilidad',
    text: 'Relaja y reduce el estrés ocasionado po la vida diaria',
    id: '4',
  },
];

//En este caso hay que mandar la clase de fontawesome para ver si

const home = () => {
  return (
    <>
      <Features dataItems={dataItems} />
      <Footer />
    </>
>>>>>>> develop
  );
};

export default home;

import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная страница</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/' element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
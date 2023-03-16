import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './NotFound/NotFound';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="character/:idCharacter" element={<Details />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

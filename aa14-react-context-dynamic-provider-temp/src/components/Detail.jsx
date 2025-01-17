import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Detail = () => {
  const horoscopesObj = useContext(HoroscopeContext);
  const { sign } = useContext(HoroscopeContext)

  return (
    <div className='details'>
      <img
        src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'
        alt=''
      />
      <h2>Capricorn</h2>
      <h4>Element: </h4>
      <h4>Traits: </h4>
    </div>
  );
};

export default Detail;

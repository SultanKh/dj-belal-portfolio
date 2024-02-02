import React from 'react';

import './App.css'
import Cover from './components/cover-section/Cover';
import BioSection from './components/bio-section/BioSection';
import ImageGallery from './components/image-gallery/ImageGallery';
import CallMe from './components/call-me/CallMe';
const belalDescription = 'انا المعلم بلال, عايش بالجبال وسكنت ورا التلال. عملت جاهدا على اتمام أفراح الناس. استخدمت اجمل الاغاني واحدثها بكل احساس'

const RAMI_DESCRIPTION = 'انا  الرامي دمي دايما حامي, بالافراح كلياتني همه واخلاق عاليه'
function App() {

  return <div className='app'>
    <Cover />

      <BioSection index={1} djName='DJ Belal' djDescription={belalDescription}/>
      <BioSection index={2} djName='DJ Rami' djDescription={RAMI_DESCRIPTION}/>

      <div className='section-title' dir='rtl'>
        <h1>من خدماتنا</h1>
      </div>
    <div className='section'>

      <ImageGallery />
    </div>

    <div className='section-2'>
      <CallMe />

    </div>

  </div>

}

export default App;

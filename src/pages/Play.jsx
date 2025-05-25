import './css/Play.scss';
import { Link } from 'react-router-dom';
import NavBar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import img1 from '@/assets/play/1.png';
import vid1 from '@/assets/play/2.mp4';
import vid2 from '@/assets/play/6.mp4';
import img2 from '@/assets/play/7.png';
import img3 from '@/assets/play/8.png';
import img4 from '@/assets/play/11.png';
import img5 from '@/assets/play/12.png';
import img6 from '@/assets/play/3.png';
import img7 from '@/assets/play/4.png';
import vid3 from '@/assets/play/5.mp4';
import img8 from '@/assets/play/13.png';
import img9 from '@/assets/play/14.png';
import img10 from '@/assets/play/10.png';
import vid4 from '@/assets/play/9.mp4';

function Play() {
  return (
    <div className="background-container">
      <NavBar />
      <main className="page-content play-content">
        <div className='grid'>
          <Link to={`/play/1`} className='img1 select'>
            <img src={img1} className='maximum' alt="" />
          </Link>
          <video src={vid1} className='vid1' autoPlay muted loop playsInline />
          <video src={vid2} className='vid2' autoPlay muted loop playsInline />
          <img src={img2} className='img2' alt="" />
          <Link to={`/play/scutoid`} className='img3 select'>
            <img src={img3} className='maximum' alt="" />
          </Link>
          <Link to={`/play/architerrax`} className='img4 select'>
            <img src={img4} className='maximum' alt="" />
          </Link>
          <img src={img5} className='img5' alt="" />
        </div>
        <div className='grid'>
          <img src={img6} className='img6 select' alt="" />
          <img src={img7} className='img7 select' alt="" />
          <video src={vid3} className='vid3' autoPlay muted loop playsInline />
          <img src={img8} className='img8 select' alt="" />
          <img src={img9} className='img9 select' alt="" />
          <img src={img10} className='img10' alt="" />
          <video src={vid4} className='vid4' autoPlay muted loop playsInline />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Play;
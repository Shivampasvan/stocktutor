import './App.css';
import First from './Components/First';
import Third from './Components/Third';
import Fourth from './Components/Fourth';
import Testimonials from './Components/Testimonials';
import CourseCarousel from './Components/CourseCarousel';

function App() {
  return (
    <>
      <First/>
      <CourseCarousel/> 
      <Third/>
      <Fourth/> 
      <Testimonials/>
    </>
  );
}

export default App;

import './App.css';
import photo from './photo.jpeg';

function App() {
  const skills = ["Html+Css", "JavaScript", "Web Design", "Git and Github", "React", "Redux"];
  const myName = "Milen Petrov";
  const myDescription = "Hobby programer looking to land my first job as a Front-End developer.";
  const bgColors = {
    "Html+Css": "#81b71a",
    "JavaScript": "#00B1E1",
    "Web Design": "#37BC9B",
    "Git and Github": "#8CC152",
    "React": "#E9573F",
    "Redux": "#F6BB42",
  };
  const emoji = "🌟";

  return (
    <div className="main">
      <div className='card'>
        <img className='avatar' src={photo} alt="Profile" />
        <div className='data'>
          <h2>{myName}</h2>
          <p>{myDescription}</p>
          <span className='skill-list'>
            {skills.map((skill) => {
              return <span className='skill' style={{ backgroundColor: bgColors[skill] }}>{skill}{emoji}</span>
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;

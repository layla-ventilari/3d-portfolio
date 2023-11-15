import { Link } from "react-router-dom";

export const HomeInfo = ({ currentStage }) => {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        
      </Link>
    </div>
    );
  }

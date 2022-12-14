import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';


function LightSwitch() {
  return (
    <div className="light-switch day">
      <div className="on" >DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
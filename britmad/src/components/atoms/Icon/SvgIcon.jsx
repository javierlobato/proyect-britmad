import PropTypes from 'prop-types';
import { ReactComponent as Search } from './search.svg';
import { ReactComponent as Heart } from './heart.svg';
import { ReactComponent as Arrow } from './arrow.svg';
import { ReactComponent as Info } from './info.svg';
import { ReactComponent as Flag } from './flag.svg';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Logobritmad } from './logobritmad.svg';


const iconComponents = {
  search: Search,
  heart: Heart,
  arrow: Arrow,
  info: Info,
  flag: Flag,
  logo: Logo,
  logobritmad:Logobritmad,
};

const SvgIcon = ({ type }) => {
  const IconComponent = iconComponents[type];

  return IconComponent ? <IconComponent /> : null;
};

SvgIcon.propTypes = {
  type: PropTypes.oneOf(['search', 'heart', 'arrow', 'info', 'flag', 'logo']).isRequired,
};

export default SvgIcon;











  




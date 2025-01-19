// component
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const icon = (name) => <Iconify icon={name} width={30} height={30} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon("material-symbols:home-rounded"),
  },
  {
    title: 'Paani',
    path: '/dashboard/paani',
    icon: icon('mdi:water'),
  },
  {
    title: 'Bijli',
    path: '/dashboard/bijli',
    icon: icon('ant-design:thunderbolt-outlined'),
  },
  {
    title: 'Gas',
    path: '/dashboard/gas',
    icon: icon('mdi:gas'),
  },
  {
    title: 'Solar',
    path: '/dashboard/solar',
    icon: icon('ph:solar-panel-fill'),
  },
  {
    title: 'Login',
    path: '/login',
    icon: icon('mdi:account-check'),
  },
];

export default navConfig;

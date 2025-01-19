import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DarkModeProvider } from './theme/darkMode';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';
import { NotificationProvider } from './utils/Notifcation'
// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <NotificationProvider>
        <BrowserRouter>
        <DarkModeProvider>
          <ThemeProvider>
            <ScrollToTop />
            <StyledChart />
            <Router />
          </ThemeProvider>
          </DarkModeProvider>
        </BrowserRouter>
      </NotificationProvider>
    </HelmetProvider>
  );
}

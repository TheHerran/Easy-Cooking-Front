import { GlobalStyle } from "./styles/globalStyles";
import { themes } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { GlobalThemeContext } from "./Providers/models/theme/theme";
import { useContext } from "react";
import RoutesApp from "./routes";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify'
import { Slide } from 'react-toastify';

function App() {
  const { currentTheme } = useContext(GlobalThemeContext);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <>
        <GlobalStyle />
        <RoutesApp />
        <ToastContainer
          theme={currentTheme}
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
        />
      </>
    </ThemeProvider>
  );
}

export default App;

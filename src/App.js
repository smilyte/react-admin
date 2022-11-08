import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'

function App() {
  const [theme, colorMode] = useMode();
  
  return (
  <ColorModeContext.ThemeProvider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app">
          <main className="content">

          </main>
        </div>
    </ThemeProvider>
    </ColorModeContext.ThemeProvider>
  );
}

export default App;

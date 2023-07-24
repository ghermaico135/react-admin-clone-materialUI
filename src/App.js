/** @format */

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Themes";
import TopBar from "./scenes/global/TopBar";

function App() {
	const [colorMode, theme] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				{/* rest css to default */}
				<CssBaseline />
				<div className="app">
					<main className="content">
						<TopBar />
					</main>
				</div>
				;
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;

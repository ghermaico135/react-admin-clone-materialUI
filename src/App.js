/** @format */

/* eslint-disable */
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/TopBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashBoard/dashboard";
import SideBar from "./scenes/global/SideBar";

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<SideBar />
					<main className="content">
						<TopBar />
						<Routes>
							<Route path="/" element={<Dashboard />} />
						</Routes>
					</main>
				</div>
				;
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;

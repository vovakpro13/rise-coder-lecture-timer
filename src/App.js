import {Box} from "@mui/material";
import Header from "./components/Header";
import Router from "./router";


function App() {
    return (
        <Box className="wrapper">
            <div className="twinkling"></div>

            <Box zIndex={2} position="relative">
                <Box display="flex" justifyContent="center">
                    <Box>
                        <Header>RISE CODER</Header>

                        <Router/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default App;

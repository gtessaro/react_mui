import {Box, createTheme, Stack} from "@mui/material"
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";                  
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

function App() {

  const [mode, setMode] =useState("dark")

  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box color="text.secondary">
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;

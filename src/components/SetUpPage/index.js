import React from 'react';
import {Box, Button, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useApp} from "../../providers/AppProvider";
import {Modules} from "../../constants/modules";
import {Lectures} from "../../constants/lectures";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {useNavigate} from "react-router-dom";
import {Routes} from "../../router/routes";

const SetUpPage = () => {
    const navigate = useNavigate();
    const {module, lecture, startTime, setAppData} = useApp();

    const handleSetStartTime = (startTime) => {
        setAppData((prev) => ({...prev, startTime}))
    }

    const handleSetModule = (e) => {
        setAppData((prev) => ({...prev, module: e.target.value}))
    }

    const handleSetLecture = (e) => {
        const {target: {value: index}} = e
        module && setAppData((prev) => ({...prev, lecture: {number: index, title: Lectures[module][index]}}))
    }

    const handleStart = () => {
      navigate(Routes.Home)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h4" color="common.white">Set Up Lecture Info</Typography>

                <Box sx={{background: '#fffffff0'}} p="30px 50px 50px" mt={4} borderRadius={3}>
                    <Box display="flex" gap={2}>
                        <Box>
                            <InputLabel id="module">Module</InputLabel>

                            <Select
                                labelId="module"
                                value={module}
                                onChange={handleSetModule}
                            >
                                {Object.values(Modules).map((moduleName) => (
                                    <MenuItem value={moduleName}>{moduleName}</MenuItem>
                                ))}
                            </Select>
                        </Box>

                        <Box flex={1}>
                            <InputLabel id="lecture">Lecture</InputLabel>

                            <Select
                                fullWidth
                                labelId="lecture"
                                value={lecture.number}
                                onChange={handleSetLecture}
                            >
                                {Object.values(Lectures[module] || {}).map((lectureName, i) => (
                                    <MenuItem value={i}>#{i + 1} {lectureName}</MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Box>

                    <Box mt={2}>
                        <InputLabel id="lecture_start">Lecture starts at</InputLabel>

                        <MobileTimePicker
                            labelId="lecture_start"
                            value={startTime || null}
                            onChange={handleSetStartTime}
                        />
                    </Box>

                    <Box mt={5}>
                        <Button
                            fullWidth
                            disabled={!module || !lecture || !startTime}
                            size="large"
                            variant="contained"
                            onClick={handleStart}
                        >
                            Start Timer
                        </Button>
                    </Box>
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default SetUpPage;
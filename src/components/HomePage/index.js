import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {useApp} from "../../providers/AppProvider";
import {Modules} from "../../constants/modules";
import {ReactComponent as JSIcon} from "../../assets/images/javascript-logo.svg"
import dayjs from "dayjs";
import {Navigate} from "react-router-dom";
import {Routes} from "../../router/routes";
import duration from 'dayjs/plugin/duration'
import ManRun from '../../assets/images/run.jpg'

dayjs.extend(duration)

const TechLogos = {
    [Modules.Git]: <></>,
    [Modules.JS]: <JSIcon/>
}
const HomePage = () => {
    const {module, lecture, startTime = {}} = useApp();

    const [timeLeft, setTimeLeft] = useState(null);
    const [isBegin, setBegin] = useState(false);

    const calculateLeftTime = () => {
        const diff = startTime?.diff(dayjs());

        if (diff <= 0) {
            return setBegin(true);
        }

        setTimeLeft(dayjs.duration(diff).format('HH:mm:ss'))
    }

    useEffect(() => {
        calculateLeftTime()

        const id = setInterval(calculateLeftTime, 1000)

        return () => {
            clearInterval(id)
        }
    }, [startTime])

    if (!module || !lecture || !startTime) return <Navigate to={Routes.SetUp}/>

    return (
        <>
            <Box display="flex" alignItems="flex-end" gap={3}>
                <Box height={100}>{TechLogos[module]}</Box>
                <Box>
                    <Typography variant="h5" color="common.white">[{module}] Lecture #2</Typography>
                    <Typography variant="h3" color="common.white">{lecture?.title}</Typography>
                </Box>
            </Box>

            <Box mt={isBegin ? '8%' : "20%"} width="100%" display="flex" alignItems="center" flexDirection="column">
                {isBegin ?
                    <>
                        <Typography variant="h1" color="common.white">Let's Goooo!</Typography>
                        <img height={300} src={ManRun} alt=""/>
                    </>
                    :
                    <>
                        <Typography variant="h1" color="common.white">{timeLeft}</Typography>
                        <Typography variant="h5" color="common.white">Start</Typography>
                    </>
                }
            </Box>
        </>
    );
};

export default HomePage;
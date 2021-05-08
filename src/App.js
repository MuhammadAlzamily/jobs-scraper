import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Intro from './components/Intro';
import Selection from './components/Selection';
import SingleJob from './components/SingleJob';


export default function App() {
    const [jobs, setJobs] = useState([]);
    const FetchJobs = async () => {
        const resp = await axios.get("http://localhost:5000");
        setJobs(resp.data);
    }
    useEffect(() => {
        FetchJobs()
    }, [])
    return (
        <div>
            <ChakraProvider>
                <Intro />
                {jobs.map(x => {
                    return <SingleJob jobtitle={x.title} joblink={x.joblink} />
                })}
            </ChakraProvider>
        </div>
    )
}

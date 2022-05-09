import { StyledLadingWrapper } from './wrapper.styled';
import useFetch from "react-fetch-hook";
import { useEffect, useState } from 'react';
import LoaderComponent from '../loader/loader.component';
import { LaunchesComponent } from '../launches/launches.component'

export function WrapperComponent() {

    const { isLoading: isLoadingLaunches, data: launches = [] } = useFetch("https://api.spacexdata.com/v3/launches");
    const { isLoading: isLoadingRocket, data: rockets = [] } = useFetch("https://api.spacexdata.com/v3/rockets");
    const [data, setData] = useState([])

    useEffect(() => {
        if (!launches.length || !rockets.length) {
            return;
        }
        let arrayLaunch;
        let rocketsToFInd = rockets.reduce(
            (obj, item) => Object.assign(obj, { [item.rocket_id]: item }), {});
        arrayLaunch = launches.map((launch) => {
            const { flight_number, mission_name, details, launch_date_unix, rocket } = launch;
            return {
                flight_number,
                details,
                mission_name,
                launch_date_unix,
                'rocket': { ...rocket, ...rocketsToFInd[rocket.rocket_id] }
            }
        })
        setData(arrayLaunch);
    }, [launches, rockets])

    return <StyledLadingWrapper>
        {(isLoadingLaunches || isLoadingRocket) ?
            <LoaderComponent />
            : <LaunchesComponent launches={data}></LaunchesComponent>
        }
    </StyledLadingWrapper>
}

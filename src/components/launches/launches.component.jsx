import { LaunchComponent } from "./launch/launch.component";
import { LaunchesContainer } from './launches.styled';

export const LaunchesComponent = ({ launches }) => {
    return <LaunchesContainer>
        {
            launches.map((launch, index) => {
                return <LaunchComponent key={launch.flight_number + index} launch={launch} />
            })
        }

    </LaunchesContainer>
}
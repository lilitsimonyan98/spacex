import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchLaunchRequest} from '../store/launch/actions'
import {getLaunchSelector} from '../store/launch/selectors'
import {UnixTimestampToLocaleString} from '../utils/unixTimeStamp'

const LaunchDetails: React.FC = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const launch = useSelector(getLaunchSelector)
    useEffect(() => {
        dispatch(fetchLaunchRequest({id: id}))
    }, [])
    return(
        <div className='launches-details-container'>
            <h3 className='launches-details-container__header'>Launch Details</h3>
            {launch ? (
                <div className='launches-details-container__info'>
                     <div className='launches-details-container__info--logo'>
                         <img src={launch.links?.patch.small} alt="logo"/>
                     </div>
                     <h1>{ launch.name }</h1>
                     <h4>{ launch.details }</h4>
                      <ul>
                          <li>Flight number: { launch.flight_number}</li>
                          <li>Date Unix: { UnixTimestampToLocaleString(launch.date_unix)}</li>
                          <li>Upcoming: {launch.upcoming ? 'Yes' : 'No'}</li>
                      </ul>
                </div>
            ) : (<div>No results</div>)}
        </div>
    )
}
export default LaunchDetails

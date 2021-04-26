import Column from '../components/Column'
import Launch from '../components/Launch'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getErrorSelector, getLoadingSelector, getPastLaunchesSelector} from '../store/pastLaunches/selectors'
import {getUpcomingLaunchesSelector, getUpcomingLoadingSelector} from '../store/upcomingLaunches/selectors'
import {getQueryLaunchesSelector} from '../store/queryLaunches/selectors'
import {
    addUpcomingLaunchRequest,
    deleteUpcomingLaunch,
    fetchUpcomingLaunchesRequest
} from '../store/upcomingLaunches/actions'
import {addQueryLaunchRequest, deleteQueryLaunch, fetchQueryLaunchesRequest} from '../store/queryLaunches/actions'
import {fetchPastLaunchesRequest} from '../store/pastLaunches/actions'
import {useHistory} from 'react-router-dom'

const Launches = () => {
    const dispatch = useDispatch()
    const loading = useSelector(getLoadingSelector || getUpcomingLoadingSelector)
    const pastLaunches = useSelector(getPastLaunchesSelector)
    const upcomingLaunches = useSelector(getUpcomingLaunchesSelector)
    const queryLaunches = useSelector(getQueryLaunchesSelector)
    const error = useSelector(getErrorSelector)
    const history = useHistory()

    const cancelLaunch = (id: string | number) => {
        const currentLaunch = queryLaunches.find((element: any) => element.id === id)

        if (currentLaunch) {
            dispatch(addUpcomingLaunchRequest(currentLaunch))
            dispatch(deleteQueryLaunch(currentLaunch))
        }
    }

    const addLaunch = (id: string | number) => {
        const currentLaunch = upcomingLaunches.find((element: any) => element.id === id)

        if (currentLaunch) {
            dispatch(addQueryLaunchRequest(currentLaunch))
            dispatch(deleteUpcomingLaunch(currentLaunch))
        }
    }

    useEffect(() => {
        if (!pastLaunches.length) {
            dispatch(fetchPastLaunchesRequest())
        }
        if (!upcomingLaunches.length) {
            dispatch(fetchUpcomingLaunchesRequest())
        }
        if (!queryLaunches.length) {
            dispatch(fetchQueryLaunchesRequest())
        }

    }, [])
    return (
        <div className='launches-container'>
            <Column heading='Прошедшие космические полеты' onDrop={() => {
                console.log('dropping')
            }}>
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error</div>
                ) : (
                    pastLaunches.map((launch: any, index: number) => (
                        <Launch key={launch.id} id={launch.id} onClick={() => history.push(`launch/${launch.id}`)}>
                            {++index}. {launch.name}
                        </Launch>
                    ))
                )}
            </Column>
            <Column heading='Предстоящие космические полеты' onDrop={(id) => cancelLaunch(id)}>
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error</div>
                ) : (
                    upcomingLaunches.map((launch: any, index: number) => (
                        <Launch key={launch.id} id={launch.id} onClick={() => history.push(`launch/${launch.id}`)}>
                            {++index}. {launch.name}
                        </Launch>
                    ))
                )}
            </Column>

            <Column heading='Забронированные космические полеты'
                    onDrop={(id) => addLaunch(id)}>
                {queryLaunches.map((launch: any, index: number) => (
                        <Launch key={launch.id} id={launch.id} onClick={() => history.push(`launch/${launch.id}`)}>
                            {++index}. {launch.name}
                        </Launch>
                    )
                )}
            </Column>
        </div>
    )
}
export default Launches

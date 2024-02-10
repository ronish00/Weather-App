import Sunny from '../assets/sunny.svg'
import WeekItem from './WeekItem'

const WeekForcast = () => {

    const WeekItems = [
        {
            'id': 1,
            'day': 'Sun',
            'img': Sunny,
            'temp': '15'
        },
        {
            'id': 2,
            'day': 'Mon',
            'img': '',
            'temp': '15'
        },
        {
            'id': 3,
            'day': 'Tue',
            'img': '',
            'temp': '15'
        },
        {
            'id': 4,
            'day': 'Wed',
            'img': '',
            'temp': '15'
        },
        {
            'id': 5,
            'day': 'Thu',
            'img': '',
            'temp': '15'
        },
        {
            'id': 6,
            'day': 'Fri',
            'img': '',
            'temp': '15'
        },
        {
            'id': 7,
            'day': 'Sat',
            'img': '',
            'temp': '15'
        }
    ]

  return (
    <div className='mt-10'>
      <h3 className='text-2xl font-semibold'>Week Forecast</h3>
      <ul className='flex flex-wrap gap-6 mt-8'>
        {
            WeekItems.map( item => <WeekItem key={item.id} img={item.img} day={item.day} temp={item.temp} />)
        }
      </ul>
    </div>
  )
}

export default WeekForcast

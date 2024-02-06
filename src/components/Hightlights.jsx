import UV from '../assets/UV.png'
import wind from '../assets/wind.png'
import humidity from '../assets/humidity.png'
import fog from '../assets/fog.png'
import air from '../assets/air.png'
import DayNight from '../assets/day-and-night.png'
import HighlightItem from './HighlightItem'

const Hightlights = () => {

    const ItemName =[
        {
            'id' : 1,
            'img': `${UV}`,
            'name': 'UV Index',
            'unit': 'UVI'
        },
        {
            'id' : 2,
            'img':  `${wind}`,
            'name': 'Wind Status',
            'unit': 'km/h'
        },
        {
            'id' : 3,
            'img':  `${humidity}`,
            'name': 'Humidity',
        },
        {
            'id' : 4,
            'img':  `${fog}`,
            'name': 'Visibility',
            'unit': 'km'
        },
        {
            'id' : 5,
            'img':  `${air}`,
            'name': 'Air Quality',
        },
        {
            'id' : 6,
            'img':  `${DayNight}`,
            'name': 'Sunrise & Sunset',
        }
    ]

  return (
    <div>
      <h3 className='text-2xl font-semibold'>Today's Hightlights</h3>
      <ul className='flex items-center flex-wrap gap-6 mt-8 '>
        {
            ItemName.map( item => <HighlightItem key={item.id} img={item.img} name={item.name} unit={item?.unit} />  )
        }
      </ul>
    </div>
  )
}

export default Hightlights

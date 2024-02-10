

const WeekItem = ({img, day, temp}) => {
  return (
    <>
      <li className="grow">
            <div className='bg-white p-6 rounded-xl flex flex-col items-center gap-4 grow w-full'>
                <p>{day}</p>
                <img className='w-12' src={img} alt=""/>
                <p>{temp} <sup>0</sup></p>
            </div>
        </li>
    </>
  )
}

export default WeekItem

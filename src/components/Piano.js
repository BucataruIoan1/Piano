import { Keyboard } from './Keys'
import { keys } from './data';
import nextId from "react-id-generator"

export const Piano = () => {
  let keyboardsArray = [];
  for(let i = 0; i < 14; i++) {
    keyboardsArray.push(<Keyboard />)
  }

  return (
    <div className='piano'>
      <div className='piano-keys'>
        {keys.map((keyboard, index) => {
          return <Keyboard key={nextId()} letter={keyboard} classValue={index}/>
        })}
      </div>
    </div>
  )
}

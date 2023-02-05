import { Keyboard } from './MainKeyboard'
import nextId from "react-id-generator"

export const Piano = () => {
  let mainKeyboardsArray = [];
  for(let i = 0; i < 14; i++) {
    mainKeyboardsArray.push(<Keyboard />)
  }

  return (
    <div className='main-page'>
        <div className='piano'>
            <div className='piano-keyboards'>
                {mainKeyboardsArray.map((mainKeyboard, index) =>
                  <Keyboard key={nextId()} className={index}/>
                )}
            </div>
        </div>
    </div>
  )
}

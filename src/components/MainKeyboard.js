import { SecondaryKeyboard } from "./SecondaryKeyboard"

export const Keyboard = (props) => {
  return (
    <div className="keyboard-group">
      <div className='main-keyboard'>
        <SecondaryKeyboard classValue={props.className}/>
      </div>
    </div>
  )
}

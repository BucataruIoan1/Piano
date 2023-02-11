export const Keyboard = (props) => {

  let classValue = props.classValue;
  return (
    <div className={classValue === 1 ? "key black" 
    : classValue === 3 ? "key black"
    : classValue === 6 ? "key black"
    : classValue === 8 ? "key black"
    : classValue === 10 ? "key black"
    : classValue === 13 ? "key black"
    : classValue === 15 ? "key black"
    : "key white"
    }><span>{props.letter}</span></div>
  )
}

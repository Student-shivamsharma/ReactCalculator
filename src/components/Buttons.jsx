import styles from './Buttons.module.css'
function Buttons({buttons,onButtonClick}){
  return (
    <>
   {buttons.map((button,index) => (
     <button key = {index} className={styles.button} onClick={() => onButtonClick(button)}
     >{button}</button>
   ))}
    
    </>
  )
}
export default Buttons;
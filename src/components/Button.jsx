
const Button = ({ setCount, display}) => {
  const updateCount = (x) => {
    setCount((prev) => prev + x);
  }
  const isNegative = (x) => x < 0;

  return (
    <button style={{ backgroundColor: `${isNegative(display) ?  "red" : "green"}` }} 
      onClick={() => updateCount(display)} className="btn"> {!isNegative(display)?"+":""}{display}
    </button>
  )
}




export default Button
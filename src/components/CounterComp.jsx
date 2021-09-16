function CounterComp(props) {
  return (
    <div>
      <button onClick={props.increaseCount}>+</button>
      <div>{props.count}</div>
      <button onClick={props.decreaseCount}>-</button>
    </div>
  );
}
export default CounterComp;

const ErrorExample = () => {
  let count = 0
  const goUp = () => {
    count += 1
    console.log(count)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={goUp}>Up</button>
    </div>
  )
};

export default ErrorExample;

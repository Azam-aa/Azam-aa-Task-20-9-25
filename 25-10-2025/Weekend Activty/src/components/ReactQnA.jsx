import React from 'react';

const ReactQnA = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-3">React Hooks & State QnA</h3>
      
      <p><strong>Q5:</strong> What happens if you call setState() inside useEffect() without a dependency array?</p>
      <p>Ans: It causes an infinite loop because useEffect runs after every render.</p>
      
      <p><strong>Q6:</strong> Why can’t you use hooks inside loops or conditions?</p>
      <p>Ans: Hooks must be called in the same order on every render. Loops or conditions break this order.</p>
      
      <p><strong>Q7:</strong> What happens if you pass an empty dependency array to useEffect?</p>
      <p>Ans: The effect runs only once after the first render (like componentDidMount).</p>
      
      <p><strong>Q8:</strong> Difference between useRef and useState?</p>
      <p>Ans: useRef stores mutable values that don’t trigger re-render. useState updates state and triggers re-render.</p>
      
      <p><strong>Q9:</strong> Difference between Redux and Context API?</p>
      <p>Ans: Redux is a full state management library with actions/reducers. Context API is simpler and built-in for sharing state.</p>
    </div>
  )
}

export default ReactQnA;

import React, {useState, useEffect} from "react";

function computeInitialState() {
    console.log('...calculations')
    return Math.trunc(Math.random()*20)
}

const Xooks = (props)=>{
   const [counter, setCounter] = useState(computeInitialState)

    const increase = () => {
           setCounter((prevCounter) => {
            return prevCounter + 1
        })
        setCounter(prev => prev + 1)
    };

    const decrease=()=>{
        setCounter(counter-1)
    }

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })

    function updateTitle() {
        setState((prev)=>{
            return {
                ...prev,
                title: 'Counter2'
            }
         })
    }

    // useEffect(()=>{
    //     console.log('render')
    //  })

    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({x:0, y:0})


    useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
     }, [type])

    useEffect(()=>{
        console.log('componenDidMount')
        window.addEventListener('mousemove', (e)=>{
            return setPos({
                x: e.clientX,
                y: e.clientY
            })
         })
     }, [pos])

    return (<div>
    <h1>Xooks</h1>
    <h3>Count: {counter}</h3>
    <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>

    </div>
      
            <button onClick={updateTitle}>Change title</button>
            <pre>{JSON.stringify(state, 0, 2)}</pre>
 
            <div>
                <h2>Recourse: {type} </h2>
                <button onClick={()=>{setType('users')}}>Users</button>
                <button onClick={()=>{setType('todos')}}>ToDo</button>
                <button onClick={()=>{setType('posts')}}>Posts</button>
                {/*<pre>{JSON.stringify(data, 0, 2)}</pre>*/}
                <pre>{JSON.stringify(pos, 0, 2)}</pre>
            </div>
    
    
    </div>
        
        
    )
}



 export default Xooks
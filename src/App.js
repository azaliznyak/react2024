import React, {useRef, useState} from 'react';

const App = () => {
    // const [count, setCount]=useState(0);

    // const name=useRef();
    // const age=useRef()

    // const save = (e) => {
    //   e.preventDefault()
    //     // console.log(name.current.value);
    //     // console.log(age.current.value);
    //     console.log(e.target.name.value);
    //     console.log(e.target.age.value);
    //
    // }

    const [user,setUser]=useState({})

    console.log(user);

    const handler = (e) => {
      e.preventDefault()
        setUser(prevState => ({...prevState, [e.target.name]:e.target.value}))
    }

    return (
        <div>
            {/*<form onSubmit={save} >*/}
                {/*<input type="text" placeholder={'name'} ref={name}/>*/}
                {/*<input type="text" placeholder={'age'} ref={age}/>*/}

                {/*<input type="text" placeholder={'name'} name={'name'}/>*/}
                {/*<input type="text" placeholder={'age'} name={'age'}/>*/}




                {/*<button>save</button>*/}

            {/*</form>*/}

            <form>
                <input type="text" placeholder={'name'} name={'name'} onChange={handler}/>
                <input type="text" placeholder={'age'} name={'age'} onChange={handler}/>
                <button>save</button>
            </form>
            
            
            {/*<div>count: {count}</div>*/}
            {/*/!*<button onClick={()=>setCount(count+1)}>inc</button>*!/*/}
            {/*<button onClick={()=>setCount(prevState => prevState+1)}>inc</button>  //better choice*/}
          
        </div>
    );
};

export {App};
import React, { useEffect, useState } from 'react';
import Table from './components/Table'

function App() {
    /*const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);
    */
    return (
        /*<div>
            {data ? data : 'Loading...'}
        </div>*/
        <div>
            <Table/>
        </div>
    );
}

export default App;

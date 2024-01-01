import {useEffect, useState} from "react";

function App() {
    const [personData, setPersonData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPersonData([data])
            })
            .catch((err) => console.error(err))
    }, []);

    return (
        <div className="App">
            {personData?.map((obj) => {
                return (
                    <ul key={obj.id}>
                        <li>Id: {obj.id}</li>
                        <li>Name: {obj.name}</li>
                        <li>IsDev: {obj.isDeveloper ? 'true' : 'false'}</li>
                    </ul>
                )
            })}
        </div>
    );
}

export default App;

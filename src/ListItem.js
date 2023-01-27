import React from "react";



const ListItem = () => {

    const [data, setData] = React.useState([])
    const [state, setState] = React.useState()
    const [searchIndex, setSearchIndex] = React.useState()

    const ref = React.useRef(null);


    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then((response) => response.json())
            .then((actualData) => setData(actualData))
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    React.useEffect(() => {

        let search_data_index = data.findIndex(x => parseInt(x.id) === parseInt(state));

        if (search_data_index >= 0) {

            setSearchIndex(search_data_index);
            document.getElementById(search_data_index).scrollIntoView();
        } else {

            setSearchIndex(undefined);
        }
    }, [state])

    return (
        <div style={{ margin: 10 }}>
            <h1 style={{ textAlign: "center" }}>albums List</h1>
            <input
                type="text"
                placeholder='Search By The Id'
                style={{ height: 40, width: "25%", fontSize: 18 }}
                onChange={(e) => {

                    setState(e.target.value)
                }}
            />
            <div
                style={{
                    borderStyle: "double",
                    padding: 10
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        borderStyle: "solid",
                        margin: 20
                    }}
                >
                    <h3 style={{ width: "15%" }}>ID</h3>
                    <h3 style={{ width: "15%" }}>USER ID</h3>
                    <h3 style={{ width: "50%" }}>TITLE</h3>
                </div>

                <div
                    ref={ref}
                    style={{ height: 400, overflow: "scroll" }}
                >
                    {
                        data.map((item, index) =>
                            <div
                                id={index}
                                key={index}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                    borderStyle: "solid",
                                    borderWidth: 0.5,
                                    margin: 20,
                                    height: 50,
                                    alignItems: 'center',
                                    backgroundColor: searchIndex === index ? 'red' : '#fff'
                                }}>
                                <p style={{ padding: 0, margin: 0, width: "15%" }}>{item?.id}</p>
                                <p style={{ padding: 0, margin: 0, width: "10%" }} >{item?.userId}</p>
                                <p style={{ padding: 0, margin: 0, width: "50%" }}>{item?.title}</p>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>
    )
};

export default ListItem;
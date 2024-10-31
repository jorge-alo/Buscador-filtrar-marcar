import { useMemo } from "react"
import "../styles/input.css"




export const Input = ({ inputValue, setInputValue, filterData, handleSelectedInput }) => {

    const handleOnChange = (e) => {
        setInputValue(e.target.value)

    }
    const getPosition = (inputValue, title) => {
        const index = title.toLowerCase().indexOf(inputValue.toLowerCase())
        const left = title.slice(0,index)
        const rigth = title.slice(index + inputValue.length)
        const center = title.slice(index, index + inputValue.length)

        return {
            left,
            center,
            rigth
        }
    }

    const filterColor = useMemo(
        () => filterData.map((item) => getPosition(inputValue, item.title)),
        [inputValue, filterData]
    )

    
    return (
        <>
            <div className="container-input">
                <input
                    className="input"
                    type="text"
                    value={inputValue}
                    onChange={handleOnChange}
                />
                <div className="container-item">
                    {
                        inputValue !== "" &&
                        filterColor.map((item,index) => (
                        <a  
                            className="item-input" 
                            onClick={() => handleSelectedInput(filterData[index].title)} 
                            key={filterData[index].id}
                            >

                            {item.left}
                            <span className="item-span">{item.center}</span>
                            {item.rigth}</a>))

                    }
                </div>
            </div>
        </>
    )
}

import { useMemo, useState } from "react"
import { Boton } from "./components/Boton"
import { Input } from "./components/Input"
import { Lista } from "./hooks/Lista"
import "./styles/BuscadorApp.css"
export const BuscadorApp = () => {
    const [filter, setFilter] = useState([])
    const { people, calendario, emails } = Lista()
    const [inputValue, setInputValue] = useState("")
    const [seleccionado, setSeleccionado] = useState("")

    const filterData =  useMemo(() => {
        
        let data = []
        switch (filter) {
          
            case "people":
                data = people
                break;
            case "calendario":
                data = calendario
                break;
            case "emails":
                data = emails
                break;
            default:
                data = [...people, ...calendario, ...emails]              
        }

        return data.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
    },[inputValue,filter, people, calendario, emails])

    const handleSelectedInput = (titulo) => {
        setSeleccionado(titulo)
    }
    return (
        <>
           <div className="container-app">
            <div>
            <Boton
                setFilter={setFilter}
            ></Boton>
            </div>
          <p>Usted ha seleccionado: {seleccionado}</p>
            <Input
                inputValue = {inputValue}
                setInputValue = {setInputValue}
                filterData = {filterData}
                handleSelectedInput={handleSelectedInput}
            ></Input>
           </div>
        </>
    )
}

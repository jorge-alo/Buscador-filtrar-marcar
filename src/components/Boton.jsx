
import "../styles/Boton.css"


export const Boton = ({setFilter}) => {
   
   
    const handleClick = (e)=> {
        setFilter(e.target.name)
    }
   

    return (
        <>
            <button
                name="all"
                onClick={handleClick}
            >
                All</button>

            <button
                name="people"
                onClick={handleClick}
            >
                People</button>

            <button
                name="calendario"
                onClick={handleClick}
            >
                Calendario</button>

            <button
                name="emails"
                onClick={handleClick}
            >
                Email</button>

           
        </>
    )
}

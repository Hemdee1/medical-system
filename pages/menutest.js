import React from 'react'

const MenuTest = (props) => {
    const initState = <Appointment />
    
    const reducer = (state, action) => {
      switch (action.type) {
        case 'Appointment':
          return <Appointment />
        case 'BookApp':
          return <BookAppointment />
        
        default:
           throw new Error
      }

    }

    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <aside>
            <section>
                <p>Hekllo</p>
                <p>hello 1</p>
                <p>Helllo 2</p>
            </section>
            

            <section>
                {state}
            </section>
        </aside>
    )
}

export default MenuTest

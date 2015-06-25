import React from 'react'
import EmpleadoRow from '../empleado-row'

class EmpleadoList extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {
            this.props.listado.map((empleado) => {
              return <EmpleadoRow key={ empleado.id }
                                  name={ empleado.fullName }
                                  picture={ empleado.pic }
                                  title={ empleado.title }
                                  department={ empleado.department } />
            })
          }
        </ul>
      </div>
    )
  }
}

export default EmpleadoList

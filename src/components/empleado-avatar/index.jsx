import React from 'react'

class EmpleadoAvatar extends React.Component {
  render() {

    let picture = this.props.picture;

    return (
      <figure className="media-left">
        <img className="media-object" width="64px" src={`http://taller-angular.carlosazaustre.es/asset/${this.props.picture}`} />
      </figure>
    )
  }
}

export default EmpleadoAvatar

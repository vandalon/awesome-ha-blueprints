import React from 'react'
import Zigbee2MQTTRequirement from './requirements/controllers/Zigbee2MQTTRequirement'
import ZHARequirement from './requirements/controllers/ZHARequirement'
import DeCONZRequirement from './requirements/controllers/DeCONZRequirement'
import CustomRequirement from './requirements/CustomRequirement'
import ControllerRequirement from './requirements/hooks/ControllerRequirement'

const requirements = {
  zigbee2mqtt: Zigbee2MQTTRequirement,
  zha: ZHARequirement,
  deconz: DeCONZRequirement,
  controller: ControllerRequirement,
}

function Requirement(props) {
  const Component = props.id ? requirements[props.id] : CustomRequirement
  return (
    <Component
      name={props.name}
      required={props.required}
      refers={props.refers}
    >
      {props.children}
    </Component>
  )
}

export default Requirement

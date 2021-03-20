import React from 'react'
import { Navigation } from './style'

interface Props {
  
}
export const NavigationComponent: React.FC<Props> = () => {
return <>
  <Navigation className="light">
    <a href="#home">Brand link</a>
  </Navigation>
</>
}
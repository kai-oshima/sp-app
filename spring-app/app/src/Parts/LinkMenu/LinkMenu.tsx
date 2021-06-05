import {Link} from "react-router-dom";
import "./LinkMenu.scss"

interface Props {
  path: string,
  value: string,
}

export const LinkMenu = (props : Props) => {
  return (
    <li className='link-menu'>
      <Link to={props.path} >{props.value}</Link>
    </li>
  )
}
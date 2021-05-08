interface Props {
  label: string,
  value: string,
  onChange: (value: string, callBack: Function) => void,
  callBack: Function
}

export const PassTextBox = (props : Props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="password"
        value={props.value}
        onChange={event => props.onChange(event.target.value, props.callBack)}
      />
    </div>
  )
}
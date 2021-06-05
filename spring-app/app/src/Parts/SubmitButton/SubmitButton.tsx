interface Props {
  value : string,
  onClick: (event : any) => void,
}

export const SubmitButton = (props : Props) => {
  return (
    <button 
      className="submit-button" 
      onClick={event => {props.onClick(event)}}>
      {props.value}
    </button>
  );
}

SubmitButton.defaultProps = {
  onClick: ()=>{}
}
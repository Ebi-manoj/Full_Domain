import ReactDOM from 'react-dom';
const Tooltip = () => {
  return (
    <div>
      <h1>This will render outside</h1>
    </div>
  );
};

export const Portals = () => {
  return ReactDOM.createPortal(<Tooltip />, document.getElementById('portal'));
};

const ChangeIcon = ({ isUp }) =>
  isUp ? (
    <img src="/images/icon-up.svg" alt="up" />
  ) : (
    <img src="/images/icon-down.svg" alt="down" />
  );

export default ChangeIcon;

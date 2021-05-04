export default function Creatures(props) {
  return (
    <div>
      <p>
        <strong>Name:</strong>
        <br /> {props.name}
      </p>
      <p>
        <strong>Description:</strong>
        <br /> {props.description}
      </p>
    </div>
  );
}

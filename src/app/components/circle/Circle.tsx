import styles from "./circle.module.css";

interface CircleProps {
  [key: string]: any; // Adjust the type as per your props structure
}

const Circle = (props: CircleProps) => {
  return (
    <div className="circle" style={{...props}} />
  )
}
export default Circle
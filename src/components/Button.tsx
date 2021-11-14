import styles from '../assets/styles/button.module.css';

interface ButtonProps {
  text: string,
  onClick: () => void,
}

export default function Button(props: ButtonProps) {
  return (
    <div className={styles.button} {...props}>
      {props.text}
    </div>  
  )
}

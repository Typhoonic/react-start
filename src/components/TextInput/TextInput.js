import styles from './TextInput.module.scss';

const TextInput = props => {
    return (<input type="text" className={styles.input} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />);
};

export default TextInput;
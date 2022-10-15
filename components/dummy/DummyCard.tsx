import styles from "./DummyCard.module.scss";

export interface Props {
    text: string;
}

export default function DummyCard({ text }: Props) {
    return <div className={styles.container}>{text}</div>;
}

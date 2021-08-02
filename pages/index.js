import { Container } from '@chakra-ui/layout';
import Image from 'next/image';
import gradientSvg from '../public/filehost-index-gradient.svg';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.gradientBackground}>
    <Image src={gradientSvg} className={styles.gradientSvg} />
    <h1>snake cat</h1>
    </div>
  )
}

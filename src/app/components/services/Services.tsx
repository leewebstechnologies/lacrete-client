
import Link from "next/link";
import styles from "./services.module.css";
import {services} from "@/app/data";
import Image from "next/image";

const Services = () => {
  console.log(services);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What we can do</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((item) => (

          <Link passHref key={item.id} href={`/products/${item.name}`}>
            <div className={styles.item}>
              <span className={styles.cat}>{item.title}</span>
              <div className={styles.media}>
              {item.video ? (
                <video controls src={item.video} autoPlay loop muted className={styles.video} />
              ) : (
                <Image src={item.photo} alt="photo" width={100} height={100} layout="responsive" className="photo" />
              )}

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Services
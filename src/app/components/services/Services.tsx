import Link from "next/link";
import styles from "./services.module.css";
import { services } from "@/app/data";
import Image from "next/image";

const Services = () => {
  console.log(services);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What we can do</h1>
      <h1 className={styles.subtitle}>Services we can help you with</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link passHref key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <div className={styles.desc}>{service.desc}</div>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    controls
                    src={service.video}
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                  />
                ) : (
                  <Image
                    src={service.photo}
                    alt="photo"
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                    className={styles.image}
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Services;

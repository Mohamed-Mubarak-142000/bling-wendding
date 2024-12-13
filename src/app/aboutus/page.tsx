import About from "@/components/about/About";
import AboutCard, { ICategory } from "@/components/about/card/AboutCard";
import AboutHero from "@/components/about/heroabout/AboutHero";
import styles from "./pagestyle.module.css";
function page() {
  const category = [
    {
      image: "/16.webp",
      title: "WEDDING",
    },
    {
      image: "/about2.webp",
      title: "EVENTS",
    },
    {
      image: "/about3.webp",
      title: "COUPONS",
    },
  ];
  return (
    <div className={styles.main_about}>
      <div className={styles.top_cont}></div>
      <AboutHero />
      <About />
      <section className={styles.category_grid}>
        {category.map((item: ICategory, index: number) => (
          <AboutCard category={item} key={index} />
        ))}
      </section>
    </div>
  );
}

export default page;

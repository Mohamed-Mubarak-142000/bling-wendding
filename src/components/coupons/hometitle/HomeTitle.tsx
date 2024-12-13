import Link from "next/link";
import React from "react";
import styles from "./homeTitle.module.css";
function HomeTitle() {
  return (
    <div className={styles.title_Container}>
      <h1>
        {/* CATCH YOUR COUPON !<Link href="/#contactus">LET&apos;S CONNECT</Link> */}
        CATCH YOUR COUPON !
        <Link href="/payment">Get Your Coupon Booklet Today</Link>
      </h1>
    </div>
  );
}

export default HomeTitle;

import React, { useMemo } from "react";
import styles from "./othercoupons.module.css";
import { Tables } from "../../../../database.types";
import CardCoupon from "../cardcoupon/CardCoupon";

function OtherCoupons({ data }: { data: Tables<"vendors">[] }) {
  // Memoize the rendering of CardCoupon components
  const couponList = useMemo(() => {
    return data?.map((item, index) => (
      <CardCoupon
        key={index}
        images={item.images || []}
        discount={item.discount}
      />
    ));
  }, [data]); // Recalculate when 'data' changes

  return <section className={styles.coupons_main_grid}>{couponList}</section>;
}

export default OtherCoupons;

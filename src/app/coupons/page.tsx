"use client";
import React, { useEffect, useState } from "react";
import HeroCoupons from "@/components/coupons/herogridgallery/page";
import { createClient } from "@/supabase/client";
import { Tables } from "../../../database.types";
import HomeTitle from "@/components/coupons/hometitle/HomeTitle";
import OtherCoupons from "@/components/coupons/couponssection/OtherCoupons";

function Page() {
  const supabase = createClient();
  const [vendors, setVendors] = useState<Tables<"vendors">[] | null>();
  
  useEffect(() => {
    const fetchCoupons = async () => {
      const { data, error } = await supabase.from("vendors").select();
      if (error) {
        console.error("Error fetching price lists:", error);
      } else {
        setVendors(data);
      }
    };
    fetchCoupons();
  }, [supabase]);
  return (
    <div className="main_Margin">
      <HeroCoupons
        data={(vendors || []).filter((_, index) =>
          [4, 5, 7, 16].includes(index)
        )}
      />
      <HomeTitle />
      <OtherCoupons
        data={
          vendors?.filter((_, index) => ![4, 5, 16, 7].includes(index)) || []
        }
      />
    </div>
  );
}

export default Page;

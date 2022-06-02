import { useRef, useState } from "react";
import CampingOptions from "./CampingOptions";
import Summary from "../../form_components/Summary";
import form2Styles from "/sass/modules/_Form2.module.scss";
import BillingInfo from "../../BillingInfo";
export default function FormStep2(props) {
  //  const endpoint = "https://kea2semester-e216.restdb.io/rest/foofest";
  //   const key = "615d83068597142da1745455";

  return (
    <>
      {console.log(props.step)}

      <section className={form2Styles.checkout_grid}>
        <CampingOptions {...props} />
        <Summary {...props} />
      </section>
    </>
  );
}

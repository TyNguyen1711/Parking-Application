import Image from "next/image";
import { add } from "@parking-application/sample-lib";
export default function Home() {
  return (
    <>
      <div>Hello</div>
      <div>2 + 3 = {add(2, 3)}</div>
    </>
  );
}

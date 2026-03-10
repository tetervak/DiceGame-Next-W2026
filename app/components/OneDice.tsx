import Image from "next/image";

type OneDiceProps = {
  side: number;
};

export function OneDice({ side }: OneDiceProps) {
  return <Image
      src={`/images/dice/side_${side}.png`}
      width={50}
      height={50}
      alt={"side " + side}/>;
}

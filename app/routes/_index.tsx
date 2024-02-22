import type { MetaFunction } from "@remix-run/node";
// import { Button } from "~/../@/components/ui/button"
import Background from "~/myComponents/Background";
import LinkTo from "~/myComponents/LinkTo";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Background style="bg-[#ECF4FF] flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-[#252525]">Welcome to the Hell </h1>
      <LinkTo paDonde="/pos" text="Go to POS" style="bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl" />
    </Background>
  );
}

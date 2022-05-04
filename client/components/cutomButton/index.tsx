import { Link, Button } from "@nextui-org/react";

export default function CustomButton({
  text,
  link,
}: {
  text: String;
  link: String | undefined;
}) {
  const buttonContent =
    link != undefined ? (
      <Link css={{ color: "white" }} href={`/${redirectLink}`}>
        {text}
      </Link>
    ) : (
      text
    );
  return (
    <Button
      css={{
        background: "$brown",
        color: "white",
        fontSize: "$title",
        "&:hover": {
          background: "$brown",
          color: "white",
        },
      }}
      auto
      light
    >
      {buttonContent}
    </Button>
  );
}

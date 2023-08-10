import { EventAvailable, EventSoon } from "./disponibility";

export const CardEvento = ({
  imgApi = "",
  title = "",
  linkEvento = "",
  data = "",
  imgSTXVeryLarge = "",
  internalState = "",
}) => {
  // console.log({data})
  if (internalState === "soon") {
    return (
      <article className="text-center pt-4">
        <EventSoon
          imgApi={imgApi}
          imgSTXVeryLarge={imgSTXVeryLarge}
          title={title}
        />
      </article>
    );
  }
  return (
    <article className="text-center pt-4">
      <EventAvailable
        linkEvento={linkEvento}
        imgApi={imgApi}
        imgSTXVeryLarge={imgSTXVeryLarge}
        title={title}
        disponibility={data.disponibility}
      />
    </article>
  );
};

import { EventAvailable, EventCancel, EventSoon } from "./disponibility";

export const CardEvento = ({ imgApi = "", title = "", linkEvento = "", data = "", imgSTXVeryLarge = "", internalState = "" }) => {
  // console.log({data})
  // console.log({imgApi})
  
  // console.log(data.name.toLowerCase().includes('dale') ? data : "")
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
  if (internalState === "cancel") {
    return (
      <article className="text-center pt-4">
        <EventCancel
          linkEvento={linkEvento}
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

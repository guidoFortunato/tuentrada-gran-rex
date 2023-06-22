import { CardEvento } from "./"

export const EventosHome = ({eventos}) => {
  return (
    <>
        {eventos.map((item) => (
          <CardEvento
            linkEvento={item.slug + "/" + item.id}
            img={item.image}
            status={item.state}
            title={item.name}
            key={item.id}
            disabled={item.disabled}
            reason={item.reason}
            disponibility={item.disponibility}
            data={item}
          />
        ))}
    </>
  )
}

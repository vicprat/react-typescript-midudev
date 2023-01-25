import { Sub } from "./types" 

interface Props {
    subs: Array<Sub>
}

export default function List ({subs}: Props) {
    //Para usar renderList y su tipado
    const renderList = (): JSX.Element[] => {
        return subs.map(sub => {
            return(
              <li key={sub.nick}>
                <img src={sub.avatar} alt={sub.nick} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description}</p>
              </li>
            )
          })}
    
    
    return(
        <ul>
        {renderList()}
      </ul>
    )
}
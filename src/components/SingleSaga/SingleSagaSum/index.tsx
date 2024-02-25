import { ISagas } from "../../../types";

interface props {
  saga:ISagas|null
}

export default function SingleSagaSum({saga}:props) {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mb-9">
        <figure className="w-1/3">
          <img
            src={`${saga?.picture}`}
            alt="Album"
          />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">Informations principales :</h2>
          <ul className=" [&_li]:p-2 
                          [&_li]:border-2 
                          [&_li]:rounded-box    
                          [&_li]:mb-2    
                          [&_li]:bg-base-200    
          ">
              <li>Créateur : <span className="font-bold">{`${saga?.creator}`}</span> </li>
              <li>Date de sortie du premier titre : <span className="font-bold">{`${saga?.date_de_creation}`}</span></li>
          </ul>
        </div>
      </div>
    </>
  );
}

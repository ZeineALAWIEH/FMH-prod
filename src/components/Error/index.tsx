import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="text-center py-9 h-screen bg-no-repeat bg-contain bg-center bg-[#170d32]" 
          style={{backgroundImage: "url('/src/assets/images/404.jpg')"}} >

      <div className="text-center bg-slate-100/[.5] text-[#0e4067]
                      w-full py-3 mx-auto 
                      drop-shadow-[0_35px_35px_rgba(255,255,255,0.9)]
                      " >
        <h1 className="text-5xl font-bold ">Oops !</h1>
        <p className="text-2xl font-bold mt-3">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <p className="text-lg">
          Vous pouvez retourner à la page d'accueil en cliquant sur le bouton
          ci-dessous :
        </p>
        <Link to={`/`}>
        <button className="btn btn-accent mt-3 text-lg text-[#0e4067]">Retour à la page d'accueil</button>{" "}
      </Link>
      </div>

    </div>
  );
}

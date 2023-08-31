import FormularioLogin from "../Components/FormularioLogin";
import "../Styles/Login.css";
function Login() {
  return (
    <div>
      <div className="max-w-[785px] min-w-[320px]">
        <div className="main">
          <div className="flex justify-center items-center border-none rounded-[0.625rem] shadow-md">
            <div className="lef-box">
              <h1 className="text-[40px] font-bold tracking-[0.125rem] mb-4 text-center">
                EnergyTrack Unac
              </h1>
              <p className="text-left mb-4">
                ¡Bienvenido a EnergyTrack, la plataforma inteligente para
                visualizar y analizar los consumos diarios de iluminación en el
                Bolivar Rave!
              </p>
              <p className="text-left mb-4">
                Aquí encontrarás información actualizada para potenciar la
                eficiencia energética de nuestra universidad. Únete a nosotros
                en este emocionante recorrido hacia un campus más sostenible.
              </p>
              <p className="text-left">¡Nos complace mucho contar contigo!</p>
            </div>
          </div>
          <div>
            <FormularioLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

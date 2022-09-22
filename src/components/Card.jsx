import  propTypes  from "prop-types"

function Card({ data }) {

  const {
    location,
    current,
  } = data

  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
      <div className="text-center ">
        <span className="block text-xl font-bold text-slate-700">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">
          {`${location.region}, ${location.country}`}
        </span>
      </div>

      <div className="font-bold text-slate-700 flex justify-center mt-4 mb-2">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-3xl mt-3">°C</span>
      </div>

      <div className="flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt="meather icon" />
        <span className="font-medium text-slate-700">{current.condition.text}</span>
      </div>
    </div>
  )
}

export default Card

Card.protoType = {
  data: propTypes.object,
}.isRequired
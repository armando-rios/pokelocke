type Props = {
  data: {
    name: string;
    id: number;
    types: string[];
  };
};

const PokemonCard = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center p-4 gap-2 border rounded-xl w-80">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
        className="w-fit"
      />
      <h1 className="text-2xl text-center font-bold p-2 rounded-xl w-full">
        {data.name}
      </h1>
      <div className="flex gap-2">
        {data.types.map((type) => {
          return (
            <div className="p-2 text-sm font-semibold border rounded-xl">
              {type.toUpperCase()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonCard;

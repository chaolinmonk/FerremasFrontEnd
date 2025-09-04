export default function Admin(){
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1 bg-blue-200 p-4">
        Columna grande
      </div>
      <div className="col-span-4 bg-green-200 p-4">
        Columna pequeña
      </div>
    </div>
  );
}
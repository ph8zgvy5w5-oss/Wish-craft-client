export default function ActiveFilter({children, onClick}) {
  return (
    <div className="mt-2">
      <button onClick={onClick} className="bg-amber-950 text-white font-bold py-2 px-4 rounded-2">{children}</button>
    </div>
  )
}
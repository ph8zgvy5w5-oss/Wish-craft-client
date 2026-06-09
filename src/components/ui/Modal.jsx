export default function Modal({children}){
  return(
    <div className="w-full h-0">
      <div className="absolute z-50 box-shadow bg-white p-4 rounded-6">{children}</div>
    </div>
  )
}

export default function FooterNavigation({ array, title }: any) {
  return (
    <div className="flex justify-start footer-info">
      <div className="info-nav">
        <span className="font-bold weight-[800]">{title}</span>
        <ul className="leading-[17px] pt-[6px]">
          {
            array.map((item: any, index: number) => (
              <li key={item.id} className={`${index === array.length - 1 ? "pt-[6px]" : "py-[6px]"} hover:cursor-pointer`}>{item.title}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

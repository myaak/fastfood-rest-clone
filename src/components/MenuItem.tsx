
interface Props {
  imageSrc: string,
  title: string,
  price: Number
}

export default function MenuItem({ imageSrc, title, price }: Props) {
  return (
    <div className="md:w-[270px] md:h-[394px] flex p-[10px] rounded-[25px] shadow-[0_5px_20px_0_rgba(0,0,0,.07)] md:mr-[20px] md:mb-[20px] menu-item-container">
      <div className=" w-full">
        <div className="flex flex-col md:w-[240px] md:h-[240px] md:text-[17px]">
          <div className="item-image">
            <img className="w-full h-full object-cover" src={imageSrc} alt="123" />
          </div>
          <div className="flex flex-col gap-[25px] item-content">
            <div className="item-info flex w-full justify-center pt-[5px] md:h-[40px]">
              <h1>{title}</h1>
            </div>
            <div className="price ml-[10px] w-full text-[18px] font-bold weight-[700]">
              от {price.toString()} ₽
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}



const FooterInput = () => {
  return (
    <div className="">
      <form onSubmit={(event) => {
        event?.preventDefault()
      }}>
      <div className="flex flex-col gap-[10px]">
        <span className="font-bold">Подписывайтесь на рассылку</span>
        <div className="flex flex-col gap-[10px]">
          <div className="flex bg-[#f4f4f4] h-[40px] w-[500px] rounded-[25px]">
          <input className="bg-[#f4f4f4] ml-[15px] focus:outline-0 w-[375px]" type="text" placeholder="Введите адрес эл.почты"/>
            <input type="submit" value="Подписаться" />
          </div>
          <div className="flex items-center">
            <input className="mr-[10px] w-[24px] h-[24px] rounded-[25px]" type="checkbox" />
            <span>Соглашаюсь на обработку персональных данных*</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px]">* Настоящим я свободно, своей волей и в своем интересе даю согласие на то, что...</span>
            <a className=" text-[13px] text-[#adadad] underline">Показать соглашение</a>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default FooterInput


import {map} from '../assets'

interface Props {
    lang : string
}

export default function Welcome({lang}:Props) {
    return(
        <div className="flex flex-wrap items-center pb-[15px] mb-0 delivery-wrap w-full">
        <svg viewBox="0 0 41 32" xmlns="http://www.w3.org/2000/svg" className="delivery__logo md:w-[70px] md:h-[56px] w-[49px] h-[39px] md:mb-[19px]"><g fill="none" fillRule="evenodd" transform="translate(10.125 4)"><ellipse cx="10.375" cy="23.091" fill="#f1f1f1" rx="10.375" ry="1.03"></ellipse><path d="M10.375 0C4.989 0 .625 4.211.625 9.405c0 6.51 7.501 13.747 9.75 13.747s9.75-7.236 9.75-13.747c0-5.194-4.364-9.405-9.75-9.405" fill="#db0007"></path><path d="M10.375 13.794c-2.513 0-4.55-1.965-4.55-4.389s2.037-4.389 4.55-4.389 4.55 1.965 4.55 4.39-2.037 4.388-4.55 4.388" fill="#fff"></path></g></svg>
                <h1 className="flex justify-start font-bold text-[26px] md:text-[40px]  md:mb-[20px] md:weight-[700]">{`${lang == 'RU' ? `${'Приходи к нам'}` : `${'Welcome to us'}`}`}</h1>
            <div className="flex justify-center mt-[15px] mb-[10px]">
                <button className="flex items-center justify-center py-[4px] pr-[15px] pl-[9px] bg-delivery min-h-[38px] w-auto h-auto rounded-full  md:mb-[15px] md:ml-[25px] md:h-[43px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[32px] h-[32px]" viewBox="0 0 32 32"><path fillRule="evenodd" d="M16 4.75c3.774 0 7.458 3.06 7.458 6.834 0 3.172-1.348 5.94-2.745 8.981C19.2 23.862 17.347 27.75 16 27.75s-3.199-3.888-4.714-7.185c-1.397-3.04-2.744-5.809-2.744-8.98 0-3.776 3.683-6.835 7.458-6.835zm0 1.75c-2.988 0-5.708 2.423-5.708 5.084 0 2.638 1.105 5.04 2.385 7.818l.2.433c.562 1.224 2.13 4.635 3.123 5.867.993-1.232 2.56-4.643 3.123-5.867l.2-.433c1.28-2.779 2.385-5.18 2.385-7.818 0-2.66-2.72-5.084-5.708-5.084zM16 9a3 3 0 110 6 3 3 0 010-6zm0 1.75c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25 1.25-.561 1.25-1.25-.561-1.25-1.25-1.25z"></path></svg>
                    <span className="text-left block whitespace-normal text-[13px]">{`${lang == 'RU' ? `${'Выбрать предприятие, чтобы увидеть актуальные цены'}` : `${'Choose restaurant to see actual prices'}`}`}</span>
                </button>
            </div>
        </div>

    )
}
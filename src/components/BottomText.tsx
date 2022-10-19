
interface Props{
    lang:string
}

const BottomText = ({lang}:Props) => {
    return(
        <>
            <p>
                {lang == 'RU' ? `${'Цены и ассортименты продуктов на сайте указаны для выбранного вами региона и могут отличаться в конкретном предприятии.'}` 
                : 
                `${'Prices and product collection on website mentioned for your own region and may be different in specified place.'}`}
            </p>
            <p>
                {lang == 'RU' ? `${'Наличие продуктов и цену уточняйте в выбранном предприятии.'}`
                :
                `${'Products availability and their price ask in specified place'}`}
            </p>
        </>
    )
}

export default BottomText
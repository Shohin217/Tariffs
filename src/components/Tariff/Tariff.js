import React from 'react'

export default function Tariff(props) {
    const socialsImg = [
        'https://msk.tele2.ru/api/media/asset?mediaId=m220005', 
        'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
        'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
        'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
        'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
        'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
        'https://msk.tele2.ru/api/media/asset?mediaId=m1680033'
    ]
    const socials = socialsImg.map(o => <img src={o} alt="Social_Img"/>).reverse()
    
    let tariffElement = <></>;
    if (props.noMounthlyFee) {
        tariffElement = (
            <>
                <div>
                {props.bestSeller && <img src="https://msk.tele2.ru/api/media/asset?mediaId=m1310027" className='best_seller' alt="" />}
                    <p className='tariff_name'>{props.tariffName}</p>
                    <p className='tariff_price'>{props.tariffPrice}</p>
                    <p className='tariff_R'>₽</p>
                    <p className='tariff_mounth'>{props.tariffDays}</p>
                </div>
                <div className='tariff_GB'>
                    {props.gbUnlim ?  
                        <p className='tariff_gb'><b>БЕЗЛИМИТНЫЙ ИНТЕРНЕТ</b></p> :
                        <p className='tariff_gb'><b>{props.gb}</b> {props.mbAct ? 'МБ' : 'ГБ'}</p>
                    }
                    {props.social && <div className='tariff_social'> <p>{props.unlimSocials}</p>{socials}</div>}
                </div>
                <div className='tariff_minutes'>
                    {props.minutesAct && 
                        <p className='minutes'><b>{props.minutes}</b> мин.</p>}
                    {props.unlimMinutes && <p className='unlim_minutes'>+ безлимит на Tele2 России</p>}
                </div>
                
                <div className='tariff_sms'>
                    {props.smsAct && <p><b>{props.sms}</b> SMS</p>}
                </div> 
                <div className='tariff_bay'>
                    <button className='tariff_byBtn'>{props.bayBtn}</button>
                    {props.tariffSettings && 
                        <div className='tariff_settings'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-mQrxQVBwtvmPWBLCL8Z6qFFC2nxiDqwM51QHYwniToAs2B8&s' alt="Settings_img"/>
                            <p> Настроить тариф</p>
                        </div>
                    }
                </div> 
            </>
        )
    } else {
        tariffElement = (
            <>
                <div>
                    <p className='tariff_name'>{props.tariffName}</p>
                    <p>Без абонентской платы</p>
                </div>
                <div className='tariff_bay'>
                    <button className='tariff_byBtn'>{props.bayBtn}</button>
                    {props.tariffSettings && 
                        <div className='tariff_settings'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-mQrxQVBwtvmPWBLCL8Z6qFFC2nxiDqwM51QHYwniToAs2B8&s' alt="Settings_img"/>
                            <p> Настроить тариф</p>
                        </div>
                    }
                </div> 
            </>
        )
    }

    return (
         <li className='tariff__item clearfix'>
            {tariffElement}
         </li>
    )
}

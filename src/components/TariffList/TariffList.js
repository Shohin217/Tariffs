import React from 'react'
import Tariff from '../Tariff/Tariff'
export default function TariffList() {
    
    const tariffs = [
        {
            tariffName: 'Везде онлайн', 
            noMounthlyFee: true,
            tariffPrice: 500, 
            tariffDays: '/месяц', 
            bestSeller: true,
            gb: 40, 
            gbUnlim: false, 
            unlimSocials: '+безлимитные', 
            social: true,
            minutes: 500, 
            minutesAct: true, 
            unlimMinutes: true,
            smsAct: true,
            sms: 50, 
            bayBtn: 'Купить SIM',
        },
        {
            tariffName: 'Мой онлайн', 
            noMounthlyFee: true,
            tariffPrice: 400, 
            tariffDays: '/месяц', 
            gb: 15, 
            unlimSocials: '+безлимитные', 
            social: true,
            minutes: 500,
            minutesAct: true,  
            unlimMinutes: true,
            bayBtn: 'Купить SIM',
            tariffSettings:true
        },
        {
            tariffName: 'Мой онлайн+', 
            noMounthlyFee: true,
            tariffPrice: 700, 
            tariffDays: '/месяц', 
            gb: 30, 
            unlimSocials: '+безлимитные', 
            social: true,
            minutes: 800,
            minutesAct: true,  
            unlimMinutes: true,
            bayBtn: 'Купить SIM',
            tariffSettings:true
        },
        {
            tariffName: 'Мой разгавор', 
            noMounthlyFee: true,
            tariffPrice: 200, 
            tariffDays: '/месяц', 
            gb: 2, 
            unlimSocials: '+безлимитные', 
            minutes: 200, 
            minutesAct: true, 
            unlimMinutes: true,
            bayBtn: 'Купить SIM',
            tariffSettings:true
        },
        {
            tariffName: 'Мой Tele2', 
            noMounthlyFee: true,
            tariffPrice: 7, 
            tariffDays: '/день',
            gb: 5, 
            unlimSocials: '+безлимитные', 
            minutes: 500,
            unlimMinutes: true,
            bayBtn: 'Купить SIM',
            tariffSettings:true
        },
        {
            tariffName: 'Безлимит', 
            noMounthlyFee: true,
            tariffPrice: 650, 
            tariffDays: '/месяц',
            gbUnlim: true, 
            unlimSocials: '+безлимитные', 
            minutes: 500,
            minutesAct: true, 
            unlimMinutes: true,
            smsAct: true,
            sms: 50, 
            bayBtn: 'Купить SIM',
        },
        {
            tariffName: 'Премиум', 
            noMounthlyFee: true,
            tariffPrice: 1500, 
            tariffDays: '/месяц', 
            gb: 50,
            unlimSocials: '+безлимитные', 
            social: false,
            minutes: 2000,
            minutesAct: true, 
            unlimMinutes: true,
            smsAct: true,
            sms: 500, 
            bayBtn: 'Купить SIM',
        },
        {
            tariffName: 'Классический', 
            bayBtn: 'Купить SIM',
            tariffSettings: true
        },
        {
            tariffName: 'Интернет для устройств', 
            bayBtn: 'Купить SIM',
        },
        {
            tariffName: 'Интернет для вещей', 
            noMounthlyFee: true,
            tariffPrice: 100, 
            tariffDays: '/месяц', 
            gb: 300,
            mbAct: true,
            minutes: 30, 
            minutesAct: true, 
            smsAct: true,
            sms: 100, 
            bayBtn: 'Купить SIM',
        },
    ];
    return (
        <>
            <h1>Тарифы</h1>
            <ul>
                {tariffs.map(o => <Tariff {...o}/> )}
            </ul>
        </>
    )
}

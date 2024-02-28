export enum TICKET {
    full_lindy,
    full_lindy_performance,
    full_solo,
    full_solo_performance,
    party
}

export type TicketInfo = {
    type: TICKET
    nameCn: string
    nameEn: string
    rulesCn: string[]
    rulesEn: string[]
    price: string
}

export const ticketInfos: TicketInfo[] = [
    {
        type: TICKET.full_lindy,
        nameCn: '林迪舞中高级',
        nameEn: 'Lindy Hop Inter-Adv Track',
        rulesCn: [
            '5小时课程',
            '3晚舞会',
            '建议舞龄1-3年',
        ],
        rulesEn: [
            '5 Hrs',
            '3 Nights Party',
            '1-3 years’ dancing experience required'
        ],
        price: '￥1680'
    },
    {
        type: TICKET.full_solo,
        nameCn: '爵士单人舞中高级',
        nameEn: 'Solo Jazz Inter-Adv Track',
        rulesCn: [
            '5小时课程',
            '3晚舞会',
            '建议舞龄1-3年',
        ],
        rulesEn: [
            '5 Hrs',
            '3 Nights Party',
            '1-3 years’ dancing experience required'
        ],
        price: '￥1680'
    },
    {
        type: TICKET.full_lindy_performance,
        nameCn: '林迪舞表演班',
        nameEn: 'Lindy Hop Performance',
        rulesCn: [
            '6小时课程',
            '3晚舞会',
            '建议舞龄3年以上',
        ],
        rulesEn: [
            '6 Hrs',
            '3 Nights Party',
            '3 years’ dancing experience required',
        ],
        price: '￥1780'
    },
    {
        type: TICKET.full_solo_performance,
        nameCn: '爵士单人舞表演班',
        nameEn: 'Solo Jazz Performance',
        rulesCn: [
            '6小时课程',
            '3晚舞会',
            '建议舞龄3年以上',
        ],
        rulesEn: [
            '6 Hrs',
            '3 Nights Party',
            '3 years’ dancing experience required',
        ],
        price: '￥1780'
    },

    {
        type: TICKET.party,
        nameCn: '舞会通票',
        nameEn: 'Party Pass',
        rulesCn: [
            '3晚舞会',
            '无单日票',
        ],
        rulesEn: [
            '3 Nights Party',
            'No Ticket For Single Day'
        ],
        price: '￥880'
    },
]
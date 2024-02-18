import bannerInstructors from '@/assets/images/banner/instructors.jpg'
import bannerMusic from '@/assets/images/banner/music.jpg'
import bannerCompetition from '@/assets/images/banner/competition.jpg'
import bannerVenues from '@/assets/images/banner/venues.jpg'
import bannerSchedule from '@/assets/images/banner/schedule.jpg'
import bannerTickets from '@/assets/images/banner/tickets.jpg'

export enum PATH {
    HOME = '/home',
    INSTRUCTORS = '/instructors',
    MUSIC = '/music',
    COMPETITION = '/competition',
    VENUES = '/venues',
    SCHEDULE = '/schedule',
    TICKETS = '/tickets',
}

export default [
    {
        nameCn: '首页',
        nameEn: 'HOME',
        path: PATH.HOME
    },
    {
        nameCn: '教师介绍',
        nameEn: 'INSTRUCTORS',
        path: PATH.INSTRUCTORS,
        banner: bannerInstructors
    },
    {
        nameCn: '关于音乐',
        nameEn: 'MUSIC',
        path: PATH.MUSIC,
        banner: bannerMusic
    },
    {
        nameCn: '关于比赛',
        nameEn: 'COMPETITION',
        path: PATH.COMPETITION,
        banner: bannerCompetition
    },
    {
        nameCn: '场地介绍',
        nameEn: 'VENUES',
        path: PATH.VENUES,
        banner: bannerVenues
    },
    {
        nameCn: '活动日程',
        nameEn: 'SCHEDULE',
        path: PATH.SCHEDULE,
        banner: bannerSchedule
    },
    {
        nameCn: '课程及报名',
        nameEn: 'CLASS & TICKETS',
        path: PATH.TICKETS,
        banner: bannerTickets
    },
]
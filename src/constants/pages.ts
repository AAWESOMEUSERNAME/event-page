import bannerInstructors from '@/assets/images/banner/instructors.jpg'
import bannerMusic from '@/assets/images/banner/music.jpg'
import bannerCompetition from '@/assets/images/banner/competition.jpg'
import bannerVenues from '@/assets/images/banner/venues.jpg'
import bannerSchedule from '@/assets/images/banner/schedule.jpg'
import bannerTickets from '@/assets/images/banner/tickets.jpg'
import bannerInstructorsMB from '@/assets/images/banner/instructors_mb.jpg'
import bannerMusicMB from '@/assets/images/banner/music_mb.jpg'
import bannerCompetitionMB from '@/assets/images/banner/competition_mb.jpg'
import bannerVenuesMB from '@/assets/images/banner/venues_mb.jpg'
import bannerScheduleMB from '@/assets/images/banner/schedule_mb.jpg'
import bannerTicketsMB from '@/assets/images/banner/tickets_mb.jpg'
import { isMobile } from '@/utils/device'

export const MOBILE_PREFIX = '/mobile'

export enum PATH {
    HOME = '/home',
    INSTRUCTORS = '/instructors',
    MUSIC = '/music',
    COMPETITION = '/competition',
    VENUES = '/venues',
    SCHEDULE = '/schedule',
    TICKETS = '/tickets',
}

const pages = [
    {
        nameCn: '首页',
        nameEn: 'HOME',
        path: PATH.HOME
    },
    {
        nameCn: '教师介绍',
        nameEn: 'INSTRUCTORS',
        path: PATH.INSTRUCTORS,
        banner: bannerInstructors,
        bannerMB: bannerInstructorsMB
    },
    {
        nameCn: '关于音乐',
        nameEn: 'MUSIC',
        path: PATH.MUSIC,
        banner: bannerMusic,
        bannerMB: bannerMusicMB
    },
    {
        nameCn: '关于比赛',
        nameEn: 'COMPETITION',
        path: PATH.COMPETITION,
        banner: bannerCompetition,
        bannerMB: bannerCompetitionMB
    },
    {
        nameCn: '场地介绍',
        nameEn: 'VENUES',
        path: PATH.VENUES,
        banner: bannerVenues,
        bannerMB: bannerVenuesMB
    },
    {
        nameCn: '活动日程',
        nameEn: 'SCHEDULE',
        path: PATH.SCHEDULE,
        banner: bannerSchedule,
        bannerMB: bannerScheduleMB
    },
    {
        nameCn: '课程及报名',
        nameEn: 'CLASS & TICKETS',
        path: PATH.TICKETS,
        banner: bannerTickets,
        bannerMB: bannerTicketsMB
    },
].map(p => isMobile ? { ...p, path: MOBILE_PREFIX + p.path } : p)

export default pages
import { useRoute } from "vue-router"
import pages from "@/constants/pages"
import { computed } from "vue"

export const usePage = () => {
    const route = useRoute()
    return computed(() => pages.find(p => p.path === route.path))
}
import config from "@/assets/2024/config.json"
import { isCnEnvironment } from "@/utils/device"

type RawConfig = typeof config
const cfg = {
    ...config,
} as Omit<RawConfig, 'cn' | 'en'> & { cn?: RawConfig['cn'], en?: RawConfig['en'] }
delete cfg.cn
delete cfg.en
const finalCfg = {
    ...cfg,
    ...(isCnEnvironment ? config.cn : config.en)
} as Omit<RawConfig, 'cn' | 'en'> & RawConfig['cn']

export default finalCfg
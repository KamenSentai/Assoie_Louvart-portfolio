import { desktop, mobile } from '@/utils/sizes'
import AcneStudios from './projects/acne-studios'
import Feedchi from './projects/feedchi'
import Mealthy from './projects/mealthy'
import PocketNurse from './projects/pocket-nurse'
import Yukey from './projects/yukey'

export default [
  { ...Yukey, size: mobile },
  { ...Feedchi, size: mobile },
  { ...PocketNurse, size: desktop },
  { ...Mealthy, size: mobile },
  { ...AcneStudios, size: desktop },
]

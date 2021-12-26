import { desktop, mobile } from '@/utils/sizes'
import AcneStudios from './projects/acne-studios'
import Feedchi from './projects/feedchi'
import Mealthy from './projects/mealthy'
import PocketNurse from './projects/pocket-nurse'
import Yukey from './projects/yukey'

export default [
  { ...AcneStudios, position: 5, size: desktop },
  { ...Feedchi, position: 2, size: mobile },
  { ...Mealthy, position: 4, size: mobile },
  { ...PocketNurse, position: 3, size: desktop },
  { ...Yukey, position: 1, size: mobile },
]

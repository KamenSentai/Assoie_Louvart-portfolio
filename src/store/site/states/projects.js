import sizes from '@/utils/sizes'
import AcneStudios from './projects/acne-studios'
import Feedchi from './projects/feedchi'
import Mealthy from './projects/mealthy'
import PocketNurse from './projects/pocket-nurse'
import Yukey from './projects/yukey'

export default [
  { ...AcneStudios, position: 5, size: sizes.desktop },
  { ...Feedchi, position: 2, size: sizes.mobile },
  { ...Mealthy, position: 4, size: sizes.mobile },
  { ...PocketNurse, position: 3, size: sizes.desktop },
  { ...Yukey, position: 1, size: sizes.mobile },
]

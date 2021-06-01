import { VStack } from '@chakra-ui/layout'
import Image from 'next/image'
import NewHeader from '../components/NewHeader'

function NewHeaderPage() {
  return (
    <VStack>
      <Image src="/images/rolling-cloud.jpg" width={1440} height={400} />
      <NewHeader></NewHeader>
    </VStack>
  )
}

export default NewHeaderPage

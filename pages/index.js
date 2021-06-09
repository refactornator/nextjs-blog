import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Container>
        <Heading as="h3" size="lg" mt="16px">
          The Tao of William
        </Heading>
        <Heading as="h5" size="sm" mt="6px" mb="20px" fontWeight="200">
          <Heading as="span" size="sm" fontWeight="300">
            Tao{' '}
          </Heading>
          <i>/dou,tou/</i> - the way or path
        </Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <Text size="lg" my="10px">
              <AccordionButton>
                <AccordionIcon />
                <Text fontWeight="600" ml="4px">
                  Question dogma.
                </Text>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              There is no one right way, and the way will always change.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text size="lg" my="10px">
              <AccordionButton>
                <AccordionIcon />
                <Text fontWeight="600" ml="4px">
                  Social connection is essential.
                </Text>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              We need diverse communities that foster vulnerable honesty in
              order to thrive.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text size="lg" my="10px">
              <AccordionButton>
                <AccordionIcon />
                <Text fontWeight="600" ml="4px">
                  Celebrate your body!
                </Text>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              We only get one, take care of it and use it to uplift yourself and
              others.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text size="lg" my="10px">
              <AccordionButton>
                <AccordionIcon />
                <Text fontWeight="600" ml="4px">
                  Attention is our scarcest resource.
                </Text>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              Don't give your attention to things that harm others. Find time to
              be with yourself.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text size="lg" my="10px">
              <AccordionButton>
                <AccordionIcon />
                <Text fontWeight="600" ml="4px">
                  Learn from the past.
                </Text>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              Life is a chance to continuously learn and build a better future
              for those to come.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text size="lg" my="10px">
              <AccordionButton>
                <AccordionIcon />
                <Text fontWeight="600" ml="4px">
                  Don’t take yourself too seriously.
                </Text>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              Have some fun. Tear down your ego and let yourself be born again.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Text size="lg" mt="40px" mb="30px">
          Check out my{' '}
          <Link href="/essays">
            <a>essays</a>
          </Link>
          .
        </Text>
      </Container>
    </Layout>
  )
}

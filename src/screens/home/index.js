import React from 'react'
import * as Styled from './styled'

import Header from '../../components/Header'
import CreditCard from '../../components/CreditCard'
import Account from '../../components/Account'
import Lending from '../../components/Lending'
import Rewards from '../../components/Rewards'
import { ScrollView } from 'react-native-gesture-handler'
import TabPix from '../../components/TabPix'
import TabPay from '../../components/TabPay'
import TabReferFriends from '../../components/TabReferFriends'
import TabTransfer from '../../components/TabTransfer'
import TabDeposit from '../../components/TabDeposit'
import TabLending from '../../components/TabLending'
import TabVirtualCard from '../../components/TabVirtualCard'
import TabMobileRecharge from '../../components/TabMobileRecharge'
import TabAdjustLimit from '../../components/TabAdjustLimit'
import TabBlockCard from '../../components/TabBlockCard'
import TabDemand from '../../components/TabDemand'
import TabDonation from '../../components/TabDonation'
import TabHelpMe from '../../components/TabHelpMe'

const Home = () => {
  return (
    <>
      <Styled.Container>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CreditCard />
          <Account />
          <Lending />
          <Rewards />
        </ScrollView>
      </Styled.Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Styled.Footer>
          <TabPix />
          <TabPay />
          <TabReferFriends />
          <TabTransfer />
          <TabDeposit />
          <TabLending />
          <TabVirtualCard />
          <TabMobileRecharge />
          <TabAdjustLimit />
          <TabBlockCard />
          <TabDemand />
          <TabDonation />
          <TabHelpMe />
        </Styled.Footer>
      </ScrollView>
    </>
  )
}

export default Home

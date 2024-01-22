import React, { useState } from 'react'

import If from '@/core/components/conditions/if'
import Tabs from '../tabs/transactionTabs/index'
import BetsTab from './tabs/bets'
import HistoryTab from './tabs/history'
import Footer from '../footer/index'

import { useLanguageContext } from '../../hooks/useLanguageContext'

export default function TransactionBar() {
  const [activeTab, setActiveTab] = useState('bets')

  const { selectedLanguage } = useLanguageContext()

  const tabsPT: Tab[] = [
    { key: 'bets', title: 'Apostas' },
    { key: 'history', title: 'Histórico' },
  ]

  const tabsEN: Tab[] = [
    { key: 'bets', title: 'Bets' },
    { key: 'history', title: 'History' },
  ]

  return (
    <div className="h-full flex flex-col mt-10 lg:mt-0 bg-black bg-opacity-20 border border-gray-600 border-opacity-20 rounded-md">
      <div className="flex flex-col transaction-bar min-h-[35.75rem] flex-1 grow w-full p-3">
        <img
          src="../images/logos/logotipo-moto-grau.png"
          alt="logotipo do jogo moto grau"
          className="w-28 lg:w-32 mx-auto mt-[-3rem] lg:mt-[-2rem] mb-3 -rotate-6"
        />
        <section className="w-full flex justify-center">
          <div className="w-full sm:w-[90%]">
            {selectedLanguage === 'pt-BR' ? (
              <Tabs
                tabs={tabsPT}
                size="w-1/2"
                active={activeTab}
                toggle={setActiveTab}
              />
            ) : (
              <Tabs
                tabs={tabsEN}
                size="w-1/2"
                active={activeTab}
                toggle={setActiveTab}
              />
            )}
          </div>
        </section>

        <If condition={activeTab == 'bets'}>
          <BetsTab />
        </If>

        <If condition={activeTab == 'history'}>
          <HistoryTab />
        </If>
      </div>

      <div className="bg-black bg-opacity-20 rounded-t-md">
        <Footer />
      </div>
    </div>
  )
}

import { useLanguageContext } from '../../hooks/useLanguageContext'

export default function Error({ index }) {
  const { selectedLanguage } = useLanguageContext()

  return (
    <div
      className="mt-4 absolute bg-[#121212] rounded-lg top-4 z-50 border-t-[.5rem] border-red-700 border-opacity-70 max-w-full w-[18.75rem] text-center"
      style={{ top: `${index == 0 ? 20 : 20 + 80 * index}px` }}
    >
      <section className={'text-gray-200'} role="alert">
        <div className="flex items-center p-3">
          <p className="font-bold text-xs my-0">
            {selectedLanguage === 'pt-BR'
              ? 'Não foi possível contabilizar sua aposta.'
              : 'Could not count your bet.'}
          </p>
          <p className="text-[.625rem] opacity-50 my-0">
            {selectedLanguage === 'pt-BR'
              ? 'Tente novamente e contate o suporte caso o problema persista.'
              : 'Try again and contact support if the problem persists.'}
          </p>
        </div>
      </section>
    </div>
  )
}

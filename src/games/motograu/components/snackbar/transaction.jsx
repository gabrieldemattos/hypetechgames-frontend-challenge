import { useLanguageContext } from '../../hooks/useLanguageContext'
import { formatCoin } from '../../utils/format-currency'

export default function Transaction({
  amount,
  cashed_out_at,
  index,
}) {
  const { selectedLanguage } = useLanguageContext()

  return (
    <div
      className="absolute border-green-600 rounded-lg top-4 z-50"
      style={{ top: `${index == 0 ? 20 : 30 + 80 * index}px` }}
    >
      <section
        className={
          'bg-green-800 bg-opacity-50 rounded-lg text-gray-200'
        }
        role="alert"
      >
        <div className="flex items-center px-3 py-1">
          <div className="d-flex flex-column text-center items-center mr-5">
            <div className="text-xs">
              <strong>
                {selectedLanguage === 'pt-BR'
                  ? 'Você saiu com'
                  : 'You cashed out with'}
              </strong>
            </div>
            <strong className="text-xs">
              {parseFloat(cashed_out_at).toFixed(2)}x
            </strong>
          </div>

          <div
            className={
              'd-flex flex-column items-center text-center px-3 py-1 bg-green-500 rounded-lg'
            }
          >
            {selectedLanguage === 'pt-BR' ? (
              <>
                <div className="font-bold text-xs">Você ganhou</div>
                <strong className="text-white text-sm">
                  {formatCoin(
                    parseFloat(amount * cashed_out_at).toFixed(2),
                    selectedLanguage
                  )}
                </strong>
              </>
            ) : (
              <>
                <div className="font-bold text-xs">You won</div>
                <strong className="text-white text-sm">
                  {formatCoin(
                    parseFloat(amount * cashed_out_at).toFixed(2),
                    selectedLanguage
                  )}
                </strong>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

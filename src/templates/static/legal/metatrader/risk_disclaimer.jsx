import React from 'react';

const RiskDisclaimer = () => (
    <div>
        <h2 data-anchor='risk-disclosure-statement'>{it.L('Risk disclosure statement')}</h2>
        <p>{it.L('This risk disclosure statement is not exhaustive and is not intended to constitute a comprehensive statement of all the risks to which the client might be exposed and does not describe all the risks inherent to forex and contracts for differences that exist now or which may arise in the future. Its objective is rather to provide the client with information, so that the client can reasonably understand the risks associated with forex and contracts for differences offered by [_1], as it is the Company\'s intention to provide the client with the best possible trading experience.', it.website_name)}</p>

        <h2 data-anchor='forex-and-cfd-high-risk'>{it.L('Forex and contracts for differences are high risk and speculative')}</h2>
        <p>{it.L('Forex and contract for differences transactions involve a high degree of risk and are speculative because they allow the client to speculate on the short-term price movements of the underlying financial instruments. The client should not enter into forex and/or contract-for-difference transactions unless the client is able to sustain losses that exceed the client\'s deposited funds. It is important for the client to understand that in order to realise any value from the client\'s open positions, the client would have to enter into a corresponding transaction to close the client\'s open positions and may find it difficult or impossible to do so under certain market conditions.')}</p>

        <h2 data-anchor='execution-model'>{it.L('Execution model and counterparty risk')}</h2>
        <p>{it.L('[_1] offers forex and contracts for differences via a series of models - either solely dealing on own account (dealing desk), or wholly hedging client orders with the Company\'s liquidity providers (no-dealing desk), or a hybrid model, depending on the Company with which the client has a contract. For the hybrid model, client orders are typically hedged when the total transaction volume exceeds a predefined threshold of risk tolerance level. For these execution models, [_1] acts as the contractual counterparty to the transactions that the client enters into with the Company, as opposed to entering into a contractual counterparty with a central clearing house as would be the case with exchange-traded financial instruments. As such, counterparty risk exists. Counterparty risk refers to the risk of loss for clients resulting from the fact that the counterparty to the forex and/or contract-for-difference transaction that the client has entered into may default on its obligations prior to the final settlement of the transaction\'s cash flow.', it.website_name)}</p>

        <h2 data-anchor='leverage'>{it.L('Leverage')}</h2>
        <p>{it.L('Leverage, in the context of margin trading, refers to the use of margin to increase/amplify the value of a trade. Leverage is expressed as a ratio. A 50:1 leverage, for example, means that the client would be able to enter into a trade position that is of 50 times higher than the client\'s margin. When the client invests in a leveraged product, the client\'s profit or loss is based on the leveraged position, i.e. the increased/amplified value of the client\'s trade is determined based on the leverage ratio that the client has set for the client\'s account.')}</p>
        <p>{it.L('Leverage can be used to generate returns that are of multiple times higher than the amount set aside from the client\'s account balance to open and maintain a transaction (the client\'s margin). However, investments that have the potential to deliver greater investment returns carry higher levels of risk. This means that if the price movement is against the client\'s favour, the client will suffer losses that are multiple times higher than the amount set aside from the client\'s account balance to open and maintain a transaction (the client\'s margin).')}</p>

        <h2 data-anchor='relationship-between-margin-and-leverage'>{it.L('Relationship between margin and leverage')}</h2>
        <p>{it.L('The leverage ratio refers to the number of times that the client\'s margin (the amount set aside from the client\'s account balance to open and maintain a transaction) can be "leveraged" to enter into a transaction. The denominator of the leverage ratio is always one. A 50:1 leverage is equivalent to a 2% margin requirement (1 divided by 50 = 2%). The leverage ratio that the Company/the client establishes will determine the amount of margin required. As leverage is inversely proportional to margin, as the leverage that the client sets for the client\'s account gets lower, the margin required to be set aside from the client\'s account balance (the client\'s margin requirement) gets higher.')}</p>

        <h2 data-anchor='risk-of-stop-order'>{it.L('Risk of stop order')}</h2>
        <p>{it.L('The system fills orders on a first-in, first-out basis, i.e. based on the sequence of the order received, and this is beyond the Company\'s control. As a result, the client may find it difficult or impossible to close a position at the intended price stipulated in the client\'s stop order during certain market conditions. The placement of stop order by the client, though useful as a risk management tool, will not necessarily limit the client\'s losses to the client\'s intended amounts in the event of highly volatile trading conditions, since market conditions may make it impossible to execute such orders, and there is uncertainty about the client\'s possible exit price. In short, a stop order is not guaranteed because it cannot operate in all market circumstances.')}</p>

        <h2 data-anchor='regular-monitoring'>{it.L('Regular monitoring of open positions')}</h2>
        <p>{it.L('Trading forex and contracts for differences carries a high level of risk and [_1] does not monitor the open positions of the client\'s account on the client\'s behalf. It is the client\'s responsibility to monitor the client\'s open positions and understand the exposure of the client\'s open positions whilst ensuring that the client\'s exposure commensurate with the client\'s risk appetite. Due to the cost associated with overnight open positions, the client should consider investing in the market of the instrument in which the client ordinarily transacts instead of investing in a CFD.', it.website_name)}</p>

        <h2 data-anchor='risk-of-slippage'>{it.L('Risk of slippage')}</h2>
        <p>{it.L('Whilst the Company endeavours to open or close the transaction to which the client\'s orders relate at the requested price, acting in accordance with the Company\'s duty of best execution, there are times when, due to an increase in volatility or volume, orders may be subject to slippage. The difference between the order price and execution price when orders are filled is known as slippage. This means that the client\'s order is not filled at the exact intended quoted price when the client places their order. Slippage is usually seen during periods of extremely high or low volatility and generally occurs during fundamental news releases or periods of limited liquidity. Slippages can result in either a positive slippage (more favourable to the client) or a negative slippage (less favourable to the client).')}</p>

        <h2 data-anchor='external-forces'>{it.L('External forces')}</h2>
        <p>{it.L('The client\'s forex and contract-for-difference transactions with [_1] are linked to an underlying financial instrument, and the client will be exposed to price, currency exchange, interest rate, or other volatility of the market to which the client\'s financial instrument is related to, especially if the market is of a jurisdiction that is foreign to the client. Forex and contract-for-difference trading over the Internet via an electronic trading platform is subject to data latency risk, which may result in delays in order execution.', it.website_name)}</p>
    </div>
);

export default RiskDisclaimer;
